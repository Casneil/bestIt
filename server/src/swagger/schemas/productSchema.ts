export const productResponseSchema = {
	type: 'object',
	properties: {
		id: {
			type: 'int',
			description: 'Unique identifier',
			example: 1
		},
		createdAt: {
			type: 'string',
			description: 'Timestamp user accounts was created',
			example: '00:00:1234Z'
		},
		updatedAt: {
			type: 'string',
			description: 'Timestamp user accounts was updated',
			example: '00:00:1234Z'
		},
		articleNumber: {
			type: 'int',
			description: 'Unique product number',
			example: 0
		},
		title: {
			type: 'string',
			description: 'Product name',
			example: 'foo bar'
		},
		description: {
			type: 'string',
			description: 'Product\'s description',
			example: 'lorem ipsum'
		},
		price: {
			type: 'float',
			description: 'Product\'s cost',
			example: 0
		},
		discountPercentage: {
			type: 'float',
			description: 'Product\'s discount',
			example: 0
		},
		rating: {
			type: 'float',
			description: 'Product\'s rating',
			example: 5
		},
		stock: {
			type: 'int',
			description: 'Product\'s availablility',
			example: 3
		},
		brand: {
			type: 'string',
			description: 'Product\'s manufacturer',
			example: 'TS'
		},
		category: {
			type: 'string',
			description: 'specifies how a product is sorted',
			example: 'Food'
		},
		thumbnail: {
			type: 'string',
			description: 'Product\'s main image',
			example: 'https://www.picture.com'
		},
		images: {
			type: 'array',
			description: 'Product\'s sub images',
			example: '[https://www.picture0.com, https://www.picture1.com]'
		}
	}
};
