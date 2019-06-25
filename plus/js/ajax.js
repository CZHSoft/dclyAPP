function init(mui) {
	
	//设置全局beforeSend
	mui.ajaxSettings.beforeSend = function(xhr, setting) {
		console.log('beforeSend:::' + JSON.stringify(setting));
	};
	//设置全局complete
	mui.ajaxSettings.complete = function(xhr, status) {
		console.log('complete:::' + status);
	}
	return mui;
}