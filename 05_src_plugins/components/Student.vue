<template>
  <div>
    <h2>学生姓名:{{ name | mySlice }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <button @click="hello">测试按钮</button>
  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      name: 'Jeremy',
      gender: 'male'
    }
  }
}
</script>