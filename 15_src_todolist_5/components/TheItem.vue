<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input type="text"
             v-show="todo.isEdit"
             :value="todo.title"
             @blur="handleBlur(todo, $event)"
             ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "TheItem",
  props: ['todo'],
  methods: {
    handleCheck(id) {
      this.$bus.$emit('checkTodo', id)
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
        // console.log(todo)
      }
      // 方法未执行完，数据变更，vue也不会立刻重新解析模板 
      // $nextTick确保 dom节点更新完毕后执行回调函数
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    handleDelete(id) {
      this.$bus.$emit('deleteTodo', id)
    },
    handleBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('The title cannot be empty!')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}
</style>