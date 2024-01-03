import React from "react";
import styles from  './detailsOperation.module.scss'

import cn from "clsx";

export const DetailsOperation =(props)=>{
    return(
        <div className={styles.details}>
            <h1 className={styles.subtitle}>Подробное описание операции произведенной {props.operationDate}</h1>
            <div className={`${styles.section} ${styles.type}`}>
                <span className={styles.subtitle}>Тип операции:</span>
                <span>{props.operationCalegory}</span>
            </div>
           <div className={cn(styles.section, styles.name)}>
                <span className={styles.subtitle}>Название операции:</span>
                <span>{props.operationName}</span>
            </div>
 
            <div className={cn(styles.section, styles.total)}>
                <span className={styles.subtitle}>Общая сумма операции:</span>
                <span>{props.operationSumm}</span>
            </div>
            <div className={cn(styles.section, styles.description)}>
                <span className={styles.subtitle}>Описание:</span>
                <span>{props.operationDescription}</span>
            </div>
            <button className={styles.button}> Редактировать</button>
        </div>
        
    );
}