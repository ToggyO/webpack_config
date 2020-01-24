import * as types from './types';

export const setHello = (payload: string) => ({
    type: types.HelloActionTypes.SET_HELLO,
    payload,
});
