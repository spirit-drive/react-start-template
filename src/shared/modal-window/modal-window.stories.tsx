import React, { useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import ModalWindow, { ModalWindowProps } from './modal-window';

const meta: Meta<typeof ModalWindow> = {
    title: 'Components/ModalWindow',
    component: ModalWindow,
    argTypes: {

    }
}

export default meta;

export const Main: StoryObj<typeof ModalWindow> = {
    render: (args: ModalWindowProps) => {
        const [, updateArgs] = useArgs()
        const handleSwitchDialog = (visible: boolean) => {
            updateArgs({ ...args, visible })
        }
        useEffect(() => {
            updateArgs({ ...args, onClose: () => handleSwitchDialog(false) })
        }, [])

        return (
            <>
                <button type='button' onClick={() => handleSwitchDialog(true)}>Открыть</button>
                <button type='button' onClick={() => handleSwitchDialog(false)}>Закрыть</button>
                <ModalWindow {...args} />
            </>
        )
    },
    args: {
        children: ""
    }
};