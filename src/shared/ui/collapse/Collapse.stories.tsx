import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from './Collapse';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Collapse> = {
    title: 'shared/Collapse',
    component: Collapse,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapse>;
export const Default: Story = {
    args: {
        opened: false,
        text: "Это компонент Collapse. Он принимает только opened и children. Когда opened: true, дочерние компоненты сначала монтируются, а потом плавно появляются.В обратном случае наоборот, после скрытия дочерних компонентов, они размонтируются."
    },
};
