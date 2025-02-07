<template>
  <div class="demo">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="showName">点击提示名称</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: 'Newcastle University',
      address: 'NewCastle'
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  }
}
</script>

<style scoped>

</style>