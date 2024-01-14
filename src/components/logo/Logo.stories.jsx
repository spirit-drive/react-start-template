import { Logo } from "./Logo";

export default {
    title: 'CostAccounting/UI/Logo',
    component: Logo,
    description: 'Логотип сайта для подвала и шапки',
    defaultValue: 'header',
    options: ['header', 'footer'],
    controls: {
        type:'raidio'
    }
}

const LogoTemplate = (arg) => <Logo {...arg} />

export const Default = LogoTemplate.bind({})
Default.args = {
    type:'header'
}