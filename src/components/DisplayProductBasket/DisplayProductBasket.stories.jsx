import DisplayProductBasket from "../DisplayProductBasket/DisplayProductBasket";

export default {
    title: 'DisplayProductBasket',
    component: DisplayProductBasket,
}

const Template = (arg) => <DisplayProductBasket {...arg} />
export const DefaultDisplayProductBasket = Template.bind({});
DefaultDisplayProductBasket.args = {
    coast: 100,
    img: 'http://placehold.it/50x50',
    title: 'DisplayProduct',
    shortDescription: 'any descr'
}
