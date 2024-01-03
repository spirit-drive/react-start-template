import React from "react";
import {Button} from '../button/Button'
import './previewOperation.css'

export const PreviewOperation = (props)=>{
    return(

        <div className="preview-operation">
            <div className="preview-operation__info">
                <span className="preview-operation__summ">Потраченная сумма:<br/>{props.operationSumm }</span>
                <span className="preview-operation__category">Категория траты:<br/> {props.operationCalegory}</span>
                <span className="preview-operation__operationName">Название траты:<br/> {props.operationName}</span>
                <span className="preview-operation__operation-desc">Описание:<br/> {props.operationDescription}</span>
            </div>

            <Button
                operationId={props.operationId}
                position={'itemPreview'}
            >
                Подробнее
            </Button>
        </div>


    );
}