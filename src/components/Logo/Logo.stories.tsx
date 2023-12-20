import React, { SVGProps } from 'react';
import { Story, Meta } from '@storybook/react';
import Logo from './index';

export default {
  title: 'Logo',
  component: Logo,
} as Meta;

const Template: Story<SVGProps<SVGElement>> = (args:SVGProps<SVGElement>) => <Logo {...args} />;

let visible = true

export const Default = Template.bind({});
Default.args = {
  height:60,
  width:60
} as SVGProps<SVGElement>;  