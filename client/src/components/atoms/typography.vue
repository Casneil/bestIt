<script setup lang="ts">

	import { computed } from 'vue';

	interface Props {
		text: string;
		variant?: 'small' | 'large';
	};

	const props = defineProps<Props>();
	const getVariantClasses = computed(() => {
		if (props.variant === 'small') {
			return 'text-gray-500 text-sm'
		}

		if (props.variant === 'large') {
			return 'text-gray-700 text-lg font-bold mb-5'
		}

		return 'text-gray-500 text-base'
	});

</script>

<template>
	<p :class="getVariantClasses">
		{{ props.text }}
	</p>
</template>
