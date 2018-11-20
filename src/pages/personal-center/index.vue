<template>
    <div class="personal_center">
        <div class="head_fixed" v-show="!isShow" :style="opacityStyle">
            <span>芝麻凛</span>
            <span @click="jumpSet()">设置</span>
        </div>
        <div class="personal_center_head">
            <div class="head_message">
                <div class="head_personal_details">
                    <img src="../../assets/images/headPhone.jpg" alt="" class="animated zoomIn">
                    <span class="animated bounc eInLeft delay_time">芝麻凛</span>
                </div>
                <div class="head_tabbar">
                    <div class="tabbar_flex">
                        <span>此</span>
                        <span>1</span>
                    </div>
                    <div class="tabbar_flex">
                        <span>彼</span>
                        <span>1</span>
                    </div>
                    <div class="tabbar_flex">
                        <span>绘</span>
                        <span>1</span>
                    </div>
                    <div class="tabbar_flex">
                        <span>卷</span>
                        <span>0</span>
                    </div>
                </div>
                <svg class="icon head_setting" aria-hidden="true" @click="jumpSet()">
                    <use xlink:href="#icon-shezhi"></use>
                </svg>
            </div>
        </div>
        <div class="personal_center_content">
            <!-- 图标组件 -->
            <icon-library></icon-library>
            <icon-library></icon-library>
            <icon-library></icon-library>
            <icon-library></icon-library>
            <icon-library></icon-library>
            <icon-library></icon-library>
        </div>
        <div class="placeholder_box"></div>
        <div>
        </div>
    </div>
</template>

<script>
// import { Tabbar, TabbarItem } from 'vux'
import iconLibrary from '@/components/icon-library'
// import func from './vue-temp/vue-editor-bridge';
export default {
    components: {
        iconLibrary
    },
    name: 'personalCenter',
    data() {
        return {
            isShow: false,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    // created() { },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    /*     
        beforeDestroy() { },
        destroy() { }, */
    methods: {
        /* 顶部淡入淡出 */
        handleScroll() {
            const top = document.documentElement.scrollTop;
            // console.log(top)
            if (top > 0) {
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = { opacity };
                this.isShow = false;
            } else {
                this.isShow = true;
            }
        },
        /* 跳转设置页 */
        jumpSet() {
            this.$router.push({ path: "./personal-setting" })
        }
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>
<style lang="less" scoped>
</style>

