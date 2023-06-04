import { PORT } from '../constants/globals';
import { productSchema } from './schemas/productSchema';
import { loginSchema, loginResponseSchema } from './schemas/login';
import { authenticateSchema, authenticationSuccessSchema } from './schemas/authenticate';
import { product, productAll } from './paths/product';
import { login } from './paths/login';
import { authenticate } from './paths/authenticate';
export const docs = {
	openapi: '3.0.3',
	info: {
		title: 'OpenAPI Products and User endpoints',
		description: 'OpenAPI specification For products and user api',
		version: '1.0.0'
	},
	servers: [{ url: `http://localhost:${ PORT }` }],
	components: {
		schemas: {
			Product: productSchema,
			Login: loginSchema,
			'Logged In': loginResponseSchema,
			Authenticate: authenticateSchema,
			Authenticated: authenticationSuccessSchema,
		}
	},
	paths: {
		'/api/product/all': {
			get: productAll
		},
		'/api/product/1': {
			get: product
		},
		'/api/auth/login': {
			post: login
		},
		'/api/auth/authenticate': {
			post: authenticate
		},
	}
};
