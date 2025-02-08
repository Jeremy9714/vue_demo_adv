<template>
  <div>
    <h1>人员列表</h1>
    <h3>上方组件求和总和为: {{ sum }}</h3>
    <input type="text" placeholder="请输入姓名" v-model.trim="name">
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'

export default {
  name: "Person",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    sum() {
      return this.$store.state.counterOpt.sum
    },
    ...mapState('personOpt', ['persons'])
  },
  methods: {
    addPerson() {
      if (!this.name.trim || this.name === '') {
        return alert('The name cannot be empty!')
      }
      this.$store.commit('personOpt/addPerson', {id: nanoid(), name: this.name})
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>