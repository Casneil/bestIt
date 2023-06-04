export const productAll = {
	tags: ['Product'],
	security: [
		{
			bearerAuth: [
				'read:Product'
			]
		}
	],
	summary: 'An overview of all available products',
	operationId: 'getAllProducts',
	responses: {
		200: {
			description: 'Successful retrieval of data',
			content: {
				'application/json': {
					schema: {
						type: 'array',
						items: {
							'$ref': '#/components/schemas/Product',
						}
					}
				}
			}
		},
		500: {
			description: 'Internal server error'
		},
		401: {
			description: 'Unauthorized'
		},
		400: {
			description: 'Bad request'
		}
	}
};

export const product = {
	tags: ['Product'],
	security: [
		{
			bearerAuth: [
				'read:Product'
			]
		}
	],
	summary: 'An overview of a single product',
	operationId: 'getProduct',
	parameters: [
		{
			name: 'productId',
			in: 'path',
			required: true,
			description: 'ID of the product to return',
			schema: {
				type: 'integer',
				format: 'int64'
			}
		}
	],
	responses: {
		200: {
			description: 'Successful retrieval of data',
			content: {
				'application/json': {
					schema: {
						type: 'object',
						'$ref': '#/components/schemas/Product'
					}
				}
			}
		},
		500: {
			description: 'Internal server error'
		},
		401: {
			description: 'Unauthorized'
		},
		400: {
			description: 'Bad request'
		}
	}
};