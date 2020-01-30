import { ErrorResponse } from '@config';


export interface FormValues {
	email: string;
	password: string;
}

export interface PropsFromState {
	errorsFromBackend: ErrorResponse[];
}

export interface PropsFromDispatch {
	login(data: FormValues): void;
}

export type FormProps =  PropsFromState & PropsFromDispatch;
