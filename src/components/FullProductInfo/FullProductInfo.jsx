import React from 'react';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';
import { Cart } from '../Cart/Cart';

const ProductInfo = styled.div`
    /* width: 400px; */
    margin: 40px;
    padding: 20px;
    border: 1px solid rgba(255, 133, 139, 1);
    background-color: rgba(255, 133, 139, 0.1);
    border-radius: 20px;

    display: flex;
`;

const DescrBlock = styled.div`
    width: 50%;
    line-height: 26px;
    text-align: left;
`;

const ImageBlock = styled.div`
    width: 200px;
    margin-right: 35px;
    & img {
        width: 100%;
    }
`;

const PriceBlock = styled.div`
    width: 200px;
    margin-left: auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
`;

const Category = styled.div`
    margin-top: 15px;
    font-weight: 700;
`;

const Price = styled.div`
    font-size: 26px;
    font-weight: 700;
`;

const Name = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const FullProductInfo = ({
    imageSrc = 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6342648803.jpg',
    name = 'Властелин Колец. Возвращение короля',
    descrContent = `Перед вами трилогия "Властелин Колец". Своеобразная "Библия от фэнтези". Книга Книг ХХ века. Самое популярное, самое читаемое, самое культовое произведение ушедшего столетия. Стены Минас-Тирита, крепости Последней Надежды, осаждают бесчисленные рати Черного Властелина Саурона. Повелитель сил Тьмы уже готов праздновать победу, не замечая в упоении собственной мощью двух маленьких человечков, приближающихся к Роковой Горе, чтобы уничтожить Кольцо Всевластия. От мужества полуросликов зависит судьба всего Средиземья…`,
    category = 'Приключения',
    price = 900,
}) => {
    return (
        <ProductInfo>
            <ImageBlock className="image">
                <img src={imageSrc} alt="Product Image" />
            </ImageBlock>
            <DescrBlock>
                <Name className="name">{name}</Name>
                <div className="descr">{descrContent}</div>
                <Category className="category">{category}</Category>
            </DescrBlock>
            <PriceBlock>
                <Price>{price}</Price>

                <Cart disabled={true} />
            </PriceBlock>
        </ProductInfo>
    );
};

FullProductInfo.propTypes = {
    /** Image source */
    imageSrc: PropTypes.string,
    /** Product name */
    name: PropTypes.string,
    /** Short product description */
    descrContent: PropTypes.string,
    /** Category */
    category: PropTypes.string,
    /** Product price */
    price: PropTypes.number,
};
