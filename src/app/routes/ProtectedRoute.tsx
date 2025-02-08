import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {RootState} from "src/app/providers/StoreProvider";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = useSelector((state: RootState) => state.auth.token);

    if (!token) {
        return <Navigate to="/register" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;