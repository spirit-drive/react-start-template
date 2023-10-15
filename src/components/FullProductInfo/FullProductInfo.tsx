import React from 'react';

import PropTypes from 'prop-types';
import { Cart } from '../Cart/Cart';

import './fullProductInfo.scss';

type Props = {
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
}: Props): React.ReactElement => {
    return (
        <div className="product">
            <div className="product_image">
                <img src={imageSrc} alt="Product Image" />
            </div>
            <div className="product_info">
                <div className="product_name">{name}</div>
                <div className="product_descr">{descrContent}</div>
                <div className="product_category">{category}</div>
            </div>
            <div className="product_priceBlock">
                <div className="product_price">{price}</div>

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
