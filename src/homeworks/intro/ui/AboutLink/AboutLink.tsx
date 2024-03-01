import React from 'react';
import s from './AboutLink.modules.css';

export interface AboutLinkProps {
  title: string;
  url: string;
}

export const AboutLink = (props: AboutLinkProps) => {
  const { title, url } = props;

  return (
    <a className={s.link} href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  );
};
