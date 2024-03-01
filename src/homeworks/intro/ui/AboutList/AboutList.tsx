import React, { ReactElement } from 'react';
import s from './AboutList.module.css';

interface AboutListProps {
  title: string;
  icon: string;
  children: ReactElement<HTMLLIElement>[];
}

export const AboutList = (props: AboutListProps) => {
  const { title, icon, children } = props;

  return (
    <>
      <h3>
        <img className={s.icon} src={icon} alt="" />
        {title}
      </h3>
      <ul>{children}</ul>
    </>
  );
};
