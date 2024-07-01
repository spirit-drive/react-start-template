import { ReactNode } from "react";
import { Layout } from "./Layout";
import  Header  from "../Header/Header";

export default {
  title: "Компоненты/Layout",
  component: Layout,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: ReactNode,
      description: "Внутреннее содержимое",
    },
  }
}

const Template = (arg) => <Layout {...arg} />

export const layout = Template.bind({});

layout.args = {
    children: <Header />
}