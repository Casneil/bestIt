<script setup lang="ts">

	import ImageAtom from '@/components/atoms/image.vue';
	import Typography from '@/components/atoms/typography.vue';
	import type { BaseProduct } from '@/interfaces/Product';

	interface IProps {
		product: BaseProduct;
	};

	const props = defineProps<IProps>();

</script>

<template>
	<span class="flex">
	<ImageAtom
		:title="props.product.title"
		:thumbnail="props.product.thumbnail" />
		<span class="mx-5">
			<Typography
			:text="`Article: ${props.product.articleNumber}`"
			:variant="'small'" />
			<Typography
			:text="`Price: ${props.product.price} euros`"
			:variant="'small'" />
			<Typography
			:text="`Rating: ${props.product.rating}`"
			:variant="'small'" />
			<span class="text-rose-700" v-if="props.product.stock < 20">
				hurry only {{ props.product.stock }} left!
			</span>
		</span>
	</span>
	<Typography
		:text="props.product.title"
		:variant="'large'" />
	<Typography
		:text="props.product.description"
		:variant="'small'" />
</template>

