export const productAll = {
	tags: ['product'],
	summary: 'An overview of all products',
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

export const product = {
	tags: ['product'],
	summary: 'An overview of a single product',
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