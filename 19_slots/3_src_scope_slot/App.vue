<template>
  <div class="container">
    <Category title="游戏分类">
      <template scope="obj">
        <ul>
          <li v-for="(g, index) in obj.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏分类">
      <!-- 解构赋值 -->
      <template scope="{games}">
        <ol>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏分类">
      <template slot-scope="{games,msg}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }} - {{ msg }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from '@/components/Counter'

export default {
  name: "App",
  components: {
    Category
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