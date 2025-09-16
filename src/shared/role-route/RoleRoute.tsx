import React, { FC, ReactNode, useEffect } from "react"
import { useNavigate } from "react-router"
import { useAuth, UserRole } from "src/context/auth-provider/AuthProvider"


export type RoleRouteProps = {
    role: UserRole
    children: ReactNode
}

const RoleRoute: FC<RoleRouteProps> = ({ children, role }) => {
  const { isAuthenticated, hasRole, currentUser, roles } = useAuth();
  const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated() || !hasRole(role)) {
            navigate("/auth")
        }
    }, [])

  return (
    <>
        {children}
    </>
    )
}

export default RoleRoute