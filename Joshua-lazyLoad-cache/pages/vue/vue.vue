<template>
	<view class="content">

		<view class="area">
			<button size="mini" type="primary" @click="changeLazyLoad">懒加载开关：{{lazyLoad ? '开启中' : '关闭中'}}</button>
			<button size="mini" type="primary" @click="changeCache">缓存开关：{{cache ? '开启中' : '关闭中'}}</button>
			<button size="mini" type="primary" @click="removeImageCache">清楚缓存</button>
		</view>



		<view class="gallEry" :style="'grid-template-columns: repeat(' + flowData.column +',1fr);'">
			<view class="gallEryBox" style="gap: 10px;" v-for="(numVal, index) in flowData.column" :key="numVal">
				<view v-for="(item, j) in flowData[`column_${index + 1}`]" :key="item.src.split('/').pop()">
					<Joshua-lazyLoad-cache-image bgColor='rgba(0,0,0,.2)' :duration="1000" :bottomNumber="100"
						:lazyLoad="lazyLoad" :cache="cache" selector=".content" :src='item.src'>
					</Joshua-lazyLoad-cache-image>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import imgArr from '@/common/img.js'
	import {
		screenSizeGrid,
		dynamicGrouping,
	} from '@/common/oneself.js'
	export default {
		data() {
			return {
				imageList: [],
				lazyLoad: uni.getStorageSync('lazyLoad'),
				cache: uni.getStorageSync('cache'),
				flowData: {
					column: 2
				}
			}
		},
		onLoad() {
			this.getData()
		},
		onShow() {
			this.getColnum()
		},
		methods: {
			getColnum() {
				const screenState = screenSizeGrid();
				screenState.subscribeToUpdates(() => {
					this.flowData.column = screenState.getColumn() + 1
					this.changeColumn()
				});
			},
			changeColumn() {
				let groupList = dynamicGrouping(this.imageList, this.flowData.column);
				groupList.forEach((item, i) => (this.flowData[`column_${i + 1}`] = item))
			},
			changeCache() {
				this.cache = !this.cache
				uni.setStorageSync('cache', this.cache)
				plus.runtime.restart()
			},
			changeLazyLoad() {
				this.lazyLoad = !this.lazyLoad
				uni.setStorageSync('lazyLoad', this.lazyLoad)
				plus.runtime.restart()
			},
			getData() {
				this.imageList = imgArr.map(url => ({
					src: url
				}))
				this.getColnum()
			},
			async removeImageCache() {
				uni.clearStorage()
				uni.setStorageSync('lazyLoad', this.lazyLoad)
				uni.setStorageSync('cache', this.cache)
				const res = await uni.getSavedFileList()
				const fileList = res && res.fileList;
				if (!fileList.length) return
				fileList.forEach((file, index) => {
					uni.removeSavedFile({
						filePath: file.filePath
					}).then(res => {
						if (index == fileList.length - 1) {
							plus.runtime.restart()
						}
					})
				})
			}

		}
	}
</script>

<style lang="scss">
	.gallEry {
		width: 100%;
		display: grid;
		gap: 0 10px;
		padding: 10px;
		box-sizing: border-box;

		.gallEryBox {
			display: flex;
			flex-direction: column;
		}
	}

	.imgBox {
		border: 1px solid #000;
		overflow: hidden;
	}

	.area {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 10px;
		box-sizing: border-box;
		gap: 5px;
	}
</style>