import React, { FC, useContext, useState } from "react";
import { ModalCreateProductContext, ModalCreateProductContextType } from "./contexts";
import { useNavigate } from "react-router-dom";

type ModalProviderProps = {
    children: React.ReactNode;
  };
  

export const useModalCreateProduct = () => {
    const context: ModalCreateProductContextType = useContext(ModalCreateProductContext);
    if(!context) {
        throw new Error('useModalCreateProduct must be used within a ModalProvider');
    }
    return context;
}

export const ModalProvider: FC<ModalProviderProps> = ({children}) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setIsShow(!isShow);
        !isShow ? navigate('/modal') : ('/');
    }
    

    return <ModalCreateProductContext.Provider value={{isShow, toggleModal} as ModalCreateProductContextType}>{children}</ModalCreateProductContext.Provider>
}

