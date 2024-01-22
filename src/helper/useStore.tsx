import {store} from '../store'
import {StoreContext} from "../helper/contexts";
import React, {FC, useContext} from "react";

type StoreContextType = {
    children: React.ReactNode
}

export const useStore = () => {
    const context = useContext(StoreContext);
    if(!context) {
        throw new Error('useStore must be used within a StoreProvider')
    }
    return context
}

export const StoreProvider:FC<StoreContextType> = ({children}) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}