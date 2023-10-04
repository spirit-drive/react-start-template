import {Meta, StoryObj} from '@storybook/react';
import Logo from '../../components/header/Logo';
import '../header.css';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  render: () => (
      <div style={{ backgroundColor: 'black', height: '60px' }}>
        <Logo />
      </div>
  ),
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoImage: Story = {};
