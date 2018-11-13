<template>
    <div id="app">
        <router-view />
        <tabbar>
            <tabbar-item>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zhuye"></use>
                </svg>
                <span slot="label">主页</span>
            </tabbar-item>
            <tabbar-item show-dot>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouhu"></use>
                </svg>
                <span slot="label">Message</span>
            </tabbar-item>
            <tabbar-item selected link="/component/demo">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shequ"></use>
                </svg>
                <span slot="label">Explore</span>
            </tabbar-item>
            <tabbar-item badge="2" link="/personal-center">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wode"></use>
                </svg>
                <span slot="label">我</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
    components: {
        Tabbar,
        TabbarItem
    },
    name: 'App'
}
</script>

<style lang="less">
// @import '~vux/src/styles/reset.less';
// @import '~vux/src/styles/1px.less';
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*   color: #2c3e50;
  margin-top: 60px; */
    .weui-tabbar {
        position: fixed;
        bottom: 0px;
        background: linear-gradient(to left, blue, purple);
        height: 80px;
        display: flex;
        justify-content: space-between;
        // align-items: center;
        a {
            text-decoration: none;
        }
    }
}
</style>
