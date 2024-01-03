import { PopupLauout } from "./PopupLayout";
import './popupLayout.css';
export default {
    title:'Accounting/PopupLayout',
    component: PopupLauout,
    argTypes:{
        visible:{
            type:'boolean',
            description:'Видимость',
            defaulValue: true,
        },
        children:{
            type:'string',
            description:'наполнение попапа',
            defaultValue:'Дефолтное наполнение попапа'
        }
    }
}
const PopupLayoutTemplate = (arg)=> <PopupLauout {... arg}/>

export const Default = PopupLayoutTemplate.bind({})

Default.args ={
    visible:true,
    children:'Дефолтное наполнение попапа'  
}