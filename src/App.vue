<template>
  <div>
    <button @click="sendRequest">发送请求</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "App",
  components: {},
  methods: {
    sendRequest() {
      // axios.get('http://localhost:9999/backend-mock/restapi/v1/test2').then(
      //     response => {
      //       console.log('请求成功！', response.data)
      //     },
      //     error => {
      //       console.log('请求失败！', error.message)
      //     }
      // )

      // axios.post('http://localhost:9999/backend-mock/restapi/v1/test', '')
      // axios.post('http://localhost:8080/backend-mock/restapi/v1/test', '')
      axios.post('http://localhost:8080/backend/backend-mock/restapi/v1/test', '')
          .then(response => console.log('请求成功！', response.data))
          .catch(error => console.log('请求失败！', error.message));
    }
  }
}
</script>

<style>
</style>