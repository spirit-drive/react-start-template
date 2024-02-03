import React from "react";


import type { Dispatch, State } from "../../components/context/ThemeContext";
import { Button } from '../button/Button';

export const ThemeControlsButton = ({handler,themeType}:{handler:Dispatch, themeType:State}) => {
    if (themeType.theme == 'light') {
        return (
            <Button
                type={"header"}
                onClick={() => handler('darck')}
            >darck theme</Button>
        )
    } else {
        return (
            <Button
                type={"header"}
                onClick={() => handler('light')}
            >light theme</Button>
        )

    }


}