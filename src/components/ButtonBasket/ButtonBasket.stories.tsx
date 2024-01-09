import { ButtonBasketProps } from "src/types";
import ButtonBasket from "./ButtonBasket";
import React from "react";

export default {
    title: 'ButtonBasket',
    component: ButtonBasket,
}

const Template = (arg: ButtonBasketProps) => <ButtonBasket {...arg} />
export const DefaultButtonBasket = Template.bind({});
DefaultButtonBasket.args = {
    productCount: 0,
}