import { ErrorResponse, ErrorCodes } from '@config';

interface ErrorObj {
	[key: string]: string;
}

export const responseFormikError = (errors: ErrorResponse[], errorCodes: ErrorCodes) => {
	const errorObj: ErrorObj = {};
	errors.forEach((item) => {
		if (item.field) {
			errorObj[item.field] = item.message;
		} else if (errorCodes[item.code]) {
			errorObj.global = errorCodes[item.code];
		} else {
			errorObj.global = item.message;
		}
	});
	return errorObj;
};