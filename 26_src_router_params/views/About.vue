<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log('About组件挂载完毕', this)
  },
  beforeDestroy() {
    console.log('About组件即将被销毁')
  }
}
</script>

<style scoped>

</style>