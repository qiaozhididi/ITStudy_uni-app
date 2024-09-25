import service from "../utils/request.js"

/**
 * 网络请求URL
 */
const base = {
	baseUrl: "https://unidemo.dcloud.net.cn",
	newsList: "/api/news",
	newsDetails: "/api/news/36kr/",
}

/**
 * 网络请求方法
 */

function getNewsList(data) {
	return service({
		method: "GET",
		url: base.baseUrl + base.newsList,
		data
	})
}

/**
 * 获取新闻详情
 */
function getNewsDetails(id) {
	return service({
		method: "GET",
		url: base.baseUrl + base.newsDetails + id
	})
}


export default {
	getNewsList,
	getNewsDetails,
}