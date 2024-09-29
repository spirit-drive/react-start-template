import React from 'react';
import { ViewProduct } from './ViewProduct';
import image from './Icons/free-icon-backhoe.png';

export default {
    title: "UI/ViewProduct",
    component: ViewProduct,
}

export const Default = {
    args: {
        productName: "Тестовый товар",
        photo: image, 
        cost: 200,
        describe: "Мощный"
    }
}

