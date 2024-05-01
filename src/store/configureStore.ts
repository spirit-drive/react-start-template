import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { profileSaga } from 'src/entities/profileSaga';
import { profileSlice } from 'src/entities/profileSlice';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
	[profileSlice.name]: profileSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(profileSaga);