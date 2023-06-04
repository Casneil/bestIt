<script setup lang="ts">
	import ProductCard from '@/components/molecules/productCard.vue';
	import { onMounted, ref } from 'vue';
	import type { BaseProduct, Product } from '@/interfaces/Product';
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
	<button
		type="button"
		v-else
		v-for="(product, index) in products"
		:key="index"
		class="container p-2 m-5 mx-auto border shadow cursor-pointer bg-stone-100 rounded-xl">
		<ProductCard :product="product" />
	</button>
</template>

