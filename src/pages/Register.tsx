import React, { FC } from 'react';
import { RegisterForm } from 'src/components/Forms/RegisterForm/ui/RegisterForm';

export const Register: FC = () => {
  return (
    <div className="app-content w-100">
      <RegisterForm />    
    </div>
  );
};
