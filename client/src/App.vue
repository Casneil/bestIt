<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import { onMounted } from 'vue';
	import { useAuthStore } from '@/stores/auth';
	import router from '@/router';

	const authStore = useAuthStore();

	onMounted(() => {
		if (authStore.authUser) {
			router.push({ name: 'products' })
		}
	});

</script>

<template>
	<header>
		<nav class="mb-10">
			<button
				v-if="authStore.authUser"
				type="button"
				class="absolute px-4 py-2 font-bold text-white bg-blue-500 rounded top-5 right-20 hover:bg-blue-700"
				@click="authStore.logout()">
				Log out
			</button>
		</nav>
	</header>
	<main>
		<RouterView />
	</main>
</template>

