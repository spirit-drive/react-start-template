import React from 'react';
import { ToolTip } from './tooltip';
import { Button } from '../button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const Wrapper = () => (
    <React.Fragment>
        <ToolTip text="Тут клевая подсказка" position="bottom" displayTime={450}>
            <Button label="Наведи на меня" size="large" />
        </ToolTip>
    </React.Fragment>
);

const meta: Meta<typeof ToolTip> = {
    title: 'ToolTip',
    component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};