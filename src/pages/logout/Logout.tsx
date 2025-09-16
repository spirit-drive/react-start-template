import { FC, useEffect } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "src/context/auth-provider/AuthProvider"


const LogoutPage: FC = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        logout();
        navigate('/')
    }, [])

    return null
}

export default LogoutPage