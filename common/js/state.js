/**
 * 用于本地信息存储
 */

/**
 * 获取localStorage字段数据
 * @param {Object} name
 */
function getState(name) {
	console.log("localStorage Get:"+name);
	return localStorage.getItem(name);
}

/**
 * 设置localStorage字段数据
 * @param {Object} name
 * @param {Object} value
 */
function setState(name, value) {
	console.log("localStorage Save:"+name+"，Value:"+ value);
	localStorage.setItem(name, value);
}

/**
 * 移除localStorage字段数据
 * @param {Object} name
 */
function removeState(name) {
	console.log("localStorage Remove:"+name);
	localStorage.removeItem(name);
}

/**
 * 清空localStorage所有数据
 */
function clearState() {
	console.log("localStorage Clean all...");
	localStorage.clear();
}