<template>
  <div>
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
//引入混合
import {mixin, shareData} from "@/mixin";

export default {
  name: "School",
  data() {
    console.log(this);
    return {
      name: 'Newcastle',
      address: 'L7 7AG'
    }
  },
  mixins: [mixin, shareData]
}
</script>