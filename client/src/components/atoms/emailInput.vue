<script setup lang="ts">

	const props = defineProps({
		value: { type: String, required: true },
	});

	const emit = defineEmits(['inputChange'])

</script>

<template>
	<label
		for="email"
		class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
			Your email
	</label>
	<input
		type="email"
		name="email"
		id="email"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
		placeholder="name@company.com"
		:value="props.value"
		@input="($event) => emit('inputChange', $event)"
		required />
</template>