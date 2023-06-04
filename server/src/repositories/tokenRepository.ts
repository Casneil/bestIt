
import jwt from 'jsonwebtoken';
import { PrismaClient, Token } from '@prisma/client';
import { Request, Response } from 'express';
import { sendEmailToAuthenticateUser } from '../services/mailingService';
import { replaceString } from '../utils/replaceString';
import {
	INTERNAL_SERVER_ERROR,
	OK,
	UNAUTHORIZED,
} from '../constants/statusCodes';

import {
	AUTHENTICATION_EXPIRATION_DAYS,
	MULTIPLICATION_FACTOR,
	RANDOM_FACTOR,
	EMAIL_TOKEN_EXPIRATION_MINUTES,
	EMAIL_CONFIG,
	JWT_SECRET,
	TOKEN_NOT_VALID,
	UNKNOWN_ERROR,
} from '../constants/globals';

const prisma = new PrismaClient();

const generateEmailToken = (): string => {
	return Math.floor(MULTIPLICATION_FACTOR + Math.random() * RANDOM_FACTOR)
		.toString();
};

const generateJwtAuthToken = (tokenId: number): string => {
	const payload = { tokenId };

	return jwt.sign(payload, JWT_SECRET, {
		algorithm: 'HS256',
		noTimestamp: true
	})
};

const createUserJwtToken = async (
	email: string,
	persistedToken: Token
): Promise<string> => {

	const expiration = new Date(new Date().getTime() + AUTHENTICATION_EXPIRATION_DAYS);
	await prisma.token.update({
		where: { id: persistedToken.id },
		data: { isValidToken: false }
	});
	const apiToken = await prisma.token.create({
		data: {
			type: 'API', //TODO: Change to enum when using postgreqsl or sql database.
			expiration,
			user: {
				connect: { email }
			}
		}
	});

	const jwtToken = generateJwtAuthToken(apiToken.id);

	await prisma.token.update({
		where: {
			id: apiToken.id,
		},
		data: {
			jwtToken,
		}
	})

	return jwtToken;

}

const validateUser = async (
	res: Response,
	persistedEmailToken: any,
	email: string
): Promise<Response> => {

	if (!persistedEmailToken || !persistedEmailToken.isValidToken) {
		return res.status(UNAUTHORIZED).json({ error: TOKEN_NOT_VALID });
	}

	if (persistedEmailToken !== null && persistedEmailToken.expiration < new Date()) {
		return res.status(UNAUTHORIZED).json({ error: TOKEN_NOT_VALID });
	}

	if (persistedEmailToken?.user?.email !== email) {
		return res.sendStatus(UNAUTHORIZED);
	}

	const jwtToken = await createUserJwtToken(email, persistedEmailToken);

	return res.status(OK).json({ authToken: jwtToken });
}

export const createOrConnectToken = async (
	req: Request,
	res: Response
): Promise<Response> => {

	try {
		const { email, sendEmail = true } = req.body;
		const emailToken = generateEmailToken();
		const expiration = new Date(new Date().getTime() + EMAIL_TOKEN_EXPIRATION_MINUTES);
		const userToken = await prisma.token.create({
			data: {
				type: 'EMAIL', //TODO: Change to enum when using postgreqsl or sql database.
				emailToken,
				expiration,
				user: {
					connectOrCreate: {
						where: { email },
						create: { email }
					}
				}
			}
		});

		if (userToken.emailToken && sendEmail) {
			await sendEmailToAuthenticateUser({
				...EMAIL_CONFIG,
				to: email,
				subject: replaceString(EMAIL_CONFIG.subject, '{code}', userToken.emailToken),
				html: replaceString(EMAIL_CONFIG.subject, '{code}', userToken.emailToken),
			});
		}

		if (userToken.emailToken && !sendEmail) {
			return res.status(OK).json({ emailToken: userToken.emailToken });
		}

		return res.status(OK).json({ message: 'success' });
	}
	catch (error) {
		return res.status(INTERNAL_SERVER_ERROR).json({ error: UNKNOWN_ERROR });
	}

}

export const getPersistedEmailTokenUser = async (
	req: Request,
	res: Response
	): Promise<Response> => {

	const { email, emailToken } = req.body;
	const persistedEmailToken = await prisma.token.findUnique({
		where: {
			emailToken,
		},
		include: {
			user: true
		}
	});

	return validateUser(res, persistedEmailToken, email);
}
