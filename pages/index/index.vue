<template>
	<view class="index-container">
		<NavBar />
		<view class="index-banner-box">
			<swiper class="swiper" indicator-active-color="#00f783" :indicator-dots="true" :autoplay="true"
				:interval="3000" :duration="3000">
				<swiper-item>
					<image class="banner" src="../../static/banner1.png" />
				</swiper-item>
				<swiper-item>
					<image class="banner" src="../../static/banner1.png" />
				</swiper-item>
				<swiper-item>
					<image class="banner" src="../../static/banner1.png" />
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import NavBar from "../../components/navbar.vue"
	export default {

		data() {

		},
		onLoad() {

		},
		components: {
			NavBar
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