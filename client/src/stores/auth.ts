import router from '@/router';
import { defineStore } from 'pinia'
import { fetchWrapper } from '@/helpers/fetch';
import { API_BASE_URL } from '@/constants/globals';


export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		// initialize state from local storage to enable user to stay logged in
		authUser: JSON.parse(localStorage.getItem('bestItUser')!),
		returnUrl: '',
		userEmail: ''
	}),
	actions: {
		setEmail(value: string) {
			this.userEmail = value;
		},
		async login(value: string) {
			await fetchWrapper.post(`${ API_BASE_URL }/auth/login`, { email: value });
			if (this.authUser) {
				router.push(this.returnUrl);
			} else {
				router.push({ name: 'authenticate' });
			}

		},
		async authenticate(params: { email: string, emailToken: string}) {
			const authUser = await fetchWrapper
				.post(`${ API_BASE_URL }/auth/authenticate`, { ...params });
			this.authUser = authUser;
			localStorage.setItem('bestItUser', JSON.stringify(authUser));
			// redirect to previous url or default to home page
			if (this.authUser.length) {
				router.push(this.returnUrl);
			} else {
				router.push({ name: 'products'  });
			}
		},
		logout() {
			this.authUser = null;
			localStorage.removeItem('bestItUser');
			router.push('/');
		}
	}
});

