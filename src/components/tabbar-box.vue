<template>
    <div class="tabBar">
        <tabbar>
            <tabbar-item link="/home-page">
                <svg class="icon" aria-hidden="true" slot="icon" icon-active>
                    <use xlink:href="#icon-zhuye"></use>
                </svg>
                <span slot="label">主页</span>
            </tabbar-item>
            <tabbar-item link="/the-tao">
                <svg class="icon" aria-hidden="true" slot="icon" icon-active>
                    <use xlink:href="#icon-shouhu"></use>
                </svg>
                <span slot="label">微淘</span>
            </tabbar-item>
            <tabbar-item link="/message">
                <svg class="icon" aria-hidden="true" slot="icon" icon-active>
                    <use xlink:href="#icon-xinxi"></use>
                </svg>
                <span slot="label">消息</span>
            </tabbar-item>
            <tabbar-item link="/community">
                <svg class="icon" aria-hidden="true" slot="icon" icon-active>
                    <use xlink:href="#icon-shequ"></use>
                </svg>
                <span slot="label">社区</span>
            </tabbar-item>
            <tabbar-item link="/personal-center">
                <svg class="icon" aria-hidden="true" slot="icon" icon-active>
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
    data() {

        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="less" >
.tabBar {
    .weui-tabbar {
        position: fixed;
        bottom: 0px;
        background: #fff;
        .weui-tabbar__icon {
            width: 100% !important;
        }
        .icon {
            font-size: 60px;
        }
    }
}
</style>


