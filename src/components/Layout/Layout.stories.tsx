import React from "react";
import type { Meta } from "@storybook/react";
import { Layout } from "./Layout";
import { Header } from "../Header";

const meta: Meta<typeof Layout> = {
  title: 'Компоненты/Layout',
  component: Layout,
  tags: ['autodocs']
};

export default meta;

export const Макет_с_шапкой = {
  args: {
    children: <Header />,
  },
};


