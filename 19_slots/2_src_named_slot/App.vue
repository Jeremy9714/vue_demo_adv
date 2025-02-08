<template>
  <div class="container">
    <Category title="美食分类">
      <img slot="content" src="./assets/images/legal.png" alt="delicious food"/>
      <a slot="footer" href="https://www.baidu.com">更多美食</a>
    </Category>

    <Category title="游戏分类">
      <ul slot="content">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="footer" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影分类">
      <video slot="content" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
      <template v-slot:footer>
        <div class="footer">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>Welcome</h4>
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
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '龙虾', '牛肉'],
      games: ['猛汉', '血源', '魔兽', '宝可梦'],
      films: ['哈利波特', '指环王', '变形金刚', '电锯惊魂']
    }
  }
}
</script>

<style scoped>
.container, .footer {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>