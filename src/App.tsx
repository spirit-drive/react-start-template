import React, { useState } from 'react';
import { Modal } from './components/Modal/Modal';
import { Cart } from './components/Cart/Cart';
import { Delete } from './components/DeleteButton/DeleteButton';
import { FullProductInfo } from './components/FullProductInfo/FullProductInfo';
import { Layout } from './components/Layout/Layout';
import { ShortProductInfo } from './components/ShortProductInfo/ShortProductInfo';
import { OpenModal } from './components/OpenModal/OpenModal';
import { ProductList } from './components/ProductList/ProductList';

import { ThemeProvider } from './theming/ThemeProvider';
import { LangProvider } from './localization/LocalizationProvider';

const productArray = [
    {
        imageSrc: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6342648803.jpg',
        name: 'Властелин Колец. Возвращение короля',
        descrContent: `Перед вами трилогия "Властелин Колец". Своеобразная "Библия от фэнтези". Книга Книг ХХ века. Самое популярное, самое читаемое, самое культовое произведение ушедшего столетия. Стены Минас-Тирита, крепости Последней Надежды, осаждают бесчисленные рати Черного Властелина Саурона. Повелитель сил Тьмы уже готов праздновать победу, не замечая в упоении собственной мощью двух маленьких человечков, приближающихся к Роковой Горе, чтобы уничтожить Кольцо Всевластия. От мужества полуросликов зависит судьба всего Средиземья…`,
        category: 'Приключения',
        price: 900,
    },
    {
        imageSrc: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6342648803.jpg',
        name: 'Властелин Колец. Возвращение короля',
        descrContent: `Перед вами трилогия "Властелин Колец". Своеобразная "Библия от фэнтези". Книга Книг ХХ века. Самое популярное, самое читаемое, самое культовое произведение ушедшего столетия. Стены Минас-Тирита, крепости Последней Надежды, осаждают бесчисленные рати Черного Властелина Саурона. Повелитель сил Тьмы уже готов праздновать победу, не замечая в упоении собственной мощью двух маленьких человечков, приближающихся к Роковой Горе, чтобы уничтожить Кольцо Всевластия. От мужества полуросликов зависит судьба всего Средиземья…`,
        category: 'Приключения',
        price: 500,
    },
];

function App() {
    const exampleProduct = {
        imageSrc: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6342648803.jpg',
        name: 'Властелин Колец. Возвращение короля',
        descrContent: `Перед вами трилогия "Властелин Колец". Своеобразная "Библия от фэнтези". Книга Книг ХХ века. Самое популярное, самое читаемое, самое культовое произведение ушедшего столетия. Стены Минас-Тирита, крепости Последней Надежды, осаждают бесчисленные рати Черного Властелина Саурона. Повелитель сил Тьмы уже готов праздновать победу, не замечая в упоении собственной мощью двух маленьких человечков, приближающихся к Роковой Горе, чтобы уничтожить Кольцо Всевластия. От мужества полуросликов зависит судьба всего Средиземья…`,
        category: 'Приключения',
        price: 900,
    };

    

    const [isOpen, setIsOpen] = useState(false);

    const blabla = [
        { id: 12, name: 'Max', age: 38 },
        { id: 23, name: 'Steve', age: 73 },
    ];
    return (
        <ThemeProvider>
            <LangProvider>
                {/* <Layout /> */}
                {/* <Modal visible={true} setIsOpen={setIsOpen}>
                Hello
            </Modal> */}
                {/* <Cart count={0} disabled={false} /> */}
                {/* <Delete /> */}
                <FullProductInfo
                    imageSrc={exampleProduct.imageSrc}
                    name={exampleProduct.name}
                    descrContent={exampleProduct.descrContent}
                    category={exampleProduct.category}
                    price={exampleProduct.price}
                />

                {/* <ShortProductInfo
                    imageSrc={exampleProduct.imageSrc}
                    name={exampleProduct.name}
                    descrContent={exampleProduct.descrContent}
                    price={exampleProduct.price}
                /> */}
                {/* <OpenModal /> */}
                <ProductList items={blabla} />
            </LangProvider>
        </ThemeProvider>
    );
}

export default App;
