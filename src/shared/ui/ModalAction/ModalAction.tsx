import React, { FC, useState, memo } from 'react';
import { Button } from '../../button/Button';
import { Modal } from '../modal/Modal';
import './modalAction.scss'



// eslint-disable-next-line react/prop-types
const ModalAction = memo(() => {
    const [inputData, setInputData] = useState('')
    const [visible, setVisible] = useState(false)
    const changeHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
        setInputData(event.target.value as string)
    }
    const openModalHandler = () => {
        setVisible(true)
    }
    const closeModalHandler = () => {
        setVisible(false)
    }
    return (
        <>
        <div className="modalInput">
            <input value={inputData} onChange={(e) => changeHandler(e)} type="text" />
        </div>
        <Button onClick={()=>openModalHandler()} primary size={'medium'} label={'открыть модальное окно'}></Button>
        {/*<Modal close={closeModalHandler} visible={visible}>{inputData}</Modal>*/}
        
        </>
    );
});

export default ModalAction;