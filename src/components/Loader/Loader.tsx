import React from 'react';
import cn from 'clsx';
import s from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className = '' }: LoaderProps) => <span className={cn(s.preloader, className)} />;
