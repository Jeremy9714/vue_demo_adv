<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <button @click="sendStudentName">发送学生姓名</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: 'Jeremy',
      gender: 'male',
    }
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('greeting', this.name)
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