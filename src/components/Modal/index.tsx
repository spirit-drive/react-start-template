import React, { FC, useEffect, useState } from "react"
import * as styles from './styles.module.scss'
import { LuX } from 'react-icons/lu'

export interface IModal {
    visible: boolean
    onClose: () => void
    children?: React.ReactNode
}

const Modal: FC<IModal> = ({ visible, onClose, children }) => {
    if (!visible) return null
    return (
            <div className={styles.overlay}>
                <div className={styles.modalContent}>
                    <LuX className={styles.buttonClose} onClick={onClose}/>
                    {children}
                </div>
            </div>
    )
}

export default Modal