<template>
	<view>
		<v-tabs :scroll="false" v-model="current" field="name" :tabs="tabs" @change="changeTab"></v-tabs>
		<!-- 内容列表 -->
		<uni-list>
			<uni-list-item :note="item.author_name + item.published_at" :title="item.title"
				v-for="(item,index) in newsList" :key="index">
				<template v-slot:footer>
					<image class="news-img" :src="item.cover" mode="widthFix"></image>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import api from "@/api/index.js"
	export default {
		data() {
			return {
				newsID: 0, //新闻类型
				minID: 0, //初始ID
				size: 10, //一次请求多少数据
				current: 0,
				newsList: [],
				tabs: [{
					id: "1",
					name: "最新",
					newsid: 0
				}, {
					id: "2",
					name: "大公司",
					newsid: 23
				}, {
					id: "3",
					name: "消费",
					newsid: 221
				}, {
					id: "4",
					name: "内容",
					newsid: 223
				}, {
					id: "5",
					name: "娱乐",
					newsid: 225
				}, {
					id: "6",
					name: "区块链",
					newsid: 208
				}]
			}
		},
		onLoad() {
			this.http(this.size, this.min, this.newsID)
		},
		methods: {
			http(size, minID, newsID) {
				api.getNewsList({
					pageSize: size,
					minId: minID,
					columnId: newsID
				}).then(res => {
					this.newsList = res
				})
			},
			changeTab(index) {
				//更换数据时做初始化处理
				this.newsList = []
				this.minID = 0
				this.newsID = 0
				this.http(this.size, this.minID, this.tabs[index].newsid)
			}
		}
	}
</script>

<style lang="scss">
	.news-img {
		width: 100px;
		height: 50px;
	}
</style>