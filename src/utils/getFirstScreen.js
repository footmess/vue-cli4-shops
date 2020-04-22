(() => {
	// dom时间
	var targetNode = document.body;
	console.log(targetNode);
	var observerOptions = {
		// 观察目标子节点的变化
		childList: true,
		// 将该观察器应用于该节点的所有后代节点。
		subtree: true
	};
	var store = [];
	var callback = (records, observer) => {
		// console.log(record);
		records.forEach((record) => {
			store.push({
				// 计算dom元素
				num: computedDomNuM(targetNode, 1),
				// 获取高精度时间戳
				time: performance.now()
			});
		});
	};
	var observer = new MutationObserver(callback);
	observer.observe(targetNode, observerOptions);
	console.log({ store });

	function computedDomNuM(e, n, t) {
		var i = 0,
			u = e.tagName;
		if ('SCRIPT' !== u && 'STYLE' !== u && 'META' !== u && 'HEAD' !== u) {
			var c =
				e.children ? e.children.length :
				0;
			if (c > 0)
				for (var a = e.children, l = c - 1; l >= 0; l--) {
					i += computedDomNuM(a[l], n + 1, i > 0);
				}
			if (i <= 0 && !t) {
				if (!(e.getBoundingClientRect && e.getBoundingClientRect().top < 0)) return 0;
			}
			i += 1 + 0.5 * n;
		}
		return i;
	}

	// 图片加载时间
	const imgs = [];
	const getImageDomSrc = {
		_getImgSrcFromBgImg: function(bgImg) {
			var imgSrc;
			var matches = bgImg.match(/url\(.*?\)/g);
			if (matches && matches.length) {
				var urlStr = matches[matches.length - 1];
				var innerUrl = urlStr.replace(/^url\([\'\"]?/, '').replace(/[\'\"]?\)$/, '');
				if (/^http/.test(innerUrl) || /^\/\//.test(innerUrl)) {
					imgSrc = innerUrl;
				}
			}
			return imgSrc;
		},
		// 提取图片链接
		getImgSrcFromDom: function(dom, imgFilter) {
			if (!(dom.getBoundingClientRect && dom.getBoundingClientRect().top < window.innerHeight)) return false;
			imgFilter = [ /(\.)(png|jpg|jpeg|gif|webp|ico|bmp|tiff|svg)/i ];
			var src;
			if (dom.nodeName.toUpperCase() == 'IMG') {
				src = dom.getAttribute('src');
			} else {
				var computedStyle = window.getComputedStyle(dom);
				var bgImg =
					computedStyle.getPropertyValue('background-image') || computedStyle.getPropertyValue('background');
				var tempSrc = this._getImgSrcFromBgImg(bgImg, imgFilter);
				if (tempSrc && this._isImg(tempSrc, imgFilter)) {
					src = tempSrc;
				}
			}
			return src;
		},

		_isImg: function(src, imgFilter) {
			for (var i = 0, len = imgFilter.length; i < len; i++) {
				if (imgFilter[i].test(src)) {
					return true;
				}
			}
			return false;
		},

		f(e) {
			var t = this,
				u = e.tagName;
			if ('SCRIPT' !== u && 'STYLE' !== u && 'META' !== u && 'HEAD' !== u) {
				var b = this.getImgSrcFromDom(e);
				if (b && !imgs.includes(b)) imgs.push(b);
				var c =
					e.children ? e.children.length :
					0;
				if (c > 0) for (var a = e.children, l = c - 1; l >= 0; l--) t.f(a[l]);
			}
		}
	};

	getImageDomSrc.f(document.body);
	// 获取到的首屏所有图片
	// console.log(imgs);
	var max = Math.max(
		...imgs.map((element) => {
			if (/^(\/\/)/.test(element)) element = 'https:' + element;
			try {
				return performance.getEntriesByName(element)[0].responseEnd || 0;
			} catch (error) {
				return 0;
			}
		})
	);
	// 所有图片的responseEnd时间跟计算的fmp相比较得出最大值
	console.log(max);
})();
