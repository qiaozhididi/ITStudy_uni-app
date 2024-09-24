<template>
	<view class="index-container">
		<NavBar />
		<view class="index-banner-box">
			<swiper class="swiper" indicator-active-color="#00f783" :indicator-dots="true" :autoplay="true"
				:interval="3000" :duration="3000">
				<swiper-item v-for="(item,index) in topBanner" :key="index">
					<image class="banner" :src="item.img_url" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<Coursenav></Coursenav>
	</view>
</template>

<script>
	import NavBar from "../../components/navbar.vue"
	import Coursenav from "../../components/coursenav.vue";
	import banner from '../../data/banner.js';
	export default {
		data() {
			topBanner: []
		},
		onLoad() {
			this.topBanner = banner.top_banner
		},
		mounted() {
			// 网络请求：
			// uni.request({
			// 	url: "http://localhost:3000/api/banner",
			// 	success(res) {
			// 		if (res.data.status === 200) {
			// 			this.topBanner = res.data.result.top_banner
			// 		}
			// 	}
			// })
		},
		components: {
			NavBar,
			Coursenav
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.index-container {
		display: flex;
		flex-direction: column;
		overflow: hidden;

		.index-banner-box {
			display: flex;
			width: 100%;
			padding: 10px;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			overflow: hidden;

			.swiper {
				width: 100%;
				height: 260rpx;

				.banner {
					width: 700rpx;
					height: 260rpx;
				}
			}
		}
	}
</style>