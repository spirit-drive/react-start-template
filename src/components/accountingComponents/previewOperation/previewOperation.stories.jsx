import { PreviewOperation } from "./PreviewOperation";
import './previewOperation.css';

export default {
    title:'Accounting/PreviewItem',
    component: PreviewOperation,
    argTypes:{
        operationSumm:{
            type :'string',
            name:'Стоимость',
            description:'Стоимость операции',
            defaultValue:'100500p'
        },
        operationCalegory:{
            type :'string',
            name:'Категория',
            description:'Название категории',
            defaultValue:'Покупка'
        },
        operationName:{
            type :'string',
            name:'Название',
            description:'Купил чупачупс',
            defaultValue:'100500p'
        },
        operationDescription:{
            type :'string',
            name:'Описание ( сокращенное)',
            description:'Стоимость операции',
            defaultValue:'зашёл в бар дальше всё как в тумане. Чупачупсы покупались один за другим'
        }


    }
}

const PreviewOperationTemplate = (arg)=> <PreviewOperation {...arg}/>
export const Default = PreviewOperationTemplate.bind({})
Default.args ={
    operationSumm:'100500p',
    operationCalegory:'Покупка',
    operationName:'Купил чупачупс',
    operationDescription:'зашёл в бар дальше всё как в тумане. Чупачупсы покупались один за другим'
}
