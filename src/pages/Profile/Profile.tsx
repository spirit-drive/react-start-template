import clsx from 'clsx';
import React, { useState } from 'react';
import { getEmailLocalStorage, getUserNameLocalStorage, setEmailLocalStorage, setUserNameLocalStorage } from '../../helper/localStorage';
import { useTheme } from '../../helper/useTheme';
import classNames from './profile.module.css';
import { useDispatch } from 'react-redux';
import { setEmail, setName } from '../../store/profileSlice';
const Profile = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>(getUserNameLocalStorage() || '');
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  if (!token) {
    setUserNameLocalStorage('');
    setEmailLocalStorage('');
  }

  const { theme } = useTheme();
  const themeClass = `input-${theme}`;
  const userEmail: string = getEmailLocalStorage();

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const toggleEditMode = (): void => {
    setEditMode(!editMode);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      toggleEditMode();
      setUserNameLocalStorage(userName);
      dispatch(setName(userName));
      dispatch(setEmail(userEmail));
    }
  };

  return (
    <section className={clsx(classNames.profileSection)}>
      <h1>Профиль</h1>
      <div className={clsx(classNames.profileFieldsGroup)}>
        <div>Логин: {userEmail}</div>
        <div>
          Имя профиля:{' '}
          {editMode ? (
            <input
              className={clsx(classNames.generalInput, classNames[themeClass])}
              placeholder="введите имя"
              onChange={(e) => handleUserNameChange(e)}
              onKeyDown={(e) => handleKeyPress(e)}
              type="text"
            />
          ) : (
            <span onDoubleClick={toggleEditMode}>{userName.length === 0 ? 'введите имя' : userName}</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
