import Layout from "../Layout/Layout";

export default {
    title: 'Layout',
    component: Layout,
}

const Template = (arg) => <Layout {...arg} />
export const DefaultLayout = Template.bind({})
DefaultLayout.args = {

}