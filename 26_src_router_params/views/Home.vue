<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 多级路由需要完整路由path -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log('Home组件挂载完毕', this)
  },
  beforeDestroy() {
    console.log('Home组件即将被销毁')
  }
}
</script>

<style scoped>
</style>