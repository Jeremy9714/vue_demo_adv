<template>
  <div>
    <h4>ID: {{ id }}</h4>
    <h4>name: {{ name }}</h4>
<!--    <h4>{{ a }}</h4>-->
<!--    <h4>{{ b }}</h4>-->
  </div>
</template>

<script>
export default {
  name: "Detail",
  // 路由props
  props: ['id', 'name']
}
</script>

<style scoped>

</style>