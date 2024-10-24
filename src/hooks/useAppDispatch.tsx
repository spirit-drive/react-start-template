import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/app/redux/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
