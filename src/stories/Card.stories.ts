import type { Meta, StoryObj } from '@storybook/react';

import { Card as CardComponent } from '../UI/Card/Card';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],
};

export default meta;

export const Card: Story = {
  args: {
    title: 'АЗС',
    categoryName: 'Транспорт',
    price: 2500,
    description:
      'Активное развитие ресурсной базы, использование самых современных технологий добычи и переработки нефти, наличие эффективной сбытовой сети позволяют «Газпром нефти» уверенно занимать позицию одного из лидеров российской нефтегазовой отрасли и играть заметную роль на мировом нефтегазовом рынке.',
    date: '2 апреля 2012',
  },
};
