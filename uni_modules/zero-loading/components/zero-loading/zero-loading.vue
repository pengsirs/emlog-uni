<template>
	<!--  -->
	<view :style="{'position': position,'z-index':zIndex}" class="container" :class="mask?'mask':''" @click.prevent="handleClick">
		<view>
			<view class="main">
				<loading8 v-if="type=='atom'"></loading8>
			</view>
		</view>
	</view>
</template>

<script>
	import loading8 from "./static/loading-atom.vue"

	export default {
		name: "zero-loading",
		components: {
			loading8,
		},
		props: {
			type: {
				type: String,
				default: "atom"
			},
			position: {
				type: String,
				default: "fixed"
			},
			zIndex: {
				type: Number,
				default: 9,
			},
			mask: {
				type: Boolean,
				default: false,
			}


		},
		data() {
			return {
				
			};
		},
		methods: {
			handleClick() {
				this.$emit('click')
			}
		},
	};
</script>

<style lang="scss" scoped>
	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.mask {
		z-index: 999 !important;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		background: rgba(7, 17, 27, .3);
		transform: translate(0, 0);
		background: #fff
	}
</style>
