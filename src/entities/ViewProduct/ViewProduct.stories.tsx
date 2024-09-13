import React from 'react';
import { DrawingIcon } from '../../shared/DrawingIcon';
import { ViewProduct } from './ViewProduct';

export default {
    title: "UI/ViewProduct",
    component: ViewProduct,
}

export const Default = {
    args: {
        productName: "Тестовый товар",
        image: <DrawingIcon />, 
        cost: 200,
        describe: "Мощный игровой компьютер"
    }
}

