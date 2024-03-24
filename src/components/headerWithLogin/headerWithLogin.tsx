import React, { useState } from "react";
import { PopupWrapper } from "../PopupWrapper/PopupWrapper";
import { Layout } from "../lauout/Layout";
import cl from './headerWithLogin.module.scss';
import { Button } from "../button/Button";

import { useLocalStorageState } from "./helpers";
import { AuthForm } from "../Forms/AuthForm";


export const HeaderWithLogin = () => {
    const [popupState, setPopupState] = useState(false);
    const [loginCondition, setLoginCondition] = useLocalStorageState('login', false)

    function validatePassword(value:string) {
        if (!value) {
            return 'Введите пароль';
        }
    }
    function validateEmail(value: string) {
        if (!value) {
            return 'введите email'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return 'некорректный email'
        }
    }
    const loginData = {
        login: 'test@test.test',
        pass:'test1234'
    }
    return (
        <>
            <Layout>
                <div className="header">
                    {!loginCondition && <Button
                        onClick={()=>{setPopupState(!popupState)}}
                        // onClick={()=>{setLoginCondition(true)}}
                    >
                        LogIn
                    </Button>}
                    {loginCondition && <Button
                        onClick={()=>setLoginCondition(false)}
                    >
                        LogOut
                    </Button>}
                </div>
                <div className={cl.loginData}>
                    <div className={cl.data}>
                        <span>testLogin</span>
                        <span>{loginData.login} </span>
                    </div>
                    <div className={cl.data}>
                        <span>test password</span>
                        <span>{loginData.pass}</span>
                    </div>
                </div>

            </Layout>
        <PopupWrapper
            visible={popupState}
            close={()=>{setPopupState(!popupState)}}

        >
                <AuthForm
                    closePopup={() => { setPopupState(!popupState) }}
                    loginCondition = {()=>setLoginCondition(!loginCondition)}
                />
            </PopupWrapper>
            </>
    )
}