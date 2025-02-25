<template>
	<view ref="Joshua_lazyLoadCache" class="Joshua_lazyLoadCache" :style="[{backgroundColor:(srcImageFlag ? bgColor : 'transparent')},{width:(srcImageFlag ? width : '100%')},{borderRadius:borderRadius},
	// #ifdef APP-NVUE
	styleBgH,
	// #endif
		// #ifndef APP-NVUE
		{height:  (srcImageFlag ? bgHeight : 'fit-content')}
		// #endif
		]">
		<uni-icons v-if="srcImageFlag" class="icon" :custom-prefix="customPrefix == 'type' ? '' : customPrefix"
			:type="imgStatusIcon" style="position: absolute;" :size="iconSize + 'px'" :color="iconColor" :style="[
			// #ifdef APP-NVUE
			{top: ((parseInt(height) - iconSize) / 2) + 'px'},
			{left: ((parseInt(width) - iconSize) / 2) + 'px'}
			// #endif
			]"></uni-icons>
		<image :id='id_key'
			:style="[{width:  width},{height: (height == 'auto' ? ' ' : height)},{borderRadius:borderRadius}]"
			:mode='mode' :src='srcImage' @error='errorFn' @load='loadFn'></image>
	</view>
</template>

<script setup>
	import {
		ref,
		shallowRef,
		toRefs,
		defineProps,
		defineEmits,
		computed,
		watch,
		onMounted,
		nextTick,
		getCurrentInstance
	} from 'vue'
	import {
		onPageScroll
	} from '@dcloudio/uni-app'
	const emit = defineEmits(['error', 'load'])
	const props = defineProps({
		mode: {
			type: String,
			default: 'widthFix'
		},
		src: {
			type: String,
			default: ''
		},
		ratio: {
			type: Number,
			default: 0
		},
		duration: {
			type: Number,
			default: 0
		},
		selector: {
			type: String,
			default: ''
		},
		bottomNumber: {
			type: Number,
			default: 0
		},
		bgColor: {
			type: String,
			default: 'rgba(255, 255, 255, .2)'
		},
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: 'auto'
		},
		bgHeight: {
			type: String,
			default: '100px'
		},
		borderRadius: {
			type: String,
			default: '5px'
		},
		customPrefix: {
			type: String,
			default: 'type'
		},
		defaultIcon: {
			type: String,
			default: 'image'
		},
		errorIcon: {
			type: String,
			default: 'info'
		},
		iconSize: {
			type: Number,
			default: 30
		},
		iconColor: {
			type: String,
			default: 'rgba(255, 255, 255, .5)'
		},
		cache: {
			type: Boolean,
			default: true,
		},
		lazyLoad: {
			type: Boolean,
			default: false,
		},
		delayCache: {
			type: Number,
			default: 500
		},
		cacheTime: {
			type: Number,
			default: 5,
		},
		listInfo: {
			type: Object,
			default: () => ({
				h: 0,
				y: 0
			})
		},
		fatherTop: {
			default: ''
		},
		nvueLazyLoadBottomNumber: {
			type: Number,
			default: 0
		},
		nvueLazyLoadThrottleNum: {
			type: Number,
			default: 1000
		}
	});

	const {
		width,
		hedith,
		src,
		fade,
		duration,
		lazyLoad,
		cache,
		cacheTime,
		delayCache,
		ratio,
		selector,
		bottomNumber,
		defaultIcon,
		errorIcon,
		iconSize,
		bgHeight,
		listInfo,
		fatherTop,
		nvueLazyLoadBottomNumber,
		nvueLazyLoadThrottleNum
	} = toRefs(props)


	const isShow = shallowRef(true)
	let Joshua_lazyLoadCache = ref(null)
	const imgStatusIcon = shallowRef('')
	const srcImage = shallowRef('')
	const id_key = shallowRef('image' + '_' + new Date().getTime() + '_' + parseInt(Math.random() * 10000))
	let thisUniPage = ref(null)
	const noneImage = shallowRef('')
	const srcImageFlag = shallowRef(true)
	const styleBgH = ref({
		height: bgHeight.value
	})
	let nvueLazyWatcch = null
	let throttleFlag = ref(true);
	imgStatusIcon.value = defaultIcon.value



	const useCache = computed(() => {
		let inH5 = false
		// #ifdef H5
		inH5 = true
		// #endif
		return !inH5 && cache.value
	})


	const pageView = ({
		ratio = 0,
		el = '',
		selectorView = null
	}, cb) => {
		const thresholds = [0]
		if (ratio > 0) {
			thresholds.push(ratio)
		}
		thisUniPage.value = uni.createIntersectionObserver(getCurrentInstance()?.proxy, {
			thresholds,
			initialRatio: 0
		})

		function observeCallback() {
			return (res) => {
				if (cb) cb({
					data: res,
					isShow: res.intersectionRatio > ratio
				});
			};
		}
		let margins = {
			bottom: bottomNumber.value || uni.getSystemInfoSync().windowHeight
		}
		if (selectorView && selectorView != '') {
			thisUniPage.value.relativeTo(selectorView, margins).observe(el, observeCallback());
		} else {
			thisUniPage.value.relativeToViewport(margins).observe(el, observeCallback());
		}

	}

	const handleCache = async (src) => {
		let srcName = src.split('/').pop()
		const sign = 'demo-cached-image';
		let keyName = src + sign


		function start() {
			setTimeout(() => {
				uni.downloadFile({
					url: src,
				}).then(res => {
					if (res.statusCode == 200) {
						return uni.saveFile({
							tempFilePath: res.tempFilePath,
						})
					} else {
						srcImage.value = ''
						return Promise.reject('error')
					}
				}).then(res => {
					uni.setStorage({
						key: keyName,
						data: {
							url: res.savedFilePath,
							name: srcName
						},
						fail: (err) => {},
						success: async (res) => {
							if (srcImageFlag.value) {
								const {
									data: cachedRes
								} = await uni.getStorage({
									key: keyName
								})
								srcImage.value = cachedRes.url
							} else {}

						}
					})
				}).catch((error) => {})

			}, delayCache.value)
		}

		function removeStore(file) {
			uni.removeSavedFile({
				filePath: file
			});
			uni.removeStorage({
				key: keyName
			})
		}

		try {
			const {
				data: cachedRes
			} = await uni.getStorage({
				key: keyName
			})
			const cachedUrl = cachedRes && cachedRes.url;
			if (srcName !== cachedRes.name) {
				removeStore(cachedUrl, keyName)
				start()
				return
			}
			if (cachedUrl && cacheTime.value) {
				const cachedUrlInfo = await uni.getSavedFileInfo({
					filePath: cachedUrl
				})
				const createTime = cachedUrlInfo && cachedUrlInfo.createTime
				const expiredTime = createTime + cacheTime.value * 24 * 60 * 60 * 1000
				if (expiredTime > +new Date()) {
					assignment(cachedUrl)
					return;
				} else if (expiredTime) {
					removeStore(cachedUrl, keyName)
				} else {}
			} else if (cachedUrl && !cacheTime.value) {
				assignment(cachedUrl)
				return;
			}
			start()
		} catch (error) {
			start()
		}
	}
	// #ifdef APP-NVUE
	function nvueLazyLoad() {
		const dom = weex.requireModule('dom')
		dom.getComponentRect(Joshua_lazyLoadCache.value, ({
			result,
			size
		}) => {
			if (result) {
				let top = Math.ceil((size.top > 0 ? (size.top - Number(fatherTop.value)) : size.top +
					listInfo.value.h))
				if (listInfo.value.h > (top - nvueLazyLoadBottomNumber.value)) {
					setTimeout(() => {
						assignment(src.value)
						nvueLazyWatcch()
						// #ifndef H5
						if (!useCache.value) return;
						handleCache(src.value)
						// #endif
					}, duration.value)
				}
			}
		})
	}

	if (lazyLoad.value) {
		nvueLazyWatcch = watch(listInfo.value, (newValue, oldValue) => {
			if (src.value && lazyLoad.value) {
				nextTick(() => {
					if (!throttleFlag.value) return;
					throttleFlag.value = false;
					setTimeout(() => {
						nvueLazyLoad()
						throttleFlag.value = true;
					}, nvueLazyLoadThrottleNum.value)
				})
			}
		}, {
			immediate: true
		})

	}
	// #endif
	const assignment = (e) => {
		if (srcImageFlag.value) {
			srcImage.value = e
		}
	}

	const loadFn = (e) => {
		srcImageFlag.value = false
		emit('load', e)
	}
	const errorFn = (e) => {
		imgStatusIcon.value = errorIcon.value
		emit('error', e)
	}

	watch(src, (newValue, oldValue) => {
		srcImageFlag.value = true
		imgDispose()
	});

	onMounted(() => {
		imgDispose()
	})

	function imgDispose() {
		if (!lazyLoad.value) {
			assignment(src.value)
			// #ifndef H5
			if (!useCache.value) return;
			handleCache(src.value)
			// #endif
		} else {

			// #ifndef APP-NVUE
			pageView({
				ratio: ratio.value,
				el: `#${id_key.value}`,
				selectorView: selector.value
			}, (res) => {
				if (res.isShow) {
					setTimeout(() => {
						assignment(src.value)
						thisUniPage.value.disconnect()
						// #ifndef H5
						if (!useCache.value) return;
						handleCache(src.value)
						// #endif
					}, duration.value)
				}
			})
			// #endif
		}
	}
	watch(srcImageFlag, (newVal) => {
		if (!newVal) {
			styleBgH.value = {
				minHeight: bgHeight.value
			}
		}
	})
</script>

<style lang="scss">
	.img {
		transform: transition3d(0, 0, 0);
		will-change: transform;
	}

	.Joshua_lazyLoadCache {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		transition: all .7s;
	}

	.icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>