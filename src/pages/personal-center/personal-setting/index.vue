<template>
	<div class="personal_setting">
		<div class="setting_head">
			<div class="pet_name">
				<img alt src="../../../assets/images/headPhone.jpg">
				<div>
					<div>芝麻凛</div>
					<div>1110</div>
				</div>
			</div>
			<svg aria-hidden="true" class="icon">
				<use xlink:href="#icon-youjiantou-copy"></use>
			</svg>
		</div>
		<group label-align="right" label-margin-right="4em">
			<x-address :list="addressData" :title="title" class="ignore" placeholder="请选择" v-model="value"></x-address>
		</group>
	</div>
</template>
<script>
import {
	Group,
	Picker,
	XAddress,
	ChinaAddressV4Data,
	Confirm,
	Value2nameFilter as value2name
} from 'vux'

export default {
	components: {
		Confirm,
		Picker,
		XAddress,
		Group
	},
	name: 'personalSetting',
	data() {
		return {
			show: false,
			title: '地址',
			value: [],
			showAddress: false,
			addressData: ChinaAddressV4Data
		}
	},
	mounted() {},
	methods: {
		onCancel() {
			console.log('on cancel')
		},
		onConfirm(msg) {
			console.log('on confirm')
			if (msg) {
				alert(msg)
			}
		}
	}
}
</script>

