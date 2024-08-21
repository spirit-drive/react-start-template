import type { Meta } from '@storybook/react';
import { resource } from 'src/app/localization/resources';

import LanguageButton from './LanguageButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LanguageButton> = {
    title: 'shared/LanguageButton',
    component: LanguageButton,
    args: {
        text: true
    },
};

export default meta;
export const Default: object = {};
