import { PopupWithButton } from "./PopupWithButton";

export default {
    title: 'CostAccounting/UI/PopUpWithButton',
    component: PopupWithButton,

}
const Template = (arg) => <PopupWithButton {...arg} />
export const Default = Template.bind({})
Default.arg = {
    visible: false,
    children:'asdaa'
}