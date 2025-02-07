<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <input type="text" v-fbind:value="name"/>
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    console.log(this);
    return {
      name: 'Newcastle',
      address: 'UK'
    }
  }
}
</script>