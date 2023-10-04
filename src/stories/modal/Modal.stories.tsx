import {Meta, StoryObj} from '@storybook/react';
import Modal from '../../components/modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'Modal',
    component: Modal,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const ModalOpened: Story = {
    args: {
        visible: true,
        children: <div style={{padding: '20px'}}>
            <p>Text</p>
            <p>Text</p>
            <p>Text</p>
            <p>Text</p>
        </div>
    }
};

export const ModalClosed: Story = {
    args: {
        visible: false,
        children: <div style={{padding: '20px'}}>
            <p>Text</p>
            <p>Text</p>
            <p>Text</p>
            <p>Text</p>
        </div>
    }
};






