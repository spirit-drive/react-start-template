import { useSelector } from 'react-redux';
import { AppState } from 'src/app/redux/store';

export const useAppSelector = useSelector.withTypes<AppState>();
