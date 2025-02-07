<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">Hello</h1>
    </transition>
    
    <transition name="test" appear>
      <h2 v-show="isShow">World</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1,h2 {
  background-color: orange;
}

.v-enter-active {
  animation: animate1 0.5s linear;
}

.v-leave-active {
  animation: animate1 0.5s linear reverse;
}

.test-enter-active {
  animation: animate1 0.5s linear;
}

.test-leave-active {
  animation: animate1 0.5s linear reverse;
}

@keyframes animate1 {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>