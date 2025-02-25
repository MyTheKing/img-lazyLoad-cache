function screenSizeGrid() {
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

function dynamicGrouping(data, i) {
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
}



export {
	screenSizeGrid,
	dynamicGrouping,
}