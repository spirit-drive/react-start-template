import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'src/app/context/ThemeContext';
import { OperationsList } from 'src/shared/ui/operationsList/OperationsList';
import { Outlet, Link } from 'react-router-dom';

const Operations = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className={'App-body ' + theme}>
                    <OperationsList />
            </div>
            <Outlet />
        </>
    );
};

export default Operations;

