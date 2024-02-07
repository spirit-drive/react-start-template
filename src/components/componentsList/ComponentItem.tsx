import React, { FC, memo, useEffect } from "react";
import cl from './ComponentsList.module.scss'
import { Button } from "../button/Button";
import cn from "classnames";
type array ={
    operationId: string,
    total: string,
    description: string,
    createdAt: string,
    name: string,
    category:string,
    onCkick?:()=>void
}
export type ItemProps = {
    item:array
}

export const CoMponentItem:FC<ItemProps> =memo(({item, ...props})=>{
    useEffect(()=>console.log('update'))
    return(
        <>
            <div className={cn(cl.item_wrapper)} key={item.operationId}>
                <span className={cn(cl.name)}> имя операции : {item.name}</span>
                <span>Дата операции : {item.createdAt}</span>
                <span>Категория : { item.category}</span>
                {item.total ?<>
                <span> Сумма операции : {item.total}</span>
                <button 
                datatype={item.operationId}
                >showMore</button>
                </>
                : <span>сгенерированная операция</span>}
            </div>
        </>
    )
})

  
 
  
