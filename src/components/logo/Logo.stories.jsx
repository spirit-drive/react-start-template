import Logo from './Logo';

export default {
    title: 'Logo',
    component: Logo,
    argTypes: {
        size: {
            type: 'string',
            description: 'Logo size',
            defaultValue: 'small',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
        type: {
            type: 'string',
            description: 'Logo type',
            defaultValue: 'default',
            options: ['default', 'inverted'],
            control: {
                type: 'select',
            },
        }
    }
};

export const Default = {
    args: {
        size: 'small',
        type: 'default',
    },
};
