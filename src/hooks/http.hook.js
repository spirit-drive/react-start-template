import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSnackBar } from 'src/slices/snackBarSlice';
//import'../components/vacancyForm/userData.json'
// перенесли повторяющиеся в отдельный хук, чтобы потом его переиспользовать в разных местах (loading, error, связь с сервером, очистка ошибки если персонажа нет)

export default function useHttp() {
    const token = localStorage.getItem('myToken')
    const dispatch = useDispatch();
    const checkToken = (contentType) => {
        if (token) {
            return {
                "Content-type": contentType,
                Authorization: `Bearer ${token}`,
            }
        } else{
            return {
            "Content-type": contentType,
        }
        }
    }
    const request =
        useCallback(
            async (
                url,
                method = 'GET',
                body = null,
                contentType = 'application/json',
            ) => {
                try {
                    const response = await fetch(`https://19429ba06ff2.vps.myjino.ru/api/${url}`, {
                        method,
                        body,
                        headers: checkToken(contentType),
                    });
                    if (!response.ok) {
                        const errors = await response.json();
                        throw new Error(`${errors.errors[0].message}`);
                    } 
                    const data = await response.json();
                    return data;

                } catch (e) {
                    console.log(e.message)
                    dispatch(setSnackBar({
                        open: true,
                        text: e.message,
                        severity: 'error'
                    }));
                    throw e;
                }
            }, []);



    return { request };
}
