import { ACTION } from './types';

export const setHello = payload => ({
    type: ACTION.SET_HELLO,
    payload,
});
