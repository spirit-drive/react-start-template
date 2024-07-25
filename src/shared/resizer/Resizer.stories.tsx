import React from 'react';
import { Resizer } from './Resizer';
import type { Meta, StoryObj } from '@storybook/react';

const Wrapper = () => (
    <React.Fragment>
        <Resizer>
            <div>
                <ul>
                    <li>Neil Armstrong</li>
                    <li>Alan Bean</li>
                    <li>Peter Conrad</li>
                    <li>Edgar Mitchell</li>
                    <li>Alan Shepard</li>
                </ul>
            </div>
        </Resizer>
    </React.Fragment>
);

const meta: Meta<typeof Resizer> = {
    title: 'Resizer',
    component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};
