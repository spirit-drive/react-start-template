import { Meta } from '@storybook/react';
import { ChangeLanguage } from './ChangeLanguage';
import React from 'react';

import 'src/app/i18n.ts';
import { useTranslation } from 'react-i18next';

const meta: Meta<typeof ChangeLanguage> = {
  title: 'Change Language',
  component: ChangeLanguage,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const { t } = useTranslation();
      return (
        <>
          {Story()}
          <div>{t('translation:addToCart')}</div>
        </>
      );
    },
  ],
};

export default meta;

export const Default = {};
