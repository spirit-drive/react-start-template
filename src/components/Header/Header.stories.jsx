import Header from "src/components/Header/Header";
import Logo from "src/components/Logo/Logo";

export default  {
    title: 'Header',
    component: Header,
}

const Template = (arg) => <Logo {...arg} />
export const DefaultHeader = Template.bind({})
DefaultHeader.args = {

}