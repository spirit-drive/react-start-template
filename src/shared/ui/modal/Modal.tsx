import React, { FC, useContext } from 'react';
import { createPortal } from "react-dom";
import { Box, Typography, IconButton} from '@mui/material';
import './modal.scss';
import CloseIcon from '@mui/icons-material/Close';
//import { ModalProps } from './ModalTypes';
import { ReactNode } from "react";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'src/app/context/ThemeContext';
interface ModalProps {
    children?: string | ReactNode | null;
    label?: string
}


// eslint-disable-next-line react/prop-types
export const Modal: FC<ModalProps> = ({ children, label }) => {
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate();
    const close = () => {
        navigate(-1);
      }
    return (
        <>
             {createPortal(
                <div
                    className='modalBackground'
                >
                    <div className={"modal " + theme}>
                    <Box className='df fc modal__header'>
                            <Typography sx={{ pr: 2 }} variant="h6" component="h2"> {label}</Typography>
                        <IconButton onClick={close}><CloseIcon /></IconButton>
                    </Box>
                        <Box className='modal__content'>{children}</Box>
                    </div>
                </div>
                , document.body)}
        </>
    );
};
