import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading } from 'src/pages/slice/profileSlice';
import { logout } from 'src/features/auth/authSlice';
import { useTranslation } from 'react-i18next';
import { RootState } from "src/app/providers/StoreProvider";
import { useNavigate } from 'react-router-dom';
import './css/profile.css';
import Loader from "src/shared/components/Loader";
import DebugStore from "src/shared/utils/DebugStore";

const ProfilePage: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: profile, isLoading, error } = useSelector((state: RootState) => state.profile);

    // Загружаем профиль при монтировании
    useEffect(() => {
        dispatch(startLoading());
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logout()); // Вызываем logout экшен
        navigate('/'); // Перенаправляем на главную страницу
    };

    if (isLoading) {
        // return <p className="loading">{t('loading')}...</p>;
        return <Loader />;
    }

    if (error) {
        return <p className="error">{t('error')}: {error}</p>;
    }

    return (
        <div className="profile-page">
            <h1>{t('profile')}</h1>
            {profile ? (
                <div>
                    <p><strong>ID:</strong> {profile.id}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>{t('registration_date')}:</strong> {new Date(profile.signUpDate).toLocaleDateString()}</p>
                </div>
            ) : (
                <p>{t('no_profile_data')}</p>
            )}
            <button className="logout-button" onClick={handleLogout}>
                {t('logout')}
            </button>
            {/*<DebugStore />*/}
        </div>
    );
};

export default ProfilePage;
