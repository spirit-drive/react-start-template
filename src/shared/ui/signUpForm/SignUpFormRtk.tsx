import { Box, Button, IconButton } from '@mui/material';
import React, { FC, useState } from 'react';
import useHttp from 'src/hooks/http.hook';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { CustomTextField } from '../../customFormComponents/CustomTextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { fetchUser } from 'src/slices/mainSlice';
import {  useNavigate } from 'react-router-dom';
import { IInput } from './SignUpTypes';
import { AuthResult } from './SignUpTypes';
import'./signUp.scss'



//mail@12.ru

export const SignUpFormRtk: FC = () => {
    const navigate = useNavigate();
    const { request } = useHttp()
    const [data, setData] = useState({
        email: '',
        password: '',
        commandId: "Vitala"
    })
    const dispatch = useAppDispatch();
    const methods = useForm<IInput>({
        defaultValues: data
    })
    const [showPassword, setShowPassword] = useState(true);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const { handleSubmit, formState: { errors }, control } = methods


    const onSubmit: SubmitHandler<IInput> = (data: IInput) => {
        dispatch(fetchUser(data)).catch((value) => {
            return value
        })
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormProvider {...methods}>
            
            <Box className='form signUpForm themeBg' component="form" onSubmit={handleSubmit(onSubmit)}>
                <>
                <CustomTextField
                     className='wAll'
                    readOnly={false}
                    name="email"
                    control={control}
                    label="Введите email"
                    id="input-name"
                    startAdornment={
                        <InputAdornment position="start">
                            <PersonIcon />
                        </InputAdornment>
                    }
                />
                </>



                <CustomTextField
                     className='wAll'
                    type={showPassword ? 'text' : 'password'}
                    readOnly={false}
                    name="password"
                    control={control}
                    label="Введите пароль"
                    id="input-password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    startAdornment={
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    }
                />
                
                <Button variant="contained" type="submit"> Отправить</Button>
                </Box>
        </FormProvider>
    );
};


