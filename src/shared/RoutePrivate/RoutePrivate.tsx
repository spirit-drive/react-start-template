import React, { ReactNode } from "react"
import { useAppSelector } from "../../store/hooks";
import { Navigate } from "react-router-dom";

export interface IRoutePrivateProps {
    children?: ReactNode | ReactNode[];
}

export const RoutePrivate = ({ children }: IRoutePrivateProps) => {
    const token = useAppSelector(state => state.authAndProfile.auth.token)

    if(!token){
        return <Navigate to="/login" replace />;
    }

    return children;
}