import React from 'react';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: "UI/ThemeSwitcher",
    component: ThemeSwitcher,
}

export const Default = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  )
}