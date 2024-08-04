<template>
    <button class="buttonToDollHouse" @click="navigateToDollHouse">換頁</button>
</template>
    
<script>
export default {
    name: 'PageChangeButtonToDollHouse',
    methods: {
        navigateToDollHouse() {
            this.$router.push('/doll-house');
        }
    }
}
</script>
    
<style>
/* 可以添加样式 */
</style>
    