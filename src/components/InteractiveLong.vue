<template>
  <div class="InteractiveLong">
    <div class="header">
      <button class="lognButton">logn</button>
      <div class="top-row">
        <button class="circle1"></button>
        <button class="circle2"></button>
        <button class="circle3"></button>
      </div>
    </div>
    <textarea class="bamerText" readonly>bamer</textarea>
    <textarea class="interactiveText" readonly>互動區</textarea>
  </div>
</template>

<script>
export default {
  name: 'InteractiveLong',
  props: {}
}
</script>

<style>
.InteractiveLong {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 居中对齐 */
  width: 230px;
  /* 设置宽度 */
  height: 400px;
  /* 设置高度 */
  border: 2px solid #040607d8;
  /* 边框样式 */
  padding: 10px;
  /* 内边距 */
  margin: 10px;
  /* 外边距 */
}

.header {
  display: flex;
  justify-content: space-between;
  /* 使子元素在容器两端对齐 */
  align-items: center;
  /* 垂直居中对齐 */
  width: 90%;
  /* 确保 header 容器宽度占满父容器 */
  margin-bottom: 10px;
  /* 设置底部外边距 */
}

.lognButton {
  width: 50px;
  /* 设置按钮宽度 */
  height: 25px;
  /* 设置按钮高度 */
  border-radius: 50%;
  /* 使按钮变成圆形 */
  font-size: 10px;
  /* 字体大小 */
}

.top-row {
  display: flex;
  flex-direction: column;
  /* 垂直排列 */
  gap: 10px;
  /* 元素之间的间距 */
}

.circle1,
.circle2,
.circle3 {
  width: 10px;
  /* 设置按钮宽度 */
  height: 12px;
  /* 设置按钮高度 */
  border-radius: 50%;
  /* 使按钮变成圆形 */
  border: none;
  /* 去掉默认边框 */
}

.circle1 {
  background-color: #d1121b;
}

.circle2 {
  background-color: #3498db;
}

.circle3 {
  background-color: #08a549;
}

.bamerText {
  width: 200px;
  /* 设置文本框宽度 */
  height: 60px;
  /* 设置文本框高度 */
  resize: none;
  /* 禁用调整大小 */
  font-size: 16px;
  /* 字体大小 */
  margin-bottom: 10px;
  /* 设置底部外边距 */
}

.interactiveText {
  width: 200px;
  /* 设置文本框宽度 */
  height: 250px;
  /* 设置文本框高度 */
  resize: none;
  /* 禁用调整大小 */
  font-size: 16px;
  /* 字体大小 */
}
</style>
