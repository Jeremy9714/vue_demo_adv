<template>
  <div>
    <!--    <h1>当前总和为: {{ $store.state.sum }}</h1>-->
    <h1>当前总和为: {{ sum }}</h1>
    <!--    <h3>当前总和的十倍为: {{ $store.getters.bigNum }}</h3>-->
    <h3>当前总和的十倍为: {{ bigNum }}</h3>
    <h4>姓名{{ name }}</h4>
    <h4>年龄{{ age }}</h4>
    <h4>下方组件总人数为: {{ persons.length }}</h4>

    <select v-model.number="num">
      <!--      <option :value="1">1</option>-->
      <!--      <option :value="2">2</option>-->
      <!--      <option :value="3">3</option>-->
      <option v-for="(number,index) of 3" :key="index" :value="number">{{ number }}</option>
    </select>
    <button @click="add">增加</button>
    <button @click="minus(num)">减少</button>
    <button @click="addIfOdd">总和为奇数时增加</button>
    <button @click="addLater(num)">延迟增加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "Counter",
  data() {
    return {
      num: 1
    }
  },
  methods: {
    add() {
      this.$store.dispatch('counterOpt/add', this.num)
    },
    // minus() {
    //   this.$store.commit('minus', this.num)
    // },

    // mapMutations用于生成与mutations对话的方法($store.commit)
    // 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象
    ...mapMutations('counterOpt', ['minus']),

    addIfOdd() {
      this.$store.dispatch('counterOpt/addOdd', this.num)
    },
    // addLater() {
    //   this.$store.dispatch('addLater', this.num)
    // }

    // mapActions用于生成与actions对话的方法($store.dispatch)
    // 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象
    ...mapActions('counterOpt', ['addLater'])
  },
  computed: {
    // // 手动加计算属性
    // name() {
    //   return this.$store.state.name
    // },
    // age() {
    //   return this.$store.state.age
    // }

    // mapState用于将state中的数据映射为计算属性
    // ...mapState({name: 'name', age: 'age'})
    ...mapState('counterOpt', ['sum', 'name', 'age']),
    ...mapState('personOpt', ['persons']),

    // mapGetters用于将getters中的数据映射为计算属性
    ...mapGetters('counterOpt', ['bigNum'])
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>