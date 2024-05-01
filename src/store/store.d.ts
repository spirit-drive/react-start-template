declare type RootState = ReturnType<typeof import('./configureStore').store.getState>;
declare type AppDispatch = typeof import('./configureStore').store.dispatch;
