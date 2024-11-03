import { useDispatch, useSelector, useStore } from 'react-redux';
import { AppState, AppStore, AppDispatch } from 'src/app/store/store';

export const useAppStore = useStore.withTypes<AppStore>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
