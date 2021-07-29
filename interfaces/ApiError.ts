import { AxiosError } from 'axios';

interface Error {
	reason: string;
	message: string;
	responseData: string;
}

/**
 * Class used for handling Api errors
 * @class ApiError
 * @extends {Error}
 */
export class ApiError extends Error {
	errorCode: number;
	details: Error;

	/**
	 *Creates an instance of ApiError.
	 * @param {number} errorCode
	 * @param {string | Object} message
	 * @memberof ApiError
	 */
	constructor(error: AxiosError) {
		const response = error.response;
		const message = response.statusText;

		super(message);
		this.name = this.constructor.name;
		this.message = message;
		this.details = response.data;
		this.errorCode = response.status;

		console.error('Api error : ' + response.status + ' ' + message + ' ' + JSON.stringify(response.data));
	}
}
