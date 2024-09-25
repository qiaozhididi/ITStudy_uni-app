<template>
	<view>
		<v-tabs :scroll="false" v-model="current" field="name" :tabs="tabs" @change="changeTab"></v-tabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
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
		methods: {
			changeTab(index) {

			}
		}
	}
</script>

<style>

</style>