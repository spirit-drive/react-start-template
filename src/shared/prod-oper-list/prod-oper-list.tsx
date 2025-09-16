import React, { FC } from 'react'
import './prod-oper-list.css'
import ShortOperation, { ShortOperationProps } from '../short-operation/short-operation'
import ShortProduct, { ShortProductProps } from '../short-product/short-product'

interface IUniqueItem {
    id: string
}

export interface IShortOperationWithId extends ShortOperationProps, IUniqueItem {}
export interface IShortProductWithId extends ShortProductProps, IUniqueItem {}

interface IOperationList {
    type: 'operation',
    data: IShortOperationWithId[];
}

interface IProductList {
    type: 'product'
    data: IShortProductWithId[]
}

// export type IOperProdWithId = IShortOperationWithId | IShortProductWithId
type ProdOperListProps = IOperationList | IProductList

/**
 * Компонент списка товаров/операций в зависимости от выбранного проекта
 */
const ProdOperList: FC<ProdOperListProps> = ({ type, data }) => {
    return (
        <>
            { type === 'operation' &&
                data.map(x => (
                    <ShortOperation
                        key={x.id}
                        category={x.category}
                        description={x.description}
                        name={x.name}
                        sum={x.sum}
                    />
                ))
            }

            { type === 'product' &&
                data.map(x => (
                    <ShortProduct
                        key={x.id}
                        description={x.description}
                        image={x.image}
                        name={x.name}
                        price={x.price}
                    />
                ))
            }
        </>
    );
};

export default ProdOperList;
