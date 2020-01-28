/* eslint-disable no-useless-catch */
import { APP_PREFIX } from '@config';


export function writeToLocalState<T>(key: string, state: T): void {
  try {
    localStorage.setItem(`${APP_PREFIX}_${key}`, JSON.stringify(state));
  } catch (e) {
    throw e;
  }
}

export function getFromLocalState<T>(key: string): T {
  let state;

  try {
    if (localStorage) {
      state = JSON.parse(localStorage.getItem(`${APP_PREFIX}_${key}`) as string);
    }
  } catch (e) {
    throw e;
  }

  return state;
}

export function clearLocalState(key: string): void {
  try {
    localStorage.removeItem(`${APP_PREFIX}_${key}`);
  } catch (e) {
    throw e;
  }
}
