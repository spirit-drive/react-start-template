import React, { useContext, FC } from 'react';
import { LanguageContext } from 'src/app/context/LanguageContext';
import { ThemeContext } from 'src/app/context/ThemeContext';
import { UserTypes } from 'src/types/UserTypes';
import dayjs from 'dayjs';
import { Box, Typography } from '@mui/material';
import ProfileForm from './ProfileForm';
import './profile.scss'

const Profile: FC<{ userProps: UserTypes | null }> = ({ userProps }) => {
    const user = { ...userProps }
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)


    return (
        <div className={'App-body ' + theme}>
            <Box className='form profileForm themeBg' component="form" >
                <div className='profileForm__list dfc'>
                 <ProfileForm name={user.name} />
                 <div className='df jsb fc'><Typography sx={{ fontWeight: 700 }} variant="body1" >email:</Typography> {user.email}</div>
                    <div className='df jsb fc'><Typography sx={{ fontWeight: 700 }} variant="body1" >Дата регистрации:</Typography> {dayjs(user.signUpDate).format('DD-MM-YYYY HH:mm')}</div>
                    <div className='df jsb fc'><Typography sx={{ fontWeight: 700 }} variant="body1" >commandId:</Typography> {user.commandId}</div>
                </div>
            </Box>
        </div>
    );
};

export default Profile;

