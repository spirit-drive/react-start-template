import {DetailsOperation} from './DetailsOperation';
import './detailsOperation.module.scss';

export default{
    title:'Accounting/detailsOperation',
    component: DetailsOperation,
    argTypes:{
        operationCalegory:{
            type:'string',
            name:'Категория операции',
            description:'Категория операции',
            defaulValue:'Покупка'
        },
        operationName:{
            type:'string',
            name:'Название операции',
            description:'Название операции',
            defaulValue:'Купил чупачупс'
        },
        operationSumm:{
            type:'string',
            name:'Стоимость операции',
            description:'Стоимость операции',
            defaulValue:'1000 рэ'
        },
        operationDescription:{
            type:'string',
            name:'Описание операции',
            description:'Описание операции',
            defaulValue:'зашёл в бар дальше всё как в тумане. Чупачупсы покупались один за другим'
        }
    }
}
const DetailsOperationTemplate = (arg)=> <DetailsOperation {... arg} />
export const Default = DetailsOperationTemplate.bind({})
Default.args ={
    operationCalegory:'Покупка',
    operationName:'Купил чупачупс',
    operationSumm:'1000 рэ',
    operationDescription:'зашёл в бар дальше всё как в тумане. Чупачупсы покупались один за другим'
}
// operationCalegory
// operationName
// operationSumm
// operationDescription