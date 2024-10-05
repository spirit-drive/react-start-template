import React from 'react';
import { Modal } from './Modal';

export default {
    title: "UI/Modal",
    component: Modal,
}

export const Default = {
    args: {
        isOpen: true,
        children: [
            <div>Элемент</div>,
            <div>Элемент2</div>,
            <div>Элемент3</div>,
        ],
    }
}

