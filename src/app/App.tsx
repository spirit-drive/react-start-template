import React, { useEffect, ReactNode, FC } from 'react';
//import { useSelector } from 'react-redux';
//import { IRootState } from 'src/store/store';
import Layout from 'src/shared/ui/layout/Layout';
import './styles/app.scss'
import { MyThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Login } from 'src/pages';
import Profile from 'src/pages/profile/Profile';
import Operations from 'src/pages/Operations';
import { Route, Routes } from 'react-router-dom';
import { Modal } from 'src/shared/ui/modal/Modal';
import { AddOperationForm } from 'src/shared/ui/operationsForm/AddOperationForm';
import Registration from 'src/pages/Registration';
import MySnackBar from 'src/shared/ui/snackBar/MySnackBar';
import { ProtectedRoute } from 'src/shared/ui/protectedRoute/ProtectedRoute';



function App() {
    //const user = useSelector((state: IRootState) => state.main.user)

    return (
        <MyThemeProvider>
            <LanguageProvider>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route path="login" element={<Login />}></Route>
                        <Route path="registration" element={<Registration />}></Route>
                        <Route path="profile"
                            element={
                                <ProtectedRoute />}>
                        </Route>
                        <Route path="operations" element={<Operations />}>
                            <Route path="addOperation" element={<Modal label={'Добавить операцию'} children={<AddOperationForm />} />} />
                            <Route path="operationId/:id" element={<Modal label={'Изменить операцию'} children={<AddOperationForm />} />} />
                        </Route>
                    </Route>

                </Routes>
                <MySnackBar />
            </LanguageProvider>
        </MyThemeProvider>
    );
}

export default App;
