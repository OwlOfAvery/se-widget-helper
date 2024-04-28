<template>
	<div
		ref="handle"
		v-drag="dragHandler"
		class="resize-handle"
		:class="{
			'vertical-resize': ['v', 'vertical'].includes(orientation),
			'horizontal-resize': ['h', 'horizontal'].includes(orientation)
		}"
	>
		<span class="drag-handle material-symbols-outlined"> drag_indicator </span>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
	orientation: {
		type: String,
		default: 'v'
	}
})
const emit = defineEmits(['drag'])

const dragHandler = (state) => {
	const [x, y] = state.movement
	const first = state.first
	emit('drag', {
		deltaX: x,
		deltaY: y,
		first
	})
}
</script>

<style lang="scss" scoped>
.resize-handle {
	position: absolute;
	background: white;
	border: 1px solid #eceef1;
	display: grid;
	border-radius: 3px;
	justify-content: center;
	align-content: center;
	touch-action: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	user-select: none;

	.drag-handle {
		color: #e8eaed;
	}

	&:hover {
		background: #f9fafb;
		border: 1px solid #e8eaed;
		.drag-handle {
			color: #c8cfd5;
		}
	}

	&.horizontal-resize {
		height: 100%;
		width: 24px;
		top: 0;
		right: -36px;
		cursor: col-resize;
	}
	&.vertical-resize {
		height: 24px;
		width: 100%;
		bottom: -36px;
		left: 0;
		cursor: row-resize;

		.drag-handle {
			transform: rotate(90deg);
		}
	}
}
</style>
