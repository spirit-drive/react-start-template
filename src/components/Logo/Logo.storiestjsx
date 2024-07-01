import { Logo } from "./Logo";

export default {
  title: "Компоненты/Logo",
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: "string",
      description: "Заголовок логотипа",      
      defaultValue: "Store",
      options: ["Store", "Журнал операций"],
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
  title: "Store",
};

Журнал.args = {
  title: "Журнал операций",
};