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
      <!-- 组件保持挂载，不被销毁; 可以通过include指定要缓存的组件名 -->
      <keep-alive :include="'News'"> 
<!--      <keep-alive include="News"> -->
<!--      <keep-alive :include="['News','Message']"> -->
        <router-view>
        </router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
</style>