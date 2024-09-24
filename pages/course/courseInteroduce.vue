<template>
	<view class="home">
		<view class="courseIntroduce_box">
			<CourseIntroduceData :introduceData="introduceList" />
		</view>
		<view class="courseIntroduce_tab_box">
			<view class="courseIntroduce_tab_nav">
				<view @click="clickTabHandler(index)" :class="{ 'btna':count == index }" v-for="(item,index) in items"
					:key="index">{{ item }}</view>
			</view>
			<view class="courseIntroduce_tab_con">
				<view class="discount_info" :class="{ dis:count===0 }">
					<CourseList :Clist="Clist" />
				</view>
				<view class="discount_info" :class="{ dis:count===1 }">
					<CourseJieshao :courseImage="courseImage" :imageHeight="imageHeight" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import CourseIntroduceData from "@/components/courseintroduce-data.vue"
	import CourseList from "@/components/courseList.vue"
	import CourseJieshao from "@/components/courseJieshao.vue"
	export default {
		data() {
			return {
				introduceList: [],
				count: 0,
				items: ["课程章节", "课程介绍"],
				Clist: [],
				courseImage: "",
				imageHeight: ""
			}
		},
		components: {
			CourseIntroduceData,
			CourseList,
			CourseJieshao
		},
		onLoad(options) {
			//网络请求
			uni.request({
				url: "http://localhost:3000/api/detail",
				data: {
					id: options.id
				},
				success: res => {
					if (res.data.status === 200) {
						this.introduceList = res.data.result.data.introduceList
						this.Clist = res.data.result.data.Clist
						this.courseImage = res.data.result.data.image
						this.imageHeight = res.data.result.data.height
					}
				}
			})
		},
		methods: {
			clickTabHandler(index) {
				this.count = index
			}
		}
	}
</script>

<style lang="scss">
	.home {
		font-size: 14px;
	}

	.courseIntroduce_box {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		// background-color: #00f783;
	}

	.courseIntroduce_tab_box {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;

		.courseIntroduce_tab_nav {
			display: flex;
			box-sizing: border-box;
			flex-direction: row;
			background-color: #fff;
			border-bottom: 1px solid #e4e4e4;
			margin-bottom: 20px;

			view {
				height: 50px;
				line-height: 50px;
				font-size: 16px;
				flex-grow: 1;
				text-align: center;
				background-color: #fff;
			}

			.btna {
				display: flex;
				box-sizing: border-box;
				justify-content: center;
				color: #00b783;
				position: relative;
			}
		}

		.discount_info {
			display: none;
		}

		.dis {
			display: block;
		}
	}
</style>