import { ComponentsList } from "./ComponentsList";

export default {
    title: "CostAccounting/componentsList-v2",
    component: ComponentsList,
    description: 'componentsList v2',
}

const Template = (arg) => <ComponentsList {...arg} />
export const Default = Template.bind({})
Default.arg = {}