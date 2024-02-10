import React, {ChangeEventHandler, useState} from "react";
import cl from './PopupWithButton.module.scss';
import { PopupWrapper } from "../PopupWrapper/PopupWrapper";

export const PopupWithButton = () => {
    const [popupVisibility, setPopupVisibility] = useState(false);
    const [popupChildren, setPopupChildren] = useState('default data');

    const handleChangeInput:ChangeEventHandler<HTMLInputElement>= (e)=> {
        setPopupChildren(e.target.value)
    }
    const closePopup = () => {

        setPopupVisibility(!popupVisibility);

    }
    return (
        <>
            <button
                onClick={closePopup}>
                popup visibility
            </button>
            <input
                type="text"
                value={popupChildren}
                onChange={handleChangeInput}
            />

            <PopupWrapper
                visible={popupVisibility}
                children={popupChildren}
                close={() => setPopupVisibility(!popupVisibility)}
            />
        </>
    )
}