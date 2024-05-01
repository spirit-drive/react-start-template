import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router';
import { useAuth } from '../../components/layout/lib/useAuth';
import { profileActions, profileSelector } from '../../entities/profileSlice';
import { useDispatch } from '../../store/useDispatch';
import { Header } from '../../components/header/header';
import { useSelector } from 'react-redux';

export const CommonScreen: FC = () => {
	const dispatch = useDispatch();
	const { setIsAuth } = useAuth();
  const { authToken } = useSelector(profileSelector);

	useEffect(() => {
			dispatch(profileActions.getToken());
      dispatch(profileActions.getProfileInfo());
      dispatch(profileActions.getCostList());
      setIsAuth(Boolean(authToken));
	}, [dispatch]);


  return (
    <div>
      <nav>
        <Header />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
