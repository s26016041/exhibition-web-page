<template>
    <div class="IntroductionOfWorks">
        <img :src="gifPath" alt="Dynamic GIF" class="gitImg" />
        <div class="Descriptiontxt">
            <h4 class="Description">{{ gifTextDescription }}</h4>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'IntroductionOfWorks',
    props: {
        gifPath: {
            type: String,
            required: true
        },
        gifTextDescription: {
            type: String,
            required: true
        }
    }
}
</script>
  
<style>
.IntroductionOfWorks {
    display: flex;
    flex-direction: column;
    align-items: center;
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

.gitImg {
    width: 200px;
    /* 设置宽度 */
    height: 200px;
    /* 设置高度 */
}

.Descriptiontxt {
    width: 200px;
    /* 设置描述框宽度 */
    height: 200px;
    /* 设置描述框高度 */
    overflow-x: hidden;
    /* 隐藏水平滚动条 */
    overflow-y: auto;
    /* 仅在垂直方向上显示滚动条 */
    word-wrap: break-word;
    /* 确保长单词换行 */
    word-break: break-word;
    /* 确保长单词换行 */
}

.Description {
    font-size: 16px;
    /* 字体大小 */
    text-align: center;
    /* 文字居中对齐 */
    margin: 0;
    /* 移除默认外边距 */
    white-space: normal;
    /* 确保文本换行 */
}
</style>
  