import type { Meta, StoryObj } from '@storybook/react';

import { Modal as ModalComponent } from '../UI/Modal/Modal';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof ModalComponent> = {
  title: 'Example/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
};

export default meta;

export const Modal: Story = {
  args: {
    showModal: true,
    closeHandler: () => null,
    title: 'Заголовок модалки',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere esse dicta dolore laudantium voluptates recusandae aut omnis voluptatibus illo.',
    titleButton: 'Клик',
    onClickButton: () => console.log('КЛИК'),
  },
};
