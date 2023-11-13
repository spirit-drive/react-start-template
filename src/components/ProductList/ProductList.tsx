import React, { PropsWithChildren, useEffect } from 'react';
import { FullProductInfo } from '../FullProductInfo/FullProductInfo';
import type { FullProductProps } from '../FullProductInfo/FullProductInfo';
import s from '../FullProductInfo/fullProductInfo.module.scss';

// type ListProp = {
//     list: FullProductProps[];
// };

type ListType = {
    id: number;
    name: string;
    age: number;
};

type PropT = { items: ListType[] };

export const ProductList = ({ items, children }: PropsWithChildren<PropT>): React.ReactNode => {
    // const items = list.map((item: FullProductProps) => {
    //     const { imageSrc, name, descrContent, category, price } = item;
    //     return (
    //         <FullProductInfo
    //             imageSrc={imageSrc}
    //             name={name}
    //             descrContent={descrContent}
    //             category={category}
    //             price={price}
    //         >
    //             <div className={s.product}>
    //                 <div className={s.image}>
    //                     <img src={imageSrc} alt="Product Image" />
    //                 </div>
    //                 <div className={s.info}>
    //                     <div className={s.name}>{name}</div>
    //                     <div className="descr">{descrContent}</div>
    //                     <div className={s.category}>{category}</div>
    //                 </div>
    //                 <div className={s.priceBlock}>
    //                     <div className={s.price}>{price}</div>

    //                     {/* <Cart count={0} disabled={true} /> */}
    //                 </div>
    //             </div>
    //         </FullProductInfo>
    //     );
    // });

    const listItems = items.map((item) => {
        const { id, name, age } = item;
        return (
            <li key={id}>
                <h2>{name}</h2>
                <p>{age}</p>
            </li>
        );
    });

    useEffect(() => {
        console.log(items);
    });

    return <ul>{listItems}</ul>;
};
