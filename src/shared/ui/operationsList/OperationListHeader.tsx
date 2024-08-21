import React, { ReactNode, FC } from "react";
import { Box, Typography } from "@mui/material";
import { IRootState } from 'src/store/store';
import { useSelector } from 'react-redux';

interface Props {
    label?: string
    children: React.ReactNode;
  }

const OperationsListHeader:FC<Props> = ({label, children }) => {
    const user = useSelector((state: IRootState) => state.main.user)
    return (
        <Box className="operationsheader df jsb">
            <Typography sx={{ pr: 2 }} variant="h6" component="h2"> {label}</Typography>
            {(user && user.email === "admin@yan.ru") ?
                    children : 
            null}
        </Box>
    );
};
//vitala@mail.ru

export default OperationsListHeader;
