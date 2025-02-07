<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点击获取真实dom元素</button>
    <School ref="vc"/>
  </div>
</template>

<script>
import School from './components/School'

export default {
  name: "App",
  components: {
    School
  },
  data() {
    return {
      msg: "message"
    }
  },
  methods: {
    showDom() {
      console.log(this.$refs)
    }
  }
}
</script>

<style scoped>

</style>