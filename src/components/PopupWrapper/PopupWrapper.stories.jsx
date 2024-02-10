import { PopupWrapper } from "./PopupWrapper";


export default {
    title: 'CostAccounting/UI/PopUp',
    component: PopupWrapper,
    argTypes: {
        visible: {
            type: 'boolean',
            description: 'Видимость попапа',
            defaultValue: false,
            options:[true,false],
            control: {
                type:'radio'
            }
        }
    }
}
const Template = (arg) => <PopupWrapper {...arg} />

export const Default = Template.bind({})
Default.args = {
    visible: false,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus.'
}