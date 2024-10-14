import type { Meta, StoryObj } from '@storybook/react';

import { Collapse as CollapseComponent } from '../UI/Collapse/Collapse';

const meta: Meta<typeof CollapseComponent> = {
  title: 'Example/Collapse',
  component: CollapseComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Collapse: Story = {
  args: {
    /** Укажите текст в открытом компоненте */
    children: 'string',
    opened: false,
    onClick: () => null,
  },
};
