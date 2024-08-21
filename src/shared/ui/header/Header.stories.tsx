import type { Meta } from '@storybook/react';
import { resource } from 'src/app/localization/resources';

import Header from './Header';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
    title: 'shared/Header',
    component: Header,
    args: {},
};

export default meta;
export const Default: object = {};
