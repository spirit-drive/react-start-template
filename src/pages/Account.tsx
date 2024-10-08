import React, { FC } from 'react';
import { ProfileCompleteForm } from '../components/Forms/ProfileForm/ui/ProfileCompleteForm';

export const Account: FC = () => {
  return (
    <div className="app-content w-100" style={{ padding: '10px' }}>
      <ProfileCompleteForm />
    </div>
  );
};
