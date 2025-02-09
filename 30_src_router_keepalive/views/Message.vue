<template>
  <div>
    <ul>
      <li :style="{opacity}">Messages</li>
      <li v-for="m in messages" :key="m.id">
        <router-link :to="{
          name:'message-detail', // params不能使用path
          // params:{
          query:{
            id:m.id,
            name:m.name
          }
        }">
          {{ m.name }}
        </router-link>&nbsp;&nbsp;
        <button @click="pushToDetail(m)">push查看</button>
        <button @click="replaceToDetail(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      opacity: 1,
      messages: [
        {id: '001', name: 'message001'},
        {id: '002', name: 'message002'},
        {id: '003', name: 'message003'}
      ]
    }
  },
  methods: {
    pushToDetail(m) {
      this.$router.push({
        name: 'message-detail',
        query: {
          id: m.id,
          name: m.name
        }
      })
    },
    replaceToDetail(m) {
      this.$router.replace({
        name: 'message-detail',
        query: {
          id: m.id,
          name: m.name
        }
      })
    }
  },
  beforeDestroy() {
    console.log('Message before destroyed')
    clearInterval(this.timer)
  },
  mounted() {
    console.log('Message mounted')
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  activated() {
    console.log('Message activated')
  },
  deactivated() {
    console.log('Message deactivated')
  }
}
</script>

<style scoped>

</style>