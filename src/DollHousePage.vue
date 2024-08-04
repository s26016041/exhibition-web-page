<template>
    <div class="container">
        <div class="DollHousePage">
            <DollImg :DollImgSrc="require('@/assets/dollImg1.png')" :setX="0" :setY="0" />
            <DollImg :DollImgSrc="require('@/assets/dollImg2.png')" :setX="120" :setY="0" />
            <DollImg :DollImgSrc="require('@/assets/dollImg3.png')" :setX="220" :setY="0" />
        </div>
    </div>
</template>

<script>

import DollImg from './components/DollImg.vue'

export default {
    name: 'DollHousePage',
    components: {
        DollImg
    }
}
</script>

<style>
* {
    cursor: url('@/assets/mouseImg.png'), auto;
}

body,
html {
    margin: 0;
    height: 100%;
    width: 100%;
}

.container {
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    height: 100vh;
    /* 视口高度 */
}

.DollHousePage {
    width: 847px;
    height: 1024px;
    background-image: url('@/assets/dollbg.jpg');
    /* 设置背景图片 */
    background-size: cover;
    /* 背景图片覆盖整个容器 */
    background-position: center;
    /* 图片居中显示 */
    background-repeat: no-repeat;
    /* 避免图片重复 */
}
</style>
