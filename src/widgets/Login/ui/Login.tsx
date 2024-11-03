import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginProps } from '../../Login/types/LoginTypes';
import { Link, useNavigate } from 'react-router-dom';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { userActions, getIsAuth, getProfile } from 'src/features/Auth/service/user';
import { useTranslation } from 'react-i18next';
import { ROUTER_PATH } from 'src/app/constants/router';
import { AppState } from 'src/app/store/store';

export const Login: FC<LoginProps> = ({ width, height }) => {
  const user = useSelector<AppState, AppState['user']>((state): AppState['user'] => state.user);
  const { t } = useTranslation();
  const isAuth = useSelector(getIsAuth);
  const profile = useSelector(getProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(userActions.clear());
    navigate(ROUTER_PATH.LOGIN);
  };

  return (
    <>
      {isAuth ? (
        <div className="d-flex align-items-center">
          <span>{profile.email}</span>
          <CiLogout style={{ width, height }} title={t('account.logout')} onClick={onLogout} />
        </div>
      ) : (
        <Link to="login">
          <CiLogin style={{ width, height }} title={t('account.sign_in')} />
        </Link>
      )}
    </>
  );
};
