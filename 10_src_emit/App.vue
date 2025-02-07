<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <h1>获取的学生姓名: {{ studentName }}</h1>
    <School :getSchoolName="getSchoolName"></School>
    <!--    <Student @getStudentName="getStudentName"></Student>-->
    <!--    通过native绑定原生dom事件，否则认为是自定义事件-->
    <Student ref="student" @click.native="show"></Student>
  </div>
</template>

<script>
import School from "@/components/School";
import Student from "@/components/Student";

export default {
  name: "App",
  components: {Student, School},
  data() {
    return {
      msg: 'Hello World',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('收到学校名', name)
    },
    getStudentName(name, ...rest) {
      console.log('收到学生名', name, rest)
      this.studentName = name
    },
    demo() {
      console.log("demo invoked")
    },
    show() {
      alert("show invoked")
    }
  },
  mounted() {
    setTimeout(() => {
      // this.$refs.student.$once('getStudentName', this.getStudentName)
      this.$refs.student.$on('getStudentName', this.getStudentName) // methods中的this为vc对象

      // this.$refs.student.$on('getStudentName', function (name, ...rest) {
      //   // this为调用自定义事件的vueComponent对象
      //   console.log('收到学生名', name, rest)
      //   console.log(this)
      //   this.studentName = name
      // })

      // this.$refs.student.$on('getStudentName', (name, ...rest) => {
      //   // 箭头函数无this, 向外层寻找
      //   console.log('收到学生名', name, rest)
      //   console.log(this)
      //   this.studentName = name
      // })
      this.$refs.student.$on('demo', this.demo)
    }, 3000)
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
}
</style>