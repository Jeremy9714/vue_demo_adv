<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <TheItem v-for="todoObj in todos"
               :key="todoObj.id"
               :todo="todoObj"
      />
    </transition-group>
  </ul>
</template>

<script>
import TheItem from '@/components/TheItem'

export default {
  name: "TheList",
  components: {
    TheItem
  },
  props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.todo-enter-active {
  animation: todo-animation 0.5s linear;
}

.todo-leave-active {
  animation: todo-animation 0.5s linear reverse;
}

@keyframes todo-animation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>