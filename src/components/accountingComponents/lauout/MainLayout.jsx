import React, { useState } from "react";
import { Header } from "../header/Header";
import { PopupLauout } from "../popupLauout/PopupLayout";


export const MainLayout = ({children, ...props})=>{
    return (
        <>
        <PopupLauout 
       visible='false'>
           Наполнение для попапа
        </PopupLauout>

            <Header/>
            <main>
                <div className="container">
                    {children ? children :  'наполнения нет' }
                </div>
            </main>
        </>
    );
}