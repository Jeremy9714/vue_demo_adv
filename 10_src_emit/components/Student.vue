<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="add">增加年龄</button>
    <button @click="sendStudentName">发送学生名</button>
    <button @click="unbind">解绑事件</button>
    <button @click="terminate">销毁组件实例</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: 'Jeremy',
      gender: 'male',
      age: 18
    }
  },
  methods: {
    add() {
      console.log('add invoked')
      this.age++
    },
    sendStudentName() {
      this.$emit('getStudentName', this.name, this.gender)
      this.$emit('demo')
    },
    unbind() {
      // this.$off('getStudentName')
      // this.$off(['getStudentName', 'demo'])
      this.$off()
    },
    terminate() {
      this.$destroy()
    }
  }
}
</script>

<style scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>