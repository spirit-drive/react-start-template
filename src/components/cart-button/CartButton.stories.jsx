import CartButton from "./CartButton";

export default {
    title: 'Cart Button',
    component: CartButton,
    argTypes: {
        type: {
            type: 'string',
            description: 'Button type',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'danger', 'success', 'disabled'],
            control: {
                type: 'select',
            },
        },
        size: {
            type: 'string',
            description: 'Button size',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
};

export const Default = {
    args: {
        children: 'В корзину',
        icon: false,
        type: 'primary',
        size: 'medium',
        count: 0,
    },
};

export const Icon = {
    args: {
        children: 'Cart Icon',
        icon: true,
        type: 'primary',
        size: 'medium',
        count: 0,
    },
};
