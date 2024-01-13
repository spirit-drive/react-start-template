import React from "react";
import { FC } from "react";
import styles from './PreviewItems.module.scss';
import { Button } from "../button/Button";

export type obj = {
    operationName: string,
    category: string,
    total: string,
    description: string,
    operationId :string
}

export type PreviewItemsProps = {
    elementsData:Array<obj>}

export const PreviewItems:FC<PreviewItemsProps> = ({elementsData, ...props}) => {
    console.log(elementsData)
    return (
        <>
            {elementsData.map((elementData, index) => (
                <div className={styles.item} key={index}>
                <h2 className={styles.title}><span>Название операции:</span>{elementData.operationName}</h2>
                <span className={styles.category}><span>Категория операции: </span>{elementData.category}</span>
                <span className={styles.total}><span>Стоимость операции:</span>{elementData.total}</span>
                <p className={styles.desc}><span>Краткое описание:</span>{elementData.description}</p>
                <Button
                        itemClass={`${styles.button}`}
                        buttonData = {elementData.operationId}
                    >
                    show More
                </Button>
            </div>
            ))}

        </>

    )
}