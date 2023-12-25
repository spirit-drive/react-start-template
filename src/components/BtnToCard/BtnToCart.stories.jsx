import {BtnToCart} from "./BtnToCart";

export default {
    title: 'Shop/Button to card',
    component: BtnToCart
}

const Template = (arg) => <BtnToCart {...arg} />

export const Default = Template.bind({})

Default.args = {
    counter: 0,
    disabled: false
}