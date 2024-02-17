import type {Meta, StoryObj} from '@storybook/react';
import {Collapse} from '../components/сollapse/сollapse';

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Collapse>;

export const Basic: Story = { argTypes: {  opened: {
  options: [true, false],
  control: { type: 'boolean'}
}, 
children :  {
  control: { type: 'text'}
}},args: { opened: true, children: "Текст для отображения" }}
