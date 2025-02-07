<template>
  <div class="todo-footer">
    <label>
      <!--      <input type="checkbox" :checked="isAll" @change="handleCheckAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ completedTotal }}</span> / {{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    total() {
      return this.todos.length
    },
    completedTotal() {
      return this.todos.reduce((acc, item) => acc + (item.completed ? 1 : 0), 0)
    },
    isAll: {
      get() {
        return this.completedTotal == this.total && this.total
      },
      set(newVal) {
        this.checkAllTodo(newVal)
      }
    }
  },
  methods: {
    // handleCheckAll(e) {
    //   this.checkAllTodo(e.target.checked)
    // }
    clearAll() {
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>