import React, { ReactNode } from "react"
import { useAppSelector } from "../../store/hooks";
import { Navigate } from "react-router-dom";

export interface IRoutePrivateProps {
    children?: ReactNode | ReactNode[];
}

export const RoutePrivateAdmin = ({ children }: IRoutePrivateProps) => {
    const token = useAppSelector(state => state.authAndProfile.auth.token)
    const userRole = useAppSelector(state => state.authAndProfile.profile.role)

    if(userRole != "ADMIN"){
        return <Navigate to="/access_denied_page" replace />;
    }

    return children;
}