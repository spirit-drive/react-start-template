import ModalWindow from "./ModalWindow";

export default {
    title: 'ModalWindow',
    component: ModalWindow,
}

const Template = (arg) => <ModalWindow {...arg} />
export const DefaultModal = Template.bind({});
DefaultModal.args = {
    children: 'test children',
    visible: true,
}