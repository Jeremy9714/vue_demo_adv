<template>
  <div>
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
  </div>
</template>

<script>
import {mixin, shareData} from "@/mixin";

export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      name: 'Jeremy',
      gender: 'male',
      // 如果混合中配置了与data(或者配置了相同的methods)相同的属性值，则以你的配置的属性为主(而不以mixin为主)
      x: 666
    }
  },
  mounted() {
    // 但对于生命周期钩子是都会保存的(混合的钩子比你配置的钩子先跑)
    console.log('Student mounted')  
  },
  mixins: [mixin, shareData]
}
</script>