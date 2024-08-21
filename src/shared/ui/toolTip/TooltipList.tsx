import React, { FC } from 'react';
import { Tooltip } from './Tooltip';
import './tooltipList.scss'

export const TooltipList: FC = () => {


    return (
        <>
    <div className='tooltip-list'>
        <Tooltip text={'Подсказка 1'}>
            <div className='toolTipParent'>Текст 1</div>
        </Tooltip>
        <Tooltip text={'Подсказка 2'}>
            <div className='toolTipParent'>Текст 2</div>
        </Tooltip>
        <Tooltip text={'Подсказка 3'}>
            <div className='toolTipParent'>Текст 3</div>
        </Tooltip>
    </div>
        </>
    );
};