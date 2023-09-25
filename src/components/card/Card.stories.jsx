import Card from './Card';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        type: {
            type: 'string',
            description: 'Button type',
            defaultValue: 'default',
            options: ['default', 'disabled'],
            control: {
                type: 'select',
            },
        },
    },
};

export const Default = {
    args: {
        type: 'default',
        categoryName: 'Торты',
        name: 'Малиновый чизкейк',
        price: '1299',
        priceOld: '1300',
        description: 'Популярный десерт с сырной основой и тонким коржом из песочного теста с добавлением малинового пюре. Нежное творожное суфле, дополненное тонкой бисквитной прослойкой, прекрасное сочетание для любителей классики. В составе только натуральные молочные продукты. Без добавления растительных жиров.',
        imageUrl: 'https://shop-cdn1-2.vigbo.tech/shops/218522/products/21922955/images/3-9b48c64af285a36ca7de4fbc2d490de1.jpg',
    },
};
