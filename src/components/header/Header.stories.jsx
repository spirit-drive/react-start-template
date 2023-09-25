import Logo from '../logo/Logo';
import Header from './Header';

export default {
    title: 'Header',
    component: Header,
};

export const Default = {
    args: {
        children: <Logo type='inverted'/>,
    },
};
