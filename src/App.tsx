import React, { useState } from 'react';
import './App.css';
import { Modal } from './components/Modal/Modal';
import { Cart } from './components/Cart/Cart';
import { Delete } from './components/DeleteButton/DeleteButton';
import { FullProductInfo } from './components/FullProductInfo/FullProductInfo';
import { Layout } from './components/Layout/Layout';
import { ShortProductInfo } from './components/ShortProductInfo/ShortProductInfo';
import { OpenModal } from './components/OpenModal/OpenModal';

function App() {
    const exampleProduct = {
        imageSrc: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6342648803.jpg',
        name: 'Властелин Колец. Возвращение короля',
        descrContent: `Перед вами трилогия "Властелин Колец". Своеобразная "Библия от фэнтези". Книга Книг ХХ века. Самое популярное, самое читаемое, самое культовое произведение ушедшего столетия. Стены Минас-Тирита, крепости Последней Надежды, осаждают бесчисленные рати Черного Властелина Саурона. Повелитель сил Тьмы уже готов праздновать победу, не замечая в упоении собственной мощью двух маленьких человечков, приближающихся к Роковой Горе, чтобы уничтожить Кольцо Всевластия. От мужества полуросликов зависит судьба всего Средиземья…`,
        category: 'Приключения',
        price: 900,
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="App">
            {/* <Modal visible={true} setIsOpen={setIsOpen}>
                Hello
            </Modal> */}
            {/* <Cart count={0} disabled={false} /> */}
            {/* <Delete /> */}
            {/* <FullProductInfo
                imageSrc={exampleProduct.imageSrc}
                name={exampleProduct.name}
                descrContent={exampleProduct.descrContent}
                category={exampleProduct.category}
                price={exampleProduct.price}
            /> */}
            {/* <Layout /> */}
            {/* <ShortProductInfo
                imageSrc={exampleProduct.imageSrc}
                name={exampleProduct.name}
                descrContent={exampleProduct.descrContent}
                price={exampleProduct.price}
            /> */}
            <OpenModal />
        </div>
    );
}

export default App;
