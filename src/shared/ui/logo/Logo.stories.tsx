import type { Meta } from '@storybook/react';

import Logo from './Logo';
import './Storybook.module.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Logo> = {
    title: 'shared/Logo',
    component: Logo,
    args: {},
};

export default meta;
export const Default: object = {};
