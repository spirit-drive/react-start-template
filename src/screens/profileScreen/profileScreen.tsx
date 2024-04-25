import React, { FC, useState, createContext, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { ProfileCompletedForm } from '../../screens/profileScreen/ui/profileCompletedForm';

export const ProfileScreen: FC = () => {
  return (
    <div className="block">
      <ProfileCompletedForm />
    </div>
  );
};
