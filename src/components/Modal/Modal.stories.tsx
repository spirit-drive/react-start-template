import type {Meta, StoryObj} from '@storybook/react';
import {useArgs} from '@storybook/preview-api';
import React, {useState} from 'react';
import {Modal} from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Shop/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
    isOpen: boolean;
}

export const Default: Story = {
    args: {
        onClose: () => {
        },
        children: 'Modal window',
        isOpen: false
    } as ModalProps,
    render: ({...args}) => {
        const [{isOpen}, updateArgs] = useArgs();
        const handleClose = () => updateArgs({isOpen: !isOpen});

        return (
            <Modal
                isOpen={isOpen}
                onClose={handleClose}
            >
                {args.children}
            </Modal>
        )
    }
};

export const TestShowModal: Story = {
    render: () => {
        const handleShowModal = (): void => {
            setIsOpen(true);
        }
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const [inputValue, setInputValue] = useState('');

        return (
            <>
                <input
                    type="text"
                    onBlur={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleShowModal}>open</button>
                <Modal
                    isOpen={isOpen}
                    onClose={setIsOpen}
                >
                    <p>{inputValue}</p>
                </Modal>
            </>
        );
    }
};