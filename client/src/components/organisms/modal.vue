<script setup lang="ts">
	import EmailInput from '@/components/atoms/emailInput.vue';
	import TokenInput from '../atoms/tokenInput.vue';
	import { reactive } from 'vue';

	const state = reactive({
		emailValue: '',
		emailTokenValue: '',
	});

	const emit = defineEmits(['send-code', 'authenticate'])

	const props = defineProps({
		isEmailModal: { type: Boolean, required: true },
	});


	const handleEmit = (): void => {
		if (props.isEmailModal) {
			return emit('send-code', state.emailValue);
		}
		return emit('authenticate', {
			email: state.emailValue,
			emailToken: state.emailTokenValue,
		});
	}

</script>

<template>
	<div
		id="authentication-modal"
		tabindex="-1"
		aria-hidden="true"
		class="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
		<div class="relative w-full max-w-md max-h-full">
				<!-- Modal content -->
			<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<div class="px-6 py-6 lg:px-8">
					<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
						{{ props.isEmailModal ? 'Login in' : 'Authenticate' }}
					</h3>
					<form
						class="space-y-6"
						action="#">
						<div>
							<EmailInput
								v-if="props.isEmailModal"
								:value="state.emailValue"
								@inputChange="($event) => state.emailValue = $event.target.value"/>
							<TokenInput
								v-else
								:value="state.emailTokenValue"
								@inputChange="($event) => state.emailTokenValue = $event.target.value"/>
						</div>
						<button
							type="button"
							@click="handleEmit()"
							class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							{{ props.isEmailModal ? 'Send code' : 'Submit' }}
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>