<script setup lang="ts">
	import ProductCard from '@/components/molecules/productCard.vue';
	import { onMounted, ref } from 'vue';
	import type { BaseProduct } from '@/interfaces/Product';
	import { API_BASE_URL } from '@/constants/globals';
	import { fetchWrapper } from '@/helpers/fetch';

	const products = ref<BaseProduct[] | null>(null);

	const getAllProducts = async () => {
		const data = await fetchWrapper.get(`${API_BASE_URL}/product/all`)
		const json = await data as BaseProduct[];

		products.value = json;
	};

	onMounted(() => getAllProducts());
</script>

<template>
	<span v-if="products === null">Loading...</span>
	<div
		v-else
		v-for="(product, index) in products"
		:key="index"
		class="container p-8 m-10 mx-auto bg-orange-200 border shadow cursor-pointer rounded-xl">
		<ProductCard :config="product" />
	</div>
</template>

