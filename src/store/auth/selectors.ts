import { createSelector } from 'reselect';
import { ApplicationState } from '@store';
import { ErrorResponse } from '@config';

export const isAuthSelector = createSelector<ApplicationState, boolean, boolean>(
	(state: ApplicationState): boolean => state.auth.isAuth,
	(isAuth: boolean) => isAuth,
);

export const errorSelector = createSelector<ApplicationState, ErrorResponse[], ErrorResponse[]>(
	(state: ApplicationState): ErrorResponse[] => state.auth.errors,
	(errors: ErrorResponse[]) => errors,
);