import ShortDisplayProduct from "../ShortDisplayProduct/ShortDisplayProduct";

export default {
    title: 'ShortDisplayProduct',
    component: ShortDisplayProduct,
}

const Template = (arg) => <ShortDisplayProduct {...arg} />
export const DefaultShortDisplayProduct = Template.bind({});
DefaultShortDisplayProduct.args = {
    coast: 100,
    img: 'http://placehold.it/50x50',
    title: 'ShortDisplayProduct',
    shortDescription: 'any descr'
}