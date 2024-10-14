import type { Meta, StoryObj } from '@storybook/react';

import { ShortCard as ShortCardComponent } from '../UI/ShortCard/ShortCard';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof ShortCardComponent> = {
  title: 'Example/ShortCard',
  component: ShortCardComponent,
  tags: ['autodocs'],
};

export default meta;

export const ShortCard: Story = {
  args: {
    title: 'АЗС',
    categoryName: 'Транспорт',
    price: 2500,
    description:
      'Активное развитие ресурсной базы, использование самых современных технологий добычи и переработки нефти, наличие эффективной сбытовой сети позволяют «Газпром нефти» уверенно занимать позицию одного из лидеров российской нефтегазовой отрасли и играть заметную роль на мировом нефтегазовом рынке.',
  },
};
