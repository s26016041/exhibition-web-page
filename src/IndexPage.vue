<template>
  <div id="indexPage">
    <div class="container">
      <InteractiveLong />
      <IntroductionOfWorks :gifPath="require('@/assets/gifTest.gif')" :gifTextDescription="`這是一隻在聚光燈下面跳舞的貓`" />
    </div>
    <PageChangeButtonToDollHouse />
  </div>
  <router-view></router-view>
</template>

<script>
import InteractiveLong from './components/InteractiveLong.vue'
import IntroductionOfWorks from './components/IntroductionOfWorks.vue'
import PageChangeButtonToDollHouse from './components/PageChangeButtonToDollHouse.vue'


export default {
  name: 'IndexPage',
  components: {
    InteractiveLong,
    IntroductionOfWorks,
    PageChangeButtonToDollHouse
  }
}
</script>

<style>
* {
  cursor: url('@/assets/mouseImg.png'), auto;
}

#indexPage {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
  /* 水平居中对齐 */
  gap: 20px;
  /* 元素之间的间距 */
}
</style>
