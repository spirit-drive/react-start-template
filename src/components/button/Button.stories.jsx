import { Button } from './Button';


export default {
    title: 'CostAccounting/UI/Button',
    component: Button,
    description: 'Варианты внешнего вида кнопки',
    defaulValue: 'header',
    options: ['header', 'footer'],
    control: {
        type:'radio'
    }
}

const ButtonTemplate = (arg) => <Button { ...arg } />

export const Default = ButtonTemplate.bind({})
Default.args = {
    children: "Button",
    type:'header'
}
export const WithoutType = ButtonTemplate.bind({})
    WithoutType.args = {
        children: "Button",
    }