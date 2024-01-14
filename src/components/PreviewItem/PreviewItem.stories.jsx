import { PreviewItem } from "./PreviewItem";

export default {
    title: 'CostAccounting/ItemPreview',
    component: PreviewItem,
    description: 'Превью  операции',
}

const Template = (arg) => <PreviewItem {...arg} />
export const Default = Template.bind({})
Default.args = {
    elementData: {
        category: 'траты',
        total: '100500',
        operationName: 'покупка чупачупсов',
        date: '20-12-2012',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus laboriosam labore alias illo quia cumque dolorem ut incidunt accusamus doloremque?',
        operationId:'001'
    }

}