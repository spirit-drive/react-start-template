import { Header } from "./Header";
import '../../i18n'
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { Suspense } from "react";

export default {
    title: 'CostAccounting/Header',
    component: Header,
    description: 'header'

}
const Template = (arg) =>
<ThemeProvider>

        <LanguageProvider>
                <Header {...arg} />
            </LanguageProvider>

</ThemeProvider>



export const Default = Template.bind({})
