import type { Meta } from '@storybook/react';

import ModalAction from './ModalAction';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ModalAction> = {
    title: 'shared/ModalAction',
    component: ModalAction,
    args: {},
};

export default meta;
export const Default: object = {};
