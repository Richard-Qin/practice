<template>
    <div class="personal_setting">
        <div class="setting_head">
            <div class="pet_name">
                <img src="../../../assets/images/headPhone.jpg" alt="">
                <div>
                    <div>芝麻凛</div>
                    <div>1110</div>
                </div>
            </div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youjiantou-copy"></use>
            </svg>
        </div>
        <div>
            <x-address :title="title" v-model="value" :list="addressData" placeholder="请选择"></x-address>
        </div>
    </div>
</template>
<script>
import { Group, Picker, XAddress, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'


export default {
    components: {
        Picker,
        XAddress,
        Group
    },
    name: 'personalSetting',
    data() {
        return {
            title: '地址',
            value: [],
            showAddress: false,
            addressData: ChinaAddressV4Data
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

