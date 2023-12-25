import {Layout} from "../Layout/Layout";

export default {
    title: 'Shop/Layout',
    component: Layout
}

const Template = (arg) => <Layout {...arg} />

export const Default = Template.bind({})

Default.args = {}