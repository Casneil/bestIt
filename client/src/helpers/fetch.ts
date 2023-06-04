import { useAuthStore } from '@/stores/auth';
import { FORBIDDEN, UNAUTHORIZED } from '@/constants/globals';

interface LooseObject {
	[key: string]: any;
};

type RequestTypes = {
	GET: 'GET',
	POST: 'POST'
};

function request(method: keyof RequestTypes) {
	return (url: string, body: any = null) => {
		const requestOptions: LooseObject = {
			method,
			headers: authHeader(method),
		};
		if (body) {
			requestOptions.headers['Content-Type'] = 'application/json';
			requestOptions.body = JSON.stringify(body);
		}
		return fetch(url, requestOptions).then(handleResponse);
	}
}

function authHeader(method: keyof RequestTypes) {
	// return auth header with jwt if user is logged in and request is to the api url
	const { authUser } = useAuthStore();
	const isLoggedIn = !!authUser?.authToken;
	const isAuthRequest = method === 'GET';
	if (isLoggedIn && isAuthRequest) {
		return { Authorization: `Bearer ${authUser.authToken}` };
	} else {
		return {};
	}
}

function handleResponse<TResponse>(response: any): Promise<TResponse> {
	return response.text().then((text: string) => {
		const data = text && JSON.parse(text);

		if (!response.ok) {
			const { authUser, logout } = useAuthStore();
			if ([FORBIDDEN, UNAUTHORIZED].includes(response.status) && authUser) {
				logout();
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data as TResponse;
	});
}

export const fetchWrapper = {
	get: request('GET'),
	post: request('POST'),
};
