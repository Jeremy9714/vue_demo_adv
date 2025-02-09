<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!--        <router-link :to="`/home/message/detail?id=${m.id}&name=${m.name}`">-->
        <router-link :to="{
          // path: '/home/message/detail',
          name: 'message-detail', // 命名路由
          query:{
            id: m.id,
            name: m.name
          }
        }">
          {{ m.name }}
        </router-link>&nbsp;&nbsp;
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
  }
}
</script>

<style scoped>

</style>