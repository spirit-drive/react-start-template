import DisplayProduct from "../DisplayProduct/DisplayProduct";

export default {
    title: 'DisplayProduct',
    component: DisplayProduct,
}

const Template = (arg) => <DisplayProduct {...arg} />
export const DefaultDisplayProduct = Template.bind({});
DefaultDisplayProduct.args = {
    coast: 100,
    category: 'category',
    img: 'http://placehold.it/50x50',
    title: 'DisplayProduct',
    description: 'any descr'
}

