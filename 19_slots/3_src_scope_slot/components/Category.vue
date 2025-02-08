<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games" :msg="msg">blank page</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title'],
  data() {
    return {
      games: ['猛汉', '血源', '魔兽', '宝可梦'],
      msg: 'msg'
    }
  }
}
</script>

<style scoped>
.category {
  background: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background: orange;
}
</style>