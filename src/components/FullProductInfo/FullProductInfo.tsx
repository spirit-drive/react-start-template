import React from 'react';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { Cart } from '../Cart/Cart';

import s from './fullProductInfo.module.scss';

export type FullProductProps = {
    /** Image source */
    imageSrc: string;
    /** Product name */
    name: string;
    /** Short product description */
    descrContent: string;
    /** Category */
    category: string;
    /** Product price */
    price: number;
};

export const FullProductInfo = ({
    imageSrc = 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6342648803.jpg',
    name = 'Властелин Колец. Возвращение короля',
    descrContent = `Перед вами трилогия "Властелин Колец". Своеобразная "Библия от фэнтези". Книга Книг ХХ века. Самое популярное, самое читаемое, самое культовое произведение ушедшего столетия. Стены Минас-Тирита, крепости Последней Надежды, осаждают бесчисленные рати Черного Властелина Саурона. Повелитель сил Тьмы уже готов праздновать победу, не замечая в упоении собственной мощью двух маленьких человечков, приближающихся к Роковой Горе, чтобы уничтожить Кольцо Всевластия. От мужества полуросликов зависит судьба всего Средиземья…`,
    category = 'Приключения',
    price = 900,
}: FullProductProps): React.ReactElement => {
    const { t } = useTranslation();

    return (
        <div className={s.product}>
            <div className={s.image}>
                <img src={imageSrc} alt="Product Image" />
            </div>
            <div className={s.info}>
                <div className={s.name}>{t(`product.name`)}</div>
                <div className="descr">{t(`product.descr`)}</div>
                <div className={s.category}>{t(`product.category`)}</div>
            </div>
            <div className={s.priceBlock}>
                <div className={s.price}>{price}</div>

                <Cart count={0} disabled={true} />
            </div>
        </div>
    );
};

// FullProductInfo.propTypes = {
//     /** Image source */
//     imageSrc: PropTypes.string,
//     /** Product name */
//     name: PropTypes.string,
//     /** Short product description */
//     descrContent: PropTypes.string,
//     /** Category */
//     category: PropTypes.string,
//     /** Product price */
//     price: PropTypes.number,
// };
