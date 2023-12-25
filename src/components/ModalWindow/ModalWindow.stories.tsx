import React from "react";
import ModalWindow from "./ModalWindow";
import {ModalWindowProps} from "src/types";

export default {
    title: 'ModalWindow',
    component: ModalWindow,
}

const Template = (arg: ModalWindowProps) => <ModalWindow {...arg} />
export const DefaultModal = Template.bind({});
DefaultModal.args = {
    children: 'test children',
    visible: true,
}