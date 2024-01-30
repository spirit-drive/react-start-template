import { store } from '../store';
import { StoreContext, StoreContextType } from '../helper/contexts';
import React, { FC, useContext, useState } from 'react';
import { DisplayProductProps } from '../types';

type StoreProviderType = {
  children: React.ReactNode;
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const StoreProvider: FC<StoreProviderType> = ({ children }) => {
  const [product, setProduct] = useState<DisplayProductProps[]>(store.products);

  const addProduct = (newProduct: DisplayProductProps): any => {
    setProduct([...product, newProduct]);
  };

  return <StoreContext.Provider value={{ product, addProduct } as StoreContextType}>{children}</StoreContext.Provider>;
};
