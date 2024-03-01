import React from 'react';
import { links } from './mocks';
import { AboutLink } from '../AboutLink';
import s from './AboutFooter.modules.css';

export const AboutFooter = () => {
  return (
    <footer className={s.footer}>
      Контакты:
      {links.map(({ title, url }) => (
        <AboutLink title={title} url={url} key={title} />
      ))}
    </footer>
  );
};
