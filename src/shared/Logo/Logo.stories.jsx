import Logo from '../Logo/Logo';

export default {
  title: 'Logo',
  component: Logo,
};

const Template = (arg) => <Logo {...arg} />;

export const DefaultLogo = Template.bind({});
DefaultLogo.args = {};
