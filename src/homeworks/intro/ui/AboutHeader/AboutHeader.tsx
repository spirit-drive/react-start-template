import React from 'react';
import s from './AboutHeader.modules.css';

export const AboutHeader = () => {
  return (
    <header className={s.header}>
      <img className={s.pic} src="https://avatars.githubusercontent.com/u/11091224" alt="" />
      <div className={s.about}>
        <h1 className={s.name}>Юлия Старченко</h1>
        <p className={s.desc}>г. Симферополь / Сочи</p>
      </div>
    </header>
  );
};
