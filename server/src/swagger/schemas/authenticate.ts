const authenticateSchema = {
	type: 'object',
	required: ['email', 'emailToken'],
	properties: {
		email: {
			type: 'string',
			description: 'Your email address',
			example: 'example@mail.com'
		},
		emailToken: {
			type: 'string',
			description: 'Generated email token',
			example: '123456'
		}
	}
};

const authenticationSuccessSchema = {
	type: 'object',
	required: ['email', 'emailToken'],
	properties: {
		authToken: {
			type: 'string',
			description: 'User\'s JWT token',
			example: 'fklg387dnnd89dfs$5hjd&9njsdjkhlhp09vc65ghs'
		},
	}
}

export {
	authenticateSchema,
	authenticationSuccessSchema,
};
