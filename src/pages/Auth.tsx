import React, { FC } from 'react';
import { LoginForm } from 'src/components/Forms/LoginForm/ui/LoginForm';

export const Auth: FC = () => {
  return (
    <div className='app-content w-100'>
      <LoginForm></LoginForm>
    </div>
  );
};
