<template>
    <div class="tabBar">
        <div>第一</div>
        <div>第二</div>
        <div>第三</div>
        <div>第四</div>
    </div>
</template>
<script>
export default {
    name: 'tabBar',
    data() {

        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.tabBar {
    display: flex;
    justify-content: space-around;
    div {
        background: red;
    }
}
</style>


