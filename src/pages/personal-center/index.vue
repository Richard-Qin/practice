<template>
    <div>
        <div class="head_fixed">
            <span>芝麻凛</span>
            <span>设置</span>
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
                <svg class="icon head_setting" aria-hidden="true">
                    <use xlink:href="#icon-shezhi"></use>
                </svg>
            </div>
            <!-- 图标组件 -->
            <icon-library></icon-library>
            <icon-library></icon-library>
            <icon-library></icon-library>
            <icon-library></icon-library>
        </div>
        <div class="about_content"></div>
    </div>
</template>

<script>
import iconLibrary from '@/components/icon-library'
export default {
    components: {
        iconLibrary
    },
    name: 'personalCenter',
    data() {
        return {

        }
    },
    created() { },
    mounted() { },
    beforeDestroy() { },
    destroy() { },
    methods: {

    }
}
</script>
