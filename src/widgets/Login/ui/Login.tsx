import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginProps } from '../../Login/types/LoginTypes';
import { AppState } from '../../../app/redux/store';
import { Link } from 'react-router-dom';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { tokenActions } from '../../../app/redux/token';
import { userActions } from '../../../app/redux/user';
import { useTranslation } from 'react-i18next';

export const Login: FC<LoginProps> = ({ width, height }) => {
  const token = useSelector<AppState, AppState['token']>((state): AppState['token'] => state.token);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const onLogout = () => {
    dispatch(tokenActions.clear());
    dispatch(userActions.clearInfo());
  };

  return (
    <>
      {token ? (
        <CiLogout style={{ width, height, }} title={t('account.logout')} onClick={onLogout} />
      ) : (
        <Link to="auth">
          <CiLogin style={{ width, height }} title={t('account.sign_in')}/>
        </Link>
      )}
    </>
  );
};
