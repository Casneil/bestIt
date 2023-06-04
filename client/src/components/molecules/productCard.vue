<script setup lang="ts">
	import ImageAtom from '@/components/atoms/image.vue';
	import Typography from '@/components/atoms/typography.vue';

	const props = defineProps({
		config: { type: Object, required: true }
	});
</script>

<template>
	<ImageAtom
		:title="props.config.title"
		:thumbnail="props.config.thumbnail" />
	<Typography :text="props.config.title" />
	<Typography
		:text="props.config.description"
		:variant="'small'" />
</template>

