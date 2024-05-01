import { useContext } from 'react';
import { AuthContext, AuthContextProps } from '../provider/AuthProvider';


export const useAuth: () => AuthContextProps = () => useContext(AuthContext);
