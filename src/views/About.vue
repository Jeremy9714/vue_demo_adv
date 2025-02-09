<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // 通过路由规则，进入组件时调用
  beforeRouteEnter: (to, from, next) => {
    console.log('路由到About组件')
    if (localStorage.getItem('user') === 'Jeremy') {
      // 放行
      next()
    } else {
      alert('Unauthorized actions')
    }
  },
  // 通过路由规则，离开组件时调用
  beforeRouteLeave: (to, from, next) => {
    console.log('路由出About组件')
    next()
  }
}
</script>

<style scoped>

</style>