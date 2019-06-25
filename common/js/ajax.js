var baseURL = "http://192.168.9.183:9999"
var network = true;

/**
 * ajax初始化
 */
function ajaxInit(muiObject) {

	if(muiObject.os.plus) {
		mui.plusReady(function() {
			if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
				network = false;
			}
		});
	}

	//设置全局beforeSend
	muiObject.ajaxSettings.beforeSend = function(xhr, setting) {
		//beforeSend演示,也可在$.ajax({beforeSend:function(){}})中设置单个Ajax的beforeSend
		console.log('ajaxBeforeSend:::' + JSON.stringify(setting));
	};
	//设置全局complete
	muiObject.ajaxSettings.complete = function(xhr, status) {
		console.log('ajaxComplete:::' + status);
	}
	
	console.log("ajax init complete...");
}

/**
 * ajax 发送
 * callback类型是返回函数
 */
function ajaxSend(muiObject, api, sendtype, data, datatype, headersArray, successCallback, errorCallback) {

	

	if(network) {
		muiObject.ajax(baseURL + api, {
			data:data,
			dataType: datatype, //服务器返回json格式数据
			type: sendtype, //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			headers: headersArray,
			success: successCallback,
			error: errorCallback
		});

	} else {
		muiObject.toast("当前网络不给力，请稍后再试");
	}

}