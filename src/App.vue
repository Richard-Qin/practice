<template>
    <div id="app">
        <router-view />
        <tabbar>
            <tabbar-item>
                <svg class="icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-zhuye"></use>
                </svg>
                <span slot="label">主页</span>
            </tabbar-item>
            <tabbar-item>
                <svg class="icon" slot="icon" aria-hidden="true">
                    <use xlink:href="#icon-zhuye"></use>
                </svg>
                <span slot="label">主页</span>
            </tabbar-item>
            <tabbar-item>
                <svg class="icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-shouhu"></use>
                </svg>
                <span slot="label">消息</span>
            </tabbar-item>
            <tabbar-item link="/component/demo">
                <svg class="icon" aria-hidden="true" slot="icon">
                    <use xlink:href="#icon-shequ"></use>
                </svg>
                <span slot="label">Explore</span>
            </tabbar-item>
            <tabbar-item link="/personal-center">
                <svg class="icon" aria-hidden="true" slot="icon">
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
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    .weui-tabbar {
        position: fixed;
        bottom: 0px;
        background: #fff;
        .weui-tabbar__icon {
            width: 100%;
        }
        .icon {
            font-size: 60px;
        }
        @tabbar-text-active-color: red;
    }
}
</style>
