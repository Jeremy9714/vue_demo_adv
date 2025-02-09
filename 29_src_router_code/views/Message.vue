<template>
  <div>
    <ul>
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
  }
}
</script>

<style scoped>

</style>