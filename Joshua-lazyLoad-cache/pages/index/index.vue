<template>
	<view class="content">
		<view class="title">
			<!-- #ifdef H5 -->
			<view class="" style="margin-bottom: 20px;">
				<text>H5端 暂不支持缓存功能，只支持懒加载功能</text>
			</view>
			<!-- #endif -->
			<view class="" style="display: flex; justify-content: space-around; align-items: center;">
				<button type="primary" @click="toUrl('/pages/vue/vue')">VUE页面</button>
				<button type="primary" @click="toUrl('/pages/nvue/nvue')">NVue页面</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toUrl(e) {
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss">
	.title {
		margin-top: 100px;
		text-align: center;
	}
</style>