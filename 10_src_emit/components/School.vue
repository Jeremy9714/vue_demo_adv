<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="sendSchoolName">发送学校名</button>
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
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>