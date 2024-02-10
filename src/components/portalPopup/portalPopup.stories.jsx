import { PortalPopup } from "./portalPopup"


export default {
    title: "CostAccounting/PortalPopup",
    component: PortalPopup,
    description: 'PortalPopup',
}
const Template = (arg) => <PortalPopup {...arg} />
export const Default = Template.bind({})
Default.arg = {}