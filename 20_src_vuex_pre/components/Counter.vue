<template>
  <div>
    <h1>当前总和为: {{ sum }}</h1>
    <select v-model.number="num">
      <!--      <option :value="1">1</option>-->
      <!--      <option :value="2">2</option>-->
      <!--      <option :value="3">3</option>-->
      <option v-for="(number,index) of 3" :key="index" :value="number">{{ number }}</option>
    </select>
    <button @click="add">增加</button>
    <button @click="minus">减少</button>
    <button @click="addIfOdd">总和为奇数时增加</button>
    <button @click="addLater">延迟增加</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      num: 1,
      sum: 0
    }
  },
  methods: {
    add() {
      this.sum += this.num
    },
    minus() {
      this.sum -= this.num
    },
    addIfOdd() {
      if (this.sum % 2) this.sum += this.num
    },
    addLater() {
      setTimeout(() => this.sum += this.num, 2000)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>