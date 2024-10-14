import { Divider } from 'antd';
import React, { FC } from 'react';
import { RegisterForm } from 'src/components/Forms/RegisterForm/ui/RegisterForm';
import { RegisterFormThunk } from 'src/components/Forms/RegisterForm/ui/RegisterFormThunk';

export const Register: FC = () => {
  return (
    <div className="app-content w-100">
      <RegisterForm />
      <Divider />
      <RegisterFormThunk />
    </div>
  );
};
