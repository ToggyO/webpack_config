import { createSelector } from 'reselect';
import { ApplicationState } from '@store';
import { TodosItemResponse } from '@store/todos/types';

export const todosSelector = createSelector<ApplicationState, TodosItemResponse[], TodosItemResponse[]>(
	(state: ApplicationState): TodosItemResponse[] => state.todos.todos,
	(todos: TodosItemResponse[]) => todos,
);