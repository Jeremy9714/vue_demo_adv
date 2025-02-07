<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TheHeader @addTodo="addTodo"></TheHeader>
        <TheList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></TheList>
        <TheFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></TheFooter>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheList from "@/components/TheList";
import TheFooter from '@/components/TheFooter'

export default {
  name: "App",
  components: {
    TheHeader,
    TheList,
    TheFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    checkTodo(id) {
      const todo = this.todos.find(todoObj => todoObj.id === id)
      todo.completed = !todo.completed
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todoObj => todoObj.id !== id)
    },
    checkAllTodo(completed) {
      this.todos.forEach(todoObj => todoObj.completed = completed)
    },
    clearAllTodo() {
      this.todos = this.todos.filter(todoObj => !todoObj.completed)
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newVal) {
        localStorage.setItem('todos', JSON.stringify(newVal))
      }
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>