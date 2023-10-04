import {Meta, StoryObj} from "@storybook/react";
import Layout from "../../components/layout/Layout";

const meta: Meta<typeof Layout> = {
    title: 'Layout',
    component: Layout,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutComponent: Story = {
    render: () => (
        <Layout/>
    ),
};