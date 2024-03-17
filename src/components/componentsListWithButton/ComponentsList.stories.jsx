import {ComponentsList } from './ComponentsList'


export default {
    title: "CostAccounting/componentsList-v1",
    component: ComponentsList,
    description: 'componentsList v1',

}
const Template = (arg) => <ComponentsList {...arg} />
export const Default = Template.bind({})
Default.arg = {}