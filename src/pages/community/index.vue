<template>
	<div class="content">社区
		<!-- <icon-library></icon-library> -->
		<div @click="asd">adfadf</div>
	</div>
</template>
<script>
import iconLibrary from '@/components/icon-library'
// import { XInput } from "vux";
export default {
	components: {
		iconLibrary
	},
	name: 'community',
	data() {
		return {}
	},
	methods: {
		asd() {
			let a = ['A', 'B', 'C']
			a.forEach((element, index, array) => {
				console.log(element)
			})
		}
	}
}
</script>
<style lang="less" scoped>
.weui-cell {
	margin-top: 600px;
}
</style>


