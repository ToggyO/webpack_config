// export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
// export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
// export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';
export enum TodosActionTypes {
	FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
}

export interface TodosItemResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface TodosState {
	todos: TodosItemResponse[];
	loading: boolean;
	errors: object[];
}
