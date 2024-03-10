import React, { FC, useContext, useEffect, useState } from "react"

import { Button } from '../Button/Button';
import Modal from "../Modal/Modal";
import { ThemeContext } from "../Provider/ThemeProvider";



const ModalButton: FC<{}> = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [val, setVal] = useState<string>('')
    const handleChahge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.currentTarget.value)
    }
    const [theme, ] = useContext(ThemeContext) ;

    return (

        <div style={theme === 'dark'?{backgroundColor: 'rgb(177, 189, 230)'}:{}} >
        <input value={val} onChange={(e)=>handleChahge(e)} style={{maxWidth:'200px'}}/>
        <Button size={""} label={"Откройте модальное окно"} onClick={()=>setVisible(!visible)} />
        <Modal visible={visible} onClose={()=>setVisible(!visible)} >
            {val}
        </Modal >
        </div>
    )
}

export default ModalButton