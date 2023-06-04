<script setup lang="ts">
	import { useAuthStore } from '@/stores/auth';

	const props = defineProps({
		value: { type: String, required: true },
	});

	const authStore = useAuthStore();

	const emit = defineEmits(['inputChange'])

</script>

<template>
	<span
		class="mb-4"
		v-if="authStore.userEmail">
		We have send a one time password to <b>{{ authStore.userEmail }}</b>
		<br>
		Please enter this code below.
	</span>
	<label
		for="emailToken"
		class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
		Your one time password
	</label>
	<input
		type="string"
		name="emailToken"
		id="emailToken"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
		placeholder="name@company.com"
		:value="props.value"
		@input="($event) => emit('inputChange', $event)" required />
</template>