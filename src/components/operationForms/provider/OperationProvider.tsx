import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useMemo, useState } from 'react';

interface OperationProviderProps {
    children: ReactNode;
}


export interface OperationContextProps {
    category: SelItem;
    setCategory: Dispatch<SetStateAction<SelItem>>;
    modalActive: boolean;
    setModalActive: Dispatch<SetStateAction<boolean>>;
}

export type SelItem = {
    id: string;
    name: string;
};


const operationContextDefault: OperationContextProps = {
    category: null,
    setCategory: () => { },
    modalActive: false,
    setModalActive: () => { },
};

export const OperationContext = createContext(operationContextDefault);

export const OperationProvider: FC<OperationProviderProps> = ({ children }) => {
    const [category, setCategory] = useState<SelItem>();
    const [modalActive, setModalActive] = useState(false);

    const providerValue = useMemo(
        () => ({
            category,
            setCategory,
            modalActive,
            setModalActive
        }),
        [category]
    );

    return <OperationContext.Provider value={providerValue}>{children}</OperationContext.Provider>;
};
