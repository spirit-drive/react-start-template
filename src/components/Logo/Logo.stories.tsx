import React from 'react';
import { Story, Meta } from '@storybook/react';

import Logo, { LogoProps } from './Logo';

export default {
  title: 'components/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const SmallLogo = Template.bind({});
SmallLogo.args = {
  size: 'sm',
};

export const MediumLogo = Template.bind({});
MediumLogo.args = {
  size: 'md',
};

export const LargeLogo = Template.bind({});
LargeLogo.args = {
  size: 'lg',
};
