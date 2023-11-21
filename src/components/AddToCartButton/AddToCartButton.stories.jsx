import { AddToCartButton } from "./AddToCartButton";

export default {
  title: "Компоненты/AddToCartButton",
  component: AddToCartButton,
  tags: ['autodocs'],
  argTypes: {
    counter: {
      type: Number,
      description: "Счётчик",
    },
  }
}

const Template = (arg) => <AddToCartButton {...arg} />

export const Счётчик_больше_нуля = Template.bind({});
export const Счётчик_равен_нулю = Template.bind({});
export const Счётчик_меньше_нуля = Template.bind({});

Счётчик_больше_нуля.args = {
  counter: 3,
};

Счётчик_равен_нулю.args = {
  counter: 0,
};

Счётчик_меньше_нуля.args = {
  counter: -5
};



