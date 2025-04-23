<template>
  <div class="container">
    <Category title="美食分类">
      <img src="./assets/images/legal.png" alt="delicious food"/>
    </Category>

    <Category title="游戏分类">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>

    <Category title="电影分类">
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
    </Category>
  </div>
</template>

<script>
import Category from '@/components/Category'

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
.container {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}

img {
  width: 100%;
}
</style>