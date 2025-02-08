<template>
  <div>
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from '@/components/Counter'

export default {
  name: "App",
  components: {
    Counter
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>