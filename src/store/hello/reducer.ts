import { Reducer } from 'redux';

import * as types from './types';

const initialState: types.HelloState = '';

const reducer: Reducer<types.HelloState> = (state = initialState, action) => {
    switch (action.type) {
        case types.HelloActionTypes.SET_HELLO:
            return action.payload;
        default:
            return state;
    }
};

export { reducer as helloReducer };