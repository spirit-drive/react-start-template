import { HoverWrapper } from './hoverWrapper';
export default {
  title: 'CostAccounting/hoverElements',
  component: HoverWrapper,
};

const Template = (arg) => <HoverWrapper {...arg} />;

export const Default = Template.bind({});
Default.arg = {};
