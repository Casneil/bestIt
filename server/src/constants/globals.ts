// In a real-world scenario, the PORt should come from the environment variable.
const PORT = 5000;
/* eslint-disable no-magic-numbers */
const MULTIPLICATION_FACTOR = 10000000;
const RANDOM_FACTOR = 90000000;
const MINUTES_MILLI_SECONDS = 60 * 10000;
const EMAIL_TOKEN_EXPIRATION_MINUTES = 60 * MINUTES_MILLI_SECONDS; // 1 Hour
const AUTHENTICATION_EXPIRATION_DAYS = 2 * 24 * MINUTES_MILLI_SECONDS; // 2 Days

// Very simple messages for errors. This could definitely be handled better.
const UNKNOWN_ERROR = 'Something went wrong';
const NOT_FOUND_ERROR = 'Not found';
const UNAUTHORIZED_ERROR ='Unauthorized';
const AUTHENTICATION_FAILED = 'Authentication failed';
const TOKEN_NOT_VALID = 'Token not valid';
const AUTHORIZATION = 'authorization';
// In a real-world scenario everything below whould be an environment variable.
const JWT_SECRET = 'b039ebb7-ce22-4e93-80f7-5bb44738ce2e'
const GOOGLE_APP_PASSWORD = 'oqfphmlwelulucry'
const EMAIL_SENDER = 'dev.simpson.casneil@gmail.com'
const EMAIL_RECIPIENT = 'casneil.simpson@gmail.com'

const EMAIL_CONFIG = {
	from: EMAIL_SENDER,
	to: '', // This is left blank because this service should me used to send emails to multiple users.
	subject: 'Your one time login password: {code}',
	html: '<p>Please use this code to log in <b>{code}</b></p>'
};

export {
	PORT,
	MULTIPLICATION_FACTOR,
	RANDOM_FACTOR,
	EMAIL_TOKEN_EXPIRATION_MINUTES,
	AUTHENTICATION_EXPIRATION_DAYS,
	MINUTES_MILLI_SECONDS,
	EMAIL_CONFIG,
	JWT_SECRET,
	GOOGLE_APP_PASSWORD,
	EMAIL_SENDER,
	UNKNOWN_ERROR,
	NOT_FOUND_ERROR,
	UNAUTHORIZED_ERROR,
	AUTHENTICATION_FAILED,
	TOKEN_NOT_VALID,
	EMAIL_RECIPIENT,
	AUTHORIZATION,
};
