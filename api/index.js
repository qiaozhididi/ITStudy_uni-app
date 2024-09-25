import service from "../utils/request";

//网络请求 URL
const base = {
	baseUrl: "https://unidemo.dcloud.net.cn",
	newList: '/api/news'
}

//网络请求方法
function getNewsList(data) {
	return service({
		method: "GET",
		url: base.baseUrl + base.newList,
		data
	})
}

export default {
	getNewsList
}