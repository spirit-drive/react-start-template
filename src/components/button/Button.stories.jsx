import Button from './Button'
import './Button.module.scss';

export default {
    title: 'CostAccounting/Button',
    component: Button,
    description: 'Варианты внешнего вида кнопки',
    defaulValue: 'header-button',
    options: ['header', 'footer', null],
    control: {
        type:'raidio'
    }
}

const ButtonTemplate = (arg) => <Button { ...arg } />

export const Default = ButtonTemplate.bind({})
Default.args = {
    children: "Button",
    type:'header'
}