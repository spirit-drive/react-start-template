import type { Meta, StoryObj } from '@storybook/react';

import { Btn as BtnComponent } from '../UI/Btn/Btn';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof BtnComponent> = {
  title: 'Buttons/Btn',
  component: BtnComponent,
  tags: ['autodocs'],
};

export default meta;

export const Btn: Story = {
  args: {
    text: 'Кнопка',
    onClick: () => console.log('КЛИК'),
    isDisabled: false,
  },
};
