<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ['getSchoolName'],
  data() {
    return {
      name: 'Newcastle',
      address: 'London'
    }
  },
  mounted() {
    this.$bus.$on('greeting', (name) => {
      console.log('School received studentName: ', name)
    })
  },
  beforeDestroy() {
    this.$bus.$off('greeting')
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>