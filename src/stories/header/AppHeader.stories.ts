import type {Meta, StoryObj} from '@storybook/react';
import AppHeader from '../../components/header/AppHeader';

const meta: Meta<typeof AppHeader> = {
  title: 'AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Header = {};
