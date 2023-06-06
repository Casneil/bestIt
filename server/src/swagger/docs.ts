import { PORT } from '../constants/globals';
import { productSchema } from './schemas/productSchema';
import { loginSchema, loginResponseSchema } from './schemas/login';
import { authenticateSchema, authenticationSuccessSchema } from './schemas/authenticate';
import { product, productAll } from './paths/product';
import { login } from './paths/login';
import { authenticate } from './paths/authenticate';

export const docs = {
	openapi: "3.0.1",
	info: {
		title: 'OpenAPI Products and User endpoints',
		description:
		`<span>
			<h2>Login Flow</h2>
			<ol>
				<li>Use a valaid email to get a single sign on token from the Login tag: <b>/api/auth/login</b></li>
				<li>Use this received token to authenticate from the Authenticate tag: <b>/api/auth/authenticate</b></li>
				<li>Copy the returned token</li>
				<li>At the top-right click the Authorize button and paste the value there</li>
				<li>You can now access all protected endpoints!</li>
			</ol>
		</span>`,
		version: '1.0.0'
	},
	externalDocs: {
		description: 'Find out more about Swagger',
		url: 'http://swagger.io'
	},
	servers: [{ url: `http://localhost:${ PORT }` }],
	tags: [
		{
			name: 'Product',
			description: 'Everything about products',
		},
		{
			name: 'Login',
			description: 'Informating on how to recieve single sign-on codes'
		},
		{
			name: 'Authenticate',
			description: 'Informating on how to access auth/protected routes',
		}
	],
	paths: {
		'/api/product/all': {
			get: productAll
		},
		'/api/product/{productId}': {
			get: product
		},
		'/api/auth/authenticate': {
			post: authenticate
		},
		'/api/auth/login': {
			post: login
		},
	},
	components: {
		schemas: {
			Product: productSchema,
			Authenticate: authenticateSchema,
			Authenticated: authenticationSuccessSchema,
			Login: loginSchema,
			'Logged In': loginResponseSchema,
		},
		securitySchemes: {
			bearerAuth: {
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'JWT'
			},
		}
	}
};

