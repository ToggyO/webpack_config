import { ACTION } from '../actions/types';

const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SET_HELLO:
            return action.payload;
        default:
            return state;
    }
};
