import React, {useEffect, useInsertionEffect} from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInitial, setUser, setToken } from 'src/slices/mainSlice';
import { useNavigate } from "react-router-dom";
import './layout.scss';
import useHttp from 'src/hooks/http.hook';



const Layout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("myToken")
    const dispatch = useDispatch()
    const { request } = useHttp()
    const getProfile = async () => {
        const res = await request(`profile`);
        return res;
    }
    useEffect(() => {
        if (token) {
            dispatch(setToken(token))
            getProfile().then((value) => {
                dispatch(setUser(value))
            })
            
        }
        dispatch(setInitial(true))
        navigate("/login");
    },[])
    return (
        <div className="layout">
            <Header />
            <Outlet/>
        </div>
    );
};

export default Layout;
