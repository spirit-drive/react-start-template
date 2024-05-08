import { useContext } from 'react';
import { OperationContext, OperationContextProps } from '../provider/OperationProvider';

export const useOperation: () => OperationContextProps = () => useContext(OperationContext);
