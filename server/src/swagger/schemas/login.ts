const loginSchema = {
	type: 'object',
	required: ['email'],
	properties: {
		email: {
			type: 'string',
			description: 'Your email address',
			example: 'example@mail.com'
		},
		sendEmail: {
			type: 'boolean',
			description: 'Boolean value which determines if an email be send to the user\'s email address. Defaults to true',
			example: 'true'
		}
	}
};


const loginResponseSchema = {
	type: 'object',
	properties: {
		emailToken: {
			type: 'string',
			description: 'One time login password',
			example: '87543890'
		},
	}
};

export {
	loginSchema,
	loginResponseSchema
};