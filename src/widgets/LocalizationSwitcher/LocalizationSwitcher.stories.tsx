import React from 'react';
import type { Meta } from '@storybook/react';
import { LocalizationSwitcher } from './LocalizationSwitcher';
import { Button } from 'src/shared/button/Button';

const meta: Meta<typeof LocalizationSwitcher> = {
  title: 'widgets/LangSwitcher',
  component: LocalizationSwitcher,
  tags: ['autodocs'],
  subcomponents: { Button },
};

export default meta;

export const Primary = {
  render: () => (
    <>
      <LocalizationSwitcher />
    </>
  ),
};
