<template>
  <ul>
    <li :style="{opacity}">Messages</li>
    <li v-for="n in newsList" :key="n.id">{{ n.title }}
      <input type="text">
    </li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        {id: '001', title: 'news001'},
        {id: '002', title: 'news002'},
        {id: '003', title: 'news003'}
      ],
      opacity: 1
    }
  }
}
</script>

<style scoped>

</style>