# img-lazyLoad-cache
该组件是基于uniapp，主要为APP端的vue和nvue使用，H5只支持懒加载图片。对 image 进行了封装，提供多种图片填充模式，加载中提示、加载失败提示，并实现了图片懒加载配合缓存功能，可控制懒加载区域和缓存时间等一些功能
uniapp插件市场链接：https://ext.dcloud.net.cn/plugin?id=18223


### vue 懒加载用法

```html
<view v-for="(item, index) in data" :key="item.ID">
	<Joshua-lazyLoad-cache-image bgColor='rgba(0,0,0,.2)' :lazyLoad="true" :src='item.src'></Joshua-lazyLoad-cache-image>
</view>
```

### nvue 懒加载用法 

```vue
<template>
	<view class="content">
		<scroll-view :scroll-with-animation="true" :show-scrollbar="false" @scroll="listScroll" :scroll-y="true"
			:style="{height: (listInfo.h + 'px')}" style="background-color: palegoldenrod;">
			<view class="gallEry">
				<view :style="'width:' + imgW  + 'px'" class="gallEryBox" v-for="(numVal, index) in flowData.column"
					:key="numVal">
					<view :style="'width:' + imgW  + 'px'" class="gallEryBox_item"
						v-for="(item, j) in flowData[`column_${index + 1}`]" :key="item.src.split('/').pop()">
						<Joshua-lazyLoad-cache-image bgColor='rgba(0,0,0,.2)' :duration="1000" :lazyLoad="lazyLoad"
							:listInfo="listInfo" bgHeight="100px" :width="imgW + 'px'" :cache="cache" fatherTop="0"
							className="imgBox" :src='item.src' :nvueLazyLoadBottomNumber="300">
						</Joshua-lazyLoad-cache-image>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import imgArr from '@/common/img.js'
	export default {
		data() {
			return {
				imageList: [],
				flowData: {
					column: 2
				},
				pageW: 0,
				listInfo: {
					y: 0,
					h: 0
				}
			}
		},
		onLoad() {
			this.getData()
			this.listInfo.h = uni.getSystemInfoSync().windowHeight
		},
		onShow() {
			this.getColnum()
		},
		computed: {
			imgW() {
				return ((this.pageW - 10) - ((this.flowData.column - 1) * 10)) / this.flowData.column
			}
		},
		methods: {
			listScroll(e) {
				this.listInfo.y = e.detail.scrollTop
			},
			getColnum() {
				const screenState = screenSizeGrid();
				screenState.subscribeToUpdates(() => {
					this.pageW = screenState.getWindowWidth()
					this.flowData.column = screenState.getColumn() + 1
					this.changeColumn()
				});
			},
			changeColumn() {
				let groupList = dynamicGrouping(this.imageList, this.flowData.column);
				groupList.forEach((item, i) => (this.flowData[`column_${i + 1}`] = item))
			}
			getData() {
				this.imageList = imgArr.map(url => ({
					src: url
				}))
				this.getColnum()
			},
			dynamicGrouping(data, i) {
				if (i <= 0) return
				const groups = [];
				for (let j = 0; j < i; j++) {
					groups.push([]);
				}
				for (let k = 0; k < data.length; k++) {
					const groupIndex = k % i;
					groups[groupIndex].push(data[k]);
				}
				return groups;
			},
			screenSizeGrid() {
				let column = 0
				let windowWidth = 0
				const state = {
					getColumn: () => column,
					getWindowWidth: () => windowWidth
				};
				let systemInfo = uni.getSystemInfoSync();
				let screenWidth = systemInfo.screenWidth;
				const windowResizeCallback = (res = {
					size: {}
				}) => {
			
					windowWidth = res.size.windowWidth || screenWidth;
					if (windowWidth < 539) {
						column = 1
					} else if (windowWidth < 970 && windowWidth > 539) {
						column = 2
					} else if (windowWidth > 970) {
						column = 3
					}
			
					uni.$emit('windowResizeUpdate');
				}
				windowResizeCallback()
				uni.onWindowResize(windowResizeCallback);
				return {
					...state,
					subscribeToUpdates: (callback) => {
						uni.$on('windowResizeUpdate', callback);
					}
				};
			}

		}
	}
</script>

<style lang="scss">
	.imgBox {
		border: 1px solid #000;
		overflow: hidden;
	}

	.area {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		flex-wrap: wrap;
		height: 60px;
	}

	.gallEry {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		width: 750rpx;
		padding: 0 10rpx;
	}

	.gallEryBox {
		display: flex;
		flex-direction: column;
	}

	.gallEryBox_item {
		margin-bottom: 10px;
	}
</style>


```

### Props

| 属性名                   | 说明                                                         | 类型             | 默认值                                                       | 是否必填 |
| ------------------------ | ------------------------------------------------------------ | ---------------- | ------------------------------------------------------------ | -------- |
| src                      | 图片资源地址                                                 | String           |                                                              | 是       |
| lazyLoad                 | 是否开启懒加载                                               | Boolean          | false                                                        | 否       |
| cache                    | 是否开启缓存(H5端不支持缓存功能)                             | Boolean          | true                                                         | 否       |
| mode                     | 图片裁剪、缩放的模式。此模式用法与uni-app的`image`组件的`mode`参数完全一致，详见：[Image](https://uniapp.dcloud.io/component/image) | String           | widthFix                                                     | 否       |
| ratio                    | 初始的相交比例                                               | Number           | 0                                                            | 否       |
| duration                 | 延迟时间(毫秒)                                               | Number           | 0                                                            | 否       |
| cacheTime                | 有效缓存时间(天)                                             | Number           | 5                                                            | 否       |
| delayCache               | 缓存的相差时间(毫秒)                                         | Number           | 500                                                          | 否       |
| selector                 | 使用选择器指定一个节点，作为参照区域之一。nvue中只能使用 ID(#id)，不可以使用class | String           | 如果不填，按照可视区域                                       | 否       |
| bottomNumber             | 懒加载区域(vue)                                              | Number           | 0(只能大于可视区域，否则为可视区域)                          | 否       |
| nvueLazyLoadBottomNumber | 懒加载区域(nvue)                                             | Number           | 0(默认为0，只有进入视图中，才会去加载图片。距离视图底部多少才会加载图片) | 否       |
| bgColor                  | 图片加载中和加载失败的模块背景颜色                           | String           | rgba(255, 255, 255, .2)                                      | 否       |
| bgHeight                 | 图片加载中和加载失败的模块高度                               | String           | 100px                                                        | 否       |
| width                    | 图片宽度                                                     | String           | 100%                                                         | 否       |
| height                   | 图片高度                                                     | String           | auto                                                         | 否       |
| borderRadius             | 图片圆角                                                     | String           | 5px                                                          | 否       |
| defaultIcon              | 图片加载中字体图标                                           | String           | image                                                        | 否       |
| errorIcon                | 图片加载失败字体图标                                         | String           | info                                                         | 否       |
| customPrefix             | 字体图标类型，默认uni-icon字体图标，如果阿里巴巴字体图标的可填 iconfont，然后在 defaultIcon、errorIcon 填入图标 icon 值即可 | String           | type                                                         | 否       |
| iconSize                 | 字体图标大小                                                 | Number           | 30                                                           | 否       |
| iconColor                | 字体图标颜色                                                 | String           | rgba(255, 255, 255, .5)                                      | 否       |
| fatherTop                | 组件外部列表盒子距离顶部值（nvue懒加载必填）                 | Number \| String | 0                                                            | 否       |
| listInfo                 | 组件外部列表盒子高度和滚动值（nvue懒加载必填，用于监听外部盒子滚动，触发懒加载响应） | Object           | {<br/>		h:0,<br/>		y: 0<br/>}                    | 否       |
| nvueLazyLoadThrottleNum  | 监听外部盒子滚动触发响应阀值(nvue懒加载)                     | Number           | 1000(毫秒)                                                   | 否       |

# Event 事件

| 事件名 | 说明             | 类型        |
| ------ | ---------------- | ----------- |
| @error | 当图片加载失败时 | HandleEvent |
| @load  | 当图片载入完毕时 | HandleEvent |

