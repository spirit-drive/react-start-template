import React, { useContext, useEffect, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserTypes } from 'src/types/UserTypes';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useForm, FormProvider } from "react-hook-form";
import { setUser } from 'src/slices/mainSlice';
import { CustomTextField } from 'src/shared/customFormComponents/CustomTextField';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import useHttp from 'src/hooks/http.hook';
import './profile.scss'

type MyOmit<T, K extends keyof T> = Omit<T, K>;
type updateProfileTypes = MyOmit<UserTypes, 'id' | 'commandId' | 'signUpDate'| 'email'|'password'>

const ProfileForm: FC<updateProfileTypes> = ({ name }) => {
    const dispatch = useDispatch()
    const [onEdit, setOnEdit] = useState<boolean>(false)
    const { request } = useHttp()
    const methods = useForm<updateProfileTypes>({
        defaultValues: {
            name: ""
        }
    })

    
    const updateProfile = async (data: updateProfileTypes) => {
        const res = await request(`profile`, 'PATCH',JSON.stringify(data));
        return res;
    }

    const onSubmit = (data: updateProfileTypes) => {
        updateProfile(data).then((value) => {
            dispatch(setUser(value))
            setOnEdit(false)
        })
        //updatePhoneEmail(employeeInfo.resumeId, dataToFetch(data)).then((value) => {
        
        //})
    }
    //admin@yan23.ru
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
        control } = methods

    useEffect(() => {
        reset({
            name: name,
        });
    }, [name,  reset]);

    const cancelUpdate = () => {
        setOnEdit(false)
        reset({
            name: name,
        });
    }


    return (
        <FormProvider {...methods}>
            <Box sx={{ gap: "15px" }} className='dfc'>
                {!onEdit ?
                    <IconButton sx={{ alignSelf: 'flex-end' }} onClick={() => setOnEdit(true)}><EditIcon /></IconButton> :
                    <Box sx={{ alignSelf: 'flex-end' }} className='df'>
                        <IconButton onClick={handleSubmit(onSubmit)}><SaveIcon /></IconButton>
                        <IconButton onClick={cancelUpdate}><ClearIcon /></IconButton>
                    </Box>
                }
                <div className='df jsb fc'><Typography sx={{ fontWeight: 700 }} variant="body1" >Имя:</Typography>
                    {!onEdit ? getValues("name") :
                        <CustomTextField
                            requiredInput
                            className='profileTf'
                            readOnly={false}
                            name="name"
                            control={control}
                            label="Имя"
                            id="input-name"
                        />}
                </div>
                
            </Box>
        </FormProvider>
    );
};

export default ProfileForm;
