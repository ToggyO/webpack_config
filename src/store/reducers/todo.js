import { ACTION } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION.FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
};
