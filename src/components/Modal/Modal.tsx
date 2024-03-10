import React, { FC, useContext, useEffect, useState } from "react"
import * as styles from './styles.module.scss'
import { CloseSharp } from '@mui/icons-material'
import { ThemeContext } from "../Provider/ThemeProvider"

export interface IModal {
    visible: boolean
    onClose: () => void
    children?: React.ReactNode
}

const Modal: FC<IModal> = ({ visible, onClose, children }) => {
    const [theme, ] = useContext(ThemeContext) ;

    if (!visible) return null
    return (
            <div className={styles.background} >
                <div className={styles.modalContent} style={theme === 'dark'?{backgroundColor: 'rgb(177, 189, 230)'}:{}}>
                    <CloseSharp className={styles.buttonClose} onClick={onClose}/>
                    {children}
                </div>
            </div>
    )
}

export default Modal