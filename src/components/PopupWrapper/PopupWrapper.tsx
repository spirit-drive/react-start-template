import React, { ChangeEventHandler, ReactEventHandler, useState, FC } from 'react';
import styles from './PopupWrapper.module.scss';

export type PopupWrapperProps = {
  visible: boolean;
  children: React.ReactNode;
  close?: ReactEventHandler;
};

export const PopupWrapper: FC<PopupWrapperProps> = ({ visible, children, close, ...props }) => {
  if (visible) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <button className={styles.closeButton} onClick={close}>
            close
          </button>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
