import ProductsView from '@/views/ProductsView.vue';
import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: '/',
			name: 'login',
			component: () => import('@/views/LoginView.vue'),
			props: { isEmailModal: true }
		},
		{
			path: '/authenticate',
			name: 'authenticate',
			component: () => import('@/views/LoginView.vue'),
			props: { isEmailModal: false }
		},
    {
      path: '/product/all',
      name: 'products',
			component: ProductsView
    },
  ]
});

router.beforeEach(async (to) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/', '/authenticate'];

	const authRequired = !publicPages.includes(to.path);
	const auth = useAuthStore();

	if (authRequired && !auth.authUser) {
		auth.returnUrl = to.fullPath;
		return '/';
	}

});

export default router;

