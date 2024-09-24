<template>
	<uni-indexed-list :options="list" />
</template>

<script>
	import city from "@/data/city.js"
	export default {
		data() {
			return {
				list: city.list
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>