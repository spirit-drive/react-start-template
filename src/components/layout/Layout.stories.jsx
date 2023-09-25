import Logo from '../logo/Logo';
import Header from '../header/Header';
import Layout from './Layout';

export default {
    title: 'Layout',
    component: Layout,
};

export const Default = {
    args: {
        children: <Header>
            <Logo />
        </Header>,
    },
};
