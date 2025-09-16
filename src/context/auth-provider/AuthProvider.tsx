import React, { createContext, Profiler, ReactNode, useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AuthData } from "../../models/auth"
import { profileActions } from "../../store/StoreProfile"
import { RtkDispatch } from "../../store/store"
import { tokenSelectors, tokenThunks } from "../../store/token"
import { useProfile, useSignIn, useSignUp } from "../../services/AuthService/AuthService"
import { COMMAND_ID } from "src/services/AuthService/AuthConfig"
import { AuthSuccess } from "src/services/AuthService/AuthSuccess"
import { AuthError, ErrorResponse } from "src/services/AuthService/AuthError"
import { useRtkGetProfileMutation, useRtkSignInMutation, useRtkSignUpMutation } from "src/services/AuthService/AuthRtkService"
import { INCORRECT_EMAIL_OR_PASSWORD } from "src/services/AuthService/ErrorCodes"
import { LanguageContext, Languages } from "../lang-provider/lang-provider"
import { useTranslation } from "react-i18next"
import { Profile } from "src/models/profile"

export type UserRole = "user" | "admin"

interface AuthContextType {
    currentUser: string | null
    errors: string[]
    roles: UserRole[]
    hasRole: (role: UserRole) => boolean
    isAdmin: () => boolean
    isAuthenticated: () => boolean
    login: (auth: AuthData) => boolean
    logout: () => void
    register: (auth: AuthData, onSuccess: () => void) => void
    setRoles: (roles: UserRole[]) => void
}

export const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    errors: [],
    roles: [],
    hasRole: (role: UserRole) => false,
    isAdmin: () => false,
    isAuthenticated: () => false,
    login: () => false,
    logout: () => { },
    register: () => { },
    setRoles: () => { }
});

export const useAuth = () => {
    return useContext(AuthContext);
};

type AuthProviderProps = {
    children: ReactNode;
};

let handleOnSuccess: () => void

/*
 * Провайдер авторизации
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const authenticated = useSelector(tokenSelectors.authenticated)
    const [currentUser, setCurrentUser] = useState<AuthData['email'] | null>(null);
    const dispatch: RtkDispatch = useDispatch()
    const [roles, setRoles] = useState<UserRole[]>([])
    const [errors, setErrors] = useState<string[]>([])
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();
    const token = useSelector(tokenSelectors.get)

    const handleAuthError = (response: ErrorResponse) => {

        if (response.data.errors
                .map(x => x.extensions.code)
                .find(x => x === INCORRECT_EMAIL_OR_PASSWORD))
        {
            if (language === 'ru')
                setErrors([t(INCORRECT_EMAIL_OR_PASSWORD)])
            return
        }

        setErrors(response.data.errors.map(x => x.message))
    }

    const handleSignIn = (response: AuthSuccess) => {
        setErrors([])
        // получаем и проверяем токен
        if (response.profile.commandId !== COMMAND_ID)
        {
            console.error('wrong command!')
            return
        }

        // если токен верный, сохраняем токен, генерируем профиль,
        // сохраняем email как имя пользователя, добавляем группу
        dispatch(tokenThunks.setToken(response.token))
        handleProfile(response.profile)
    }

    const handleSignUp = (response: AuthSuccess) => {
        setErrors([])
        handleOnSuccess()
        return true
    }

    const handleGetProfile = (response: Profile) => {
        setErrors([])
        handleProfile(response)
    }

    const signIn = useSignIn(handleSignIn)
    const signUp = useSignUp(handleSignUp)
    const getProfile = useProfile(handleGetProfile)

    const [ rtkSignIn ] = useRtkSignInMutation()
    const [ rtkSignUp ] = useRtkSignUpMutation()
    const [ rtkGetProfile ] = useRtkGetProfileMutation()

    const handleHasRole = (role: UserRole) => roles.indexOf(role) >= 0

    const handleIsAdmin = () => handleHasRole("admin")

    const handleIsAuthenticated = () => authenticated

    const handleLogin = (auth: AuthData) => {
        // отправляем учетные данные
        // React Query
        // signIn.mutate(auth)

        // Redux-toolkit-query
        rtkSignIn(auth)
            .then((x) => {
                if (!!x.data)
                    handleSignIn(x.data)
                else
                    handleAuthError(x.error as ErrorResponse)
            })
            .catch((x) => console.error(x))

        return true
    }

    const handleLogout = () => {
        // удаляем токен
        dispatch(tokenThunks.clearWithSaving())
        setRoles([])
    }

    const handleRegister = (auth: AuthData, onSuccess: () => void) => {
        handleOnSuccess = onSuccess;
        // React Query
        // signUp.mutate(auth)

        // Redux-toolkit-query
        rtkSignUp(auth)
            .then((x) => {
                if (!!x.data) {
                    if (handleSignUp(x.data))
                        handleOnSuccess()
                }
                else
                    handleAuthError(x.error as ErrorResponse)
            })
            .catch((x) => console.error(x))
    }

    const handleProfile = (profile: Profile) => {
        setCurrentUser(profile.email)

        dispatch(profileActions.set(profile))

        setRoles(['admin'])
    }

    const handleSetRoles = async (roles: UserRole[]) => {
        setRoles(() => roles);
    }

    useEffect(() => {
        try {
            // если токен есть - добавляем в хранилище фэйковые данные профиля, если токена нет, очищаем профиль
            if (authenticated) {
                // React Query
                // getProfile.mutate(token)

                // Redux-toolkit-query
                rtkGetProfile().then((x) => {
                    // console.debug('rtkGetProfile', x)
                    if ('signUpDate' in x.data)
                        handleProfile(x.data)
                })

            } else {
                handleLogout()
            }
        } catch (error) {
            handleLogout()
        } finally {

        }
    }, []);

    const value = {
        currentUser,
        errors,
        roles,
        hasRole: handleHasRole,
        isAdmin: handleIsAdmin,
        isAuthenticated: handleIsAuthenticated,
        login: handleLogin,
        logout: handleLogout,
        register: handleRegister,
        setRoles: handleSetRoles
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider