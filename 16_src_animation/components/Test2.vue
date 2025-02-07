<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="test" appear>
      <h1 v-show="isShow">Hello2</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test2",
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

/*进入起点、离开终点*/
.test-enter, .test-leave-to {
  transform: translateX(-100%);
}

/*进入终点、离开起点*/
.test-enter-to, .test-leave {
  transform: translateX(0px);
}

/*进入过程、离开过程*/
.test-enter-active, .test-leave-active {
  transition: 0.5s linear;
}

</style>