import {
	rejects
} from "assert"
import {
	resolve
} from "url"

// 封装网络请求
function service(options = {}) {
	//请求方式：
	options.method = options.method
	//请求地址
	options.url = options.url
	//请求头
	options.header = {
		"content-type": "application/x-www-form-urlencoded"
	}
	//参数
	options.data = options.data

	return new Promise((resolved, rejected) => {
		options.success = res => {
			if (res.data) {
				//成功
				resolved(res.data)
			} else {
				//失败
				uni.showToast({
					icon: 'none',
					duration: 3000,
					title: "数据请求失败"
				})
				rejected(res.data.msg)
			}
		}
		options.fail = err => {
			rejected(err)
		}
		uni.request(options)
	})
}

export default service