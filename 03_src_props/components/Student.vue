<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ myAge }}</h2>
    <h2>性别: {{ gender }}</h2>
    <button @click="changeAge">增加年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: '学生信息',
      myAge: this.age + 1
    }
  },
  // props: ['name', 'age', 'gender']
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 18
    },
    gender: {
      type: String,
      required: true
    }
  },
  methods: {
    changeAge() {
      this.myAge++
    }
  }

}
</script>

<style scoped>

</style>