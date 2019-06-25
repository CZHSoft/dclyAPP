/**
 * mui初始化
 */
function muiInit(muiObject, fun, pagename) {
	muiObject.init(fun);

	console.log(pagename + ":mui inti complete...");
}

/**
 * mui plusReady
 */
function muiPlusReady(muiObject, fun, pagename) {
	muiObject.plusReady(fun);

	console.log(pagename + ":mui plusReady complete...");
}

/**
 * 打开新的窗体(通用)
 */
function muiCreateWindow(muiObject, href, wid, title) {
	muiObject.openWindow({
		url: href,
		id: wid,
		styles: { // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
			titleNView: { // 窗口的标题栏控件
				titleText: title, // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
				titleColor: "#0000ff", // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
				titleSize: "17px", // 字体大小,默认17px
				backgroundColor: "#F7F7F7", // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
				progress: { // 标题栏控件的进度条样式
					color: "#ff0000", // 进度条颜色,默认值为"#00FF00"  
					height: "1px" // 进度条高度,默认值为"2px"         
				},
				splitLine: { // 标题栏控件的底部分割线，类似borderBottom
					color: "#CCCCCC", // 分割线颜色,默认值为"#CCCCCC"  
					height: "1px" // 分割线高度,默认值为"2px"
				}
			}
		}
	});
}

/**
 * 创建自定义的窗体
 */
function muiCreateCustomWindow(muiObject, href, wid,title,
	isVertical, isHardwareAccelerated, isNative) {

	//非plus环境，直接走href跳转
	if(!muiObject.os.plus) {
		location.href = href;
		return;
	}

	var options = {
		styles: {
			popGesture: "close",
//			titleNView: { // 窗口的标题栏控件
//				titleText: title, // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
//				titleColor: "#0000ff", // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
//				titleSize: "17px", // 字体大小,默认17px
//				backgroundColor: "#F7F7F7", // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
//				progress: { // 标题栏控件的进度条样式
//					color: "#ff0000", // 进度条颜色,默认值为"#00FF00"  
//					height: "1px" // 进度条高度,默认值为"2px"         
//				},
//				splitLine: { // 标题栏控件的底部分割线，类似borderBottom
//					color: "#CCCCCC", // 分割线颜色,默认值为"#CCCCCC"  
//					height: "1px" // 分割线高度,默认值为"2px"
//				}
//			}
		},
		extras: {}
	};

	if(isVertical) {
		options.styles.bounce = "vertical";
	}

	if(isHardwareAccelerated) {
		options.styles.hardwareAccelerated = true;
	} else {
		options.extras.acceleration = "none";
	}

	if(isNative) {

		options.styles.titleNView = {
//			autoBackButton: true,
			backgroundColor: '#f7f7f7',
			titleText: title,
			splitLine: {
				color: '#cccccc'
			}
		};

		options.show = {
			event: 'loaded'
		}

		//有原生标题的情况下，就不需要waiting框了
		options.waiting = {
			autoShow: false
		}

		//透明渐变导航,增加类型设置
		options.styles.titleNView.type = "transparent";

		options.styles.statusbar = {
			background: "#f7f7f7"
		}
	}

	//打开新窗口
	muiObject.openWindow(href, wid, options);
}