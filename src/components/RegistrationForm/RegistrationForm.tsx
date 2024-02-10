import React from 'react';
import classNames from './registrationForm.module.css';
import clsx from 'clsx';

const RegistrationForm = () => {
  return (
    <form className={clsx(classNames.form)} action="">
      jfal
      <input type="email" />
      <input type="password" />
    </form>
  );
};

export default RegistrationForm;
