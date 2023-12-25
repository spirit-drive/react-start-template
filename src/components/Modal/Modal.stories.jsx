import {Modal} from "./Modal";

export default {
    title: 'Shop/Modal',
    component: Modal
}

const Template = (arg) => <Modal {...arg} />

export const Default = Template.bind({})

Default.args = {
    visible: true,
    children: 'Modal window',
}