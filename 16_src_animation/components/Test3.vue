<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear>
      <h1 v-show="isShow" key="1">Hello3</h1>
      <h1 v-show="!isShow" key="2">Hello4</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test3",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
}

.v-enter, .v-leave-to {
  transform: translateX(-100%);
}

.v-enter-to, .v-leave {
  transform: translateX(0px);
}

.v-enter-active, .v-leave-active {
  transition: 0.5s linear;
}

</style>