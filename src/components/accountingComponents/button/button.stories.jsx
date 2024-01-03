import { Button } from "./Button";
import './button.css';

export default {
    title:'Accounting/Button',
    component: Button,
    argTypes:{
        position:{
            type:'string',
            description:'Варианты внешнего вида кнопки',
            defaulValue:'header-button',
            options:['header-button', 'itemPreview'],
            control:{
                type: 'radio'
            }
        }
    }
}

const ButtonTemplate = (arg) => <Button {... arg}/>

export const Default = ButtonTemplate.bind({})
Default.args = {
    children:'Йа кнопко',
    position:'header-button'
}
