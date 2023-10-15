import React from 'react';

import PropTypes from 'prop-types';
import { Cart } from '../Cart/Cart';

type Props = {
    /** Image source */
    imageSrc: string;
    /** Product name */
    name: string;
    /** Short product description */
    descrContent: string;
    /** Product price */
    price: number;
};

export const ShortProductInfo = ({
    imageSrc = 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6342648803.jpg',
    name = 'Властелин Колец. Возвращение короля',
    descrContent = `Перед вами трилогия "Властелин Колец". Своеобразная "Библия от фэнтези". Книга Книг ХХ века. Самое популярное, самое читаемое, самое культовое произведение ушедшего столетия. Стены Минас-Тирита, крепости Последней Надежды, осаждают бесчисленные рати Черного Властелина Саурона. Повелитель сил Тьмы уже готов праздновать победу, не замечая в упоении собственной мощью двух маленьких человечков, приближающихся к Роковой Горе, чтобы уничтожить Кольцо Всевластия. От мужества полуросликов зависит судьба всего Средиземья…`,
    price = 900,
}: Props): React.ReactElement => {
    function cutDescr(text: string) {
        const shortedText = text.slice(0, 100);
        return `${shortedText}...`;
    }
    const newContent = cutDescr(descrContent);

    return (
        <div className="product">
            <div className="product_image">
                <img src={imageSrc} alt="Product Image" />
            </div>
            <div className="product_info">
                <div className="product_name">{name}</div>
                <div className="descr">{cutDescr(newContent)}</div>
            </div>
            <div className="product_priceBlock">
                <div className="product_price">{price}</div>

                <Cart count={0} disabled={true} />
            </div>
        </div>
    );
};

ShortProductInfo.propTypes = {
    /** Image source */
    imageSrc: PropTypes.string,
    /** Product name */
    name: PropTypes.string,
    /** Short product description */
    descrContent: PropTypes.string,
    /** Product price */
    price: PropTypes.number,
};
