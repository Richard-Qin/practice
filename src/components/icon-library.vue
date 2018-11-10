<template>
    <div class="Icon_library">
        <div class="single_icon">
            <svg class="icon animated rubberBand" aria-hidden="true">
                <use xlink:href="#icon-ziyuan23"></use>
            </svg>
            <span>天坛</span>
        </div>
        <div class="single_icon">
            <svg class="icon animated rubberBand" aria-hidden="true">
                <use xlink:href="#icon-ziyuan22"></use>
            </svg>
            <span>电视台</span>
        </div>
        <div class="single_icon">
            <svg class="icon animated rubberBand" aria-hidden="true">
                <use xlink:href="#icon-ziyuan21"></use>
            </svg>
            <span>大本钟</span>
        </div>
        <div class="single_icon animated rubberBand">
            <svg class="icon " aria-hidden="true">
                <use xlink:href="#icon-ziyuan20"></use>
            </svg>
            <span>女神像</span>
        </div>
        <div class="single_icon">
            <svg class="icon animated rubberBand" aria-hidden="true">
                <use xlink:href="#icon-ziyuan19"></use>
            </svg>
            <span>风车</span>
        </div>
        <div class="single_icon">
            <svg class="icon animated rubberBand" aria-hidden="true">
                <use xlink:href="#icon-ziyuan18"></use>
            </svg>
            <span>基督像</span>
        </div>
        <div class="single_icon">
            <svg class="icon animated rubberBand" aria-hidden="true">
                <use xlink:href="#icon-ziyuan17"></use>
            </svg>
            <span>天安门</span>
        </div>
        <div class="single_icon">
            <svg class="icon animated rubberBand" aria-hidden="true">
                <use xlink:href="#icon-ziyuan16"></use>
            </svg>
            <span>迪拜</span>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.Icon_library {
    margin: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    box-shadow: 0 0 15px rgba(138, 106, 234, 0.6);
    border-radius: 10px;
    .single_icon {
        width: 80px;
        height: 80px;
        margin: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .icon {
            font-size: 40px;
        }
        span {
            font-size: 20px;
            margin-top: 10px;
        }
    }
}
</style>


