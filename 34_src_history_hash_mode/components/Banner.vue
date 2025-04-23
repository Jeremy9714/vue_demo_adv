<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="login">登录</button>
    <button @click="logout">登出</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.go(-1)
      // this.$router.back()
    },
    forward() {
      this.$router.go(1)
      // this.$router.forward()
    },
    login() {
      localStorage.setItem('user', 'Jeremy')
    },
    logout() {
      localStorage.removeItem('user')
    }
  }
}
</script>

<style scoped>

</style>