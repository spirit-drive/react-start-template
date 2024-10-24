import { select, takeEvery } from 'redux-saga/effects';
import { tokenActions, tokenSelectors } from '../token';

export function* setToken(): Generator {
  const token = (yield select(tokenSelectors.get)) as string;
  localStorage.setItem('token', token || '');
}

export function* clearToken(): Generator {
  yield localStorage.removeItem('token');
}

export function* tokenSaga() {
  yield takeEvery(tokenActions.generate.type, setToken);
  yield takeEvery(tokenActions.clear().type, clearToken);
}
