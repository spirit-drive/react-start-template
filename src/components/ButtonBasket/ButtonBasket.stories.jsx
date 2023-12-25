import ButtonBasket from "./ButtonBasket";

export default {
    title: 'ButtonBasket',
    component: ButtonBasket,
}

const Template = (arg) => <ButtonBasket {...arg} />
export const DefaultButtonBasket = Template.bind({});
DefaultButtonBasket.args = {
    productCount: 0,
}