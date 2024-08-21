import { SignInForm } from "src/shared/ui/SignInForm/SignInForm";
import { ThemeContext } from 'src/app/context/ThemeContext';
import React, {useContext} from 'react';

const Login = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={'App-body ' + theme}>
        <SignInForm/>
        </div>
    );
};

export default Login;
