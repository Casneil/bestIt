<script setup lang="ts">

	import AuthModal from '@/components/organisms/modal.vue'
	import { useAuthStore } from '@/stores/auth';

	const props = defineProps({
		isEmailModal: { type: Boolean, default: true },
	});

	const authStore = useAuthStore();

	const handleAuth = ($event: string) => {
		authStore.setEmail($event)
		authStore.login($event);
	};

	const authenticate = ($event: { email: string, emailToken: string}) => {
		authStore.authenticate($event);
	};

</script>

<template>
	<section class="block w-full">
		<div class="relative">
			<h1 class="px-4 mb-5 text-xl font-medium text-gray-900 dark:text-white">You need to login to view products</h1>
			<AuthModal
				:is-email-modal="props.isEmailModal"
				@authenticate="authenticate($event)"
				@send-code="handleAuth($event)" />
		</div>
	</section>
</template>

