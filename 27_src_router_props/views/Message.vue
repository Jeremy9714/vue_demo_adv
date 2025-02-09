<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!--        <router-link :to="`/home/message/detail/${m.id}/${m.name}`">-->
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