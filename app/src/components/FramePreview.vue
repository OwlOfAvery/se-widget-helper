<template>
	<div
		class="view-wrapper"
		:style="{
			width: frameWidth + 'px',
			height: frameHeight + 'px'
		}"
	>
		<FrameResizeHandle orientation="h" @drag="resizeX" />
		<FrameResizeHandle orientation="v" @drag="resizeY" />
		<iframe
			id="se-emulation-iframe"
			frameborder="0"
			sandbox="allow-scripts"
			scrolling="no"
			allow="autoplay"
			class="se-emulation-iframe"
			src="/iframe/"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import FrameResizeHandle from './FrameResizeHandle.vue'

const minWidth = 256
const minHeight = 256
const frameWidth = ref(400)
const frameHeight = ref(600)
let lastWidth = frameWidth.value
let lastHeight = frameHeight.value

function resizeX({ deltaX, first }) {
	first && (lastWidth = frameWidth.value)
	frameWidth.value = Math.max(lastWidth + deltaX * 2, minWidth)
}
function resizeY({ deltaY, first }) {
	first && (lastHeight = frameHeight.value)
	frameHeight.value = Math.max(lastHeight + deltaY, minHeight)
}

// const iframeSrc = `
// <html>
//     <head>
//         <script src="https://cdn.streamelements.com/scripts/jquery_3.3.1.min.js"><\/script>
//         <!-- Pull in source CSS -->
//         <style>${mainSCSS}</style>
//     </head>
//     <\/head>
//     <body>
//         <!-- Pull in source HTML -->

//         <!-- Pull in source JS -->
//         <script>${mainJS}<\/script>
//     <\/body>
// <\/html>`
</script>

<style lang="scss" scoped>
.view-wrapper {
	background-image: linear-gradient(45deg, #f3f5f8 25%, transparent 25%),
		linear-gradient(-45deg, #f3f5f8 25%, transparent 25%),
		linear-gradient(45deg, transparent 75%, #f3f5f8 75%),
		linear-gradient(-45deg, transparent 75%, #f3f5f8 75%);
	background-size: 20px 20px;
	background-position:
		0 0,
		0 10px,
		10px -10px,
		-10px 0px;
	display: block;
	width: 400px;
	height: 600px;
	margin: 20px auto;
	border-radius: 3px;
	position: relative;
	border: 1px solid #eceef1;

	.se-emulation-iframe {
		width: 100%;
		height: 100%;
		display: block;
	}
}
</style>
