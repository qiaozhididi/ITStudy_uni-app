<template>
	<view>
		<web-view
			src="https://www.bilibili.com/video/BV1XT421r7xy/?vd_source=08e92f0b3925c21dbdeabf937f2221a3"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad(options) {
			console.log(options.id)
		},
		methods: {

		}
	}
</script>

<style>

</style>