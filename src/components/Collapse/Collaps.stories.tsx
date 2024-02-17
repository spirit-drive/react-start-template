// import { CollapseWrapper } from './CollapseWrapper';

// export default {
//     title: "CostAccounting/collapseElement",
//     component: CollapseWrapper,
//     description: 'collapse element',
//     defaultValue: false,
//     options:[true,false],
// }

// const Template = (arg) => <CollapseWrapper { ...arg}/>
// export const Default = Template.bind({})
// Default.arg = {
//     visible: true,
//     children:'Сожердимое дочернего компонента'
// }


import React from "react";
import { Collapse, collapseProps } from "./Collapse";
export default {
    title: "CostAccounting/collapseElement",
    component: Collapse,
    argTypes: {
        visible: {
            type:'boolean'
        }
    }
}
const Template = (arg: React.JSX.IntrinsicAttributes & collapseProps) => <Collapse {...arg} />
export const Default = Template.bind({})
Default.args = {
    visible: true,
    children:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus.'
}