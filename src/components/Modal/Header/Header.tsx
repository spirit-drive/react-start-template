import React from 'react';

interface HeaderProps {
  logo: string;
}

export const Header = ({ logo }: HeaderProps) => {
  return (
    <div>
      <img src={logo} width={100} height={100} alt="Header logo" />
    </div>
  );
};
