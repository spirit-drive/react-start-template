import React, { FC } from 'react';
import { SingInForm } from './singInForm/singInForm';


export const AuthScreen: FC = () => {
  return (
    <div className="block">
      <SingInForm />
    </div>
  );
};
