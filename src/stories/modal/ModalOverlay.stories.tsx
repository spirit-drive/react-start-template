import {Meta, StoryObj} from '@storybook/react';
import ModalOverlay from '../../components/modal/ModalOverlay';
import React from "react";


const meta: Meta<typeof ModalOverlay> = {
    title: 'ModalOverlay',
    component: ModalOverlay,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const ModalOverlayOpened: Story = {
    args: {
        children: <button>Кнопка</button>
    }
};
