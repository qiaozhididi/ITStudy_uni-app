<template>
	<view>
		<image class="title" :src="newsDetails.cover" mode="widthFix"></image>
		<view class="article">
			<view class="article-meta">
				<text>{{ newsDetails.author_name }}</text>
				<text>{{ newsDetails.published_at }}</text>
			</view>
			<rich-text class="content" :nodes="newsDetails.content"></rich-text>
		</view>
	</view>
</template>

<script>
	import api from "@/api/index.js"
	export default {
		data() {
			return {
				newsDetails: {}
			}
		},
		onLoad(options) {
			api.getNewsDetails(options.id).then(res => {
				this.newsDetails = res
			})
		},
		methods: {
			backHandler() {
				uni.navigateBack(-1)
			}
		}
	}
</script>

<style lang="scss">
	.title {
		width: 100%;
	}

	.article {
		padding: 10px;

		.article-meta {
			width: 100%;
			height: 30px;
			line-height: 30px;

			text {
				color: #999;
				font-size: 12px;
			}
		}

		.content {
			font-size: 14px;
			line-height: 1.8;
		}
	}
</style>