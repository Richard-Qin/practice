<template>
    <div id="app">
        <router-view />
        <tabbar-box></tabbar-box>
    </div>
</template>

<script>
import tabbarBox from '@/components/tabbar-box'
export default {
    components: {
        tabbarBox
    },
    name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
