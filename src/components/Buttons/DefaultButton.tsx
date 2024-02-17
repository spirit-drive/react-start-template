import React, { FC } from "react"
import classNames from './defaultButton.module.css';

type DefaultButtonType = {
    children: React.ReactNode,
    callback?: () => void,
}

const DefaultButton: FC<DefaultButtonType> = ({children, callback}) => {
    return (
        <button className={classNames.button} onClick={callback} onSubmit={callback}>{children}</button>
    )
}

export default DefaultButton