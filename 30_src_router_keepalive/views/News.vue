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
  },
  beforeDestroy() {
    console.log('News before destroyed')
  },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     // console.log('@')
  //     this.opacity -= 0.01
  //     if (this.opacity <= 0) this.opacity = 1
  //   }, 16)
  // },
  activated() {
    console.log('News activated')
    this.timer = setInterval(() => {
      // console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    console.log('News deactivated')
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>