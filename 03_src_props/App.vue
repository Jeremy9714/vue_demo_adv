<template>
  <div id="app">
    <Student name="Jeremy" :age="28" gender="male"/>
    <hr>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: "App",
  components: {
    Student
  }
}
</script>

<style scoped>

</style>