import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState } from 'react';

interface OperationProviderProps {
  children: ReactNode;
}

export interface OperationContextProps {
  category: SelItem | null;
  setCategory: Dispatch<SetStateAction<SelItem | null>>;
}

export type SelItem = {
  id: string;
  name: string;
};

const operationContextDefault: OperationContextProps = {
  category: null,
  setCategory: () => {
    return null;
  },
};

export const OperationContext = createContext(operationContextDefault);

export const OperationProvider: FC<OperationProviderProps> = ({ children }) => {
  const [category, setCategory] = useState<SelItem>(null);

  const providerValue = useMemo(
    () => ({
      category,
      setCategory,
    }),
    [category]
  );

  return <OperationContext.Provider value={providerValue}>{children}</OperationContext.Provider>;
};
