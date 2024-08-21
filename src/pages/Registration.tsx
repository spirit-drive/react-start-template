import { SignUpForm } from 'src/shared/ui/signUpForm/SignUpForm';
import { ThemeContext } from 'src/app/context/ThemeContext';
import React, { useContext } from 'react';
import { SignUpFormRtk } from 'src/shared/ui/signUpForm/SignUpFormRtk';

const Registration = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={'App-body ' + theme}>
            <div className='df'>
                <div>
                    Запрос в компоненте
                    <SignUpForm />
                </div>
                
                <div>
                    Запрос в createAsyncThunk
                    <SignUpFormRtk />
                </div>
            </div>

        </div>
    );
};

export default Registration;
