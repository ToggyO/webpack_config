import { createSelector } from 'reselect';
import { ApplicationState } from '@store';
import { HelloState } from '@store/hello/types';

export const helloSelector = createSelector<ApplicationState, HelloState, HelloState>(
  (state: ApplicationState): HelloState => state.hello,
    (todos: HelloState) => todos,
);