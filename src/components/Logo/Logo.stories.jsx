import { Logo } from "./Logo";

export default {
  title: "Компоненты/Logo",
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: "string",
      description: "Заголовок логотипа",      
      defaultValue: "E-Shop",
      options: ["E-Shop", "Журнал операций"],
      control: {
        type: "radio"
      },
    },
  }
}

const Template = (arg) => <Logo {...arg} />

export const Магазин = Template.bind({});
export const Журнал = Template.bind({});

Магазин.args = {
  title: "E-Shop",
};

Журнал.args = {
  title: "Журнал операций",
};