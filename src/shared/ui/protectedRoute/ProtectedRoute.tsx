import { Navigate } from 'react-router-dom';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/store';
import Profile from 'src/pages/profile/Profile';

export const ProtectedRoute = () => {
    const user = useSelector((state: IRootState) => state.main.user)
    const initial = useSelector((state: IRootState) => state.main.isInitial)
    if (user === null && initial) {
        return <Navigate to="/login" replace />;
    }
    return <Profile userProps={{ ...user }} />;
};
