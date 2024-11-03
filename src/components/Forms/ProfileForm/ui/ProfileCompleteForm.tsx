import React, { FC } from 'react';
import { ProfileForm } from './ProfileForm';
import { Divider } from 'antd';
import { ChangePasswordForm } from '../../ChangePasswordForm/ui/ChangePasswordForm';

export const ProfileCompleteForm: FC = () => {
  return (
    <>
      <ProfileForm />
      {/* <Divider />
      <ChangePasswordForm /> */}
    </>
  );
};
