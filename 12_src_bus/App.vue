<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School></School>
    <Student></Student>
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
    }
  },
}
</script>

<style scoped>
.app {
  background-color: gray;
}
</style>