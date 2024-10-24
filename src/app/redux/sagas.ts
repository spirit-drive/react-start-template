import { all } from 'redux-saga/effects';
import { tokenSaga } from './sagas/tokenSaga';

export function* sagas() {
  yield all([tokenSaga()]);
}
