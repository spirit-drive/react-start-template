//import type { Meta } from '@storybook/react';
import React from "react";
import { GroupCollapse } from "./GroupCollapse";

export default {
    title: "UI/GroupCollapse",
    component: GroupCollapse,
}

export const Default = {
    args: {
        isOpen: false,
        children: [
            <div>Ребенок1</div>,
            <div>Ребенок2</div>,
            <div>Ребенок3</div>,
        ],
    }
}


