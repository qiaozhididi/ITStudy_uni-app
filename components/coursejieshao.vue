<template>
	<view class="course_jieshao_box">
		<image :src="courseImage" :style="{ height:imageHeight + 'rpx' }"></image>
	</view>
</template>

<script>
	export default {
		name:"coursejieshao",
		data() {
			return {
				
			};
		},
		props:{
			courseImage:{
				type:String,
				// 字符串直接赋值   数组返回一个函数
				default:""
			},
			imageHeight:{
				type:String,
				default:""
			}
		},
		mounted() {
		}
	}
</script>

<style lang="scss">
	.course_jieshao_box{
		display: flex;
		box-sizing: box;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		image{
			width: 750rpx;
		}
	}
</style>
