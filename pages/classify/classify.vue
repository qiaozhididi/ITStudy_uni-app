<template>
	<view>
		<v-tabs height="40px" :scroll="false" v-model="current" field="name" :tabs="tabs" @change="changeTab">
		</v-tabs>
		<!-- 内容列表 -->
		<uni-list>
			<uni-list-item clickable @click="clickHandler(item.post_id)" :note="item.author_name + item.published_at"
				:title="item.title" v-for="(item,index) in newsList" :key="index">
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
				newsID: 0, // 新闻类型
				minID: 0, // 初始id数据
				size: 10, // 一次拿多少条数据
				current: 0,
				newsList: [],
				tabs: [{
						id: "tab01",
						name: "最新",
						newsid: 0
					},
					{
						id: "tab02",
						name: "大公司",
						newsid: 23
					},
					{
						id: "tab03",
						name: "内容",
						newsid: 223
					},
					{
						id: "tab04",
						name: "消费",
						newsid: 221
					},
					{
						id: "tab05",
						name: "娱乐",
						newsid: 225
					},
					{
						id: "tab06",
						name: "区块链",
						newsid: 208
					}
				]
			}
		},
		onLoad() {
			this.http(this.size, this.minID, this.newsID)
		},
		methods: {
			http(size, minID, newsID) {
				api.getNewsList({
					pageSize: size,
					minId: minID,
					columnId: newsID
				}).then(res => {
					// 停止下拉刷新
					uni.stopPullDownRefresh();
					// 数据合并
					this.newsList = this.newsList.concat(res)
					// 设置偏移量 
					this.minID = res[res.length - 1].id
				})
			},
			changeTab(index) {
				// 更换数据的时候，最好先做一个初始化
				this.newsList = [];
				this.minID = 0
				// 保证数据的统一性
				this.newsID = this.tabs[index].newsid
				this.http(this.size, this.minID, this.tabs[index].newsid)
			},
			/**
			 * 上拉加载
			 */
			onReachBottom() {
				// 接口有点特殊，offset作为偏移量=10，0-10   11-20   21-30
				this.http(this.size, this.minID, this.newsID)
			},
			/**
			 * 下拉刷新
			 */
			onPullDownRefresh() {
				// 获取最新的数据，就是偏移量重置
				this.minID = 0;
				// 初始化数据
				this.newsList = []
				this.http(this.size, this.minID, this.newsID);
			},
			/**
			 * 点击跳转到详情
			 */
			clickHandler(id) {
				uni.navigateTo({
					url: "/pages/classify/details/details?id=" + id
				})
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