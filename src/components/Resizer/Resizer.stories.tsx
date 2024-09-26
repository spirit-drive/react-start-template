import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Resizer } from './Resizer';

const Wrapper = () => (
  <>
    <Resizer initHeight={100} initWidth={600}>
      {() => (
        <div>
          <h5>При нажатии на зеленый круг можно изменять размеры элементов</h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis
          illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi reiciendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis
          illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi reiciendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis
          illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi reiciendis.
        </div>
      )}
    </Resizer>
    <hr />
    <div>
      <Resizer initHeight={100} initWidth={300}>
        {() => (
          <div>
            <h5>При нажатии на зеленый круг можно изменять размеры элементов</h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis
            illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi
            reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est
            eveniet facilis illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident
            quasi reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim
            est eveniet facilis illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat
            provident quasi reiciendis.
          </div>
        )}
      </Resizer>
    </div>
  </>
);

const meta: Meta<typeof Resizer> = {
  title: 'Компоненты/Resizer',
  component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};
