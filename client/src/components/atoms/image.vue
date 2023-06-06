<script setup lang="ts">

	interface Props {
		title: string;
		thumbnail: string;
		class?: string;
	};

	const props = defineProps<Props>();

</script>

<template>
	<img
		:alt="props.title"
		:src="props.thumbnail"
		:class="class"
		width="125"
		height="125"/>
</template>

