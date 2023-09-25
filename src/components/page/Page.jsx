import './page.css';
import CartButton from '../cart-button/CartButton';

const Page = ({
    type = 'default',
    categoryName,
    name,
    price,
    priceOld,
    description,
    imageUrls,
}) => {
    return (
        <div className={`page page--${type}`}>
            <div className="page--inner">
                <div className='page--images'>
                    {
                        imageUrls.map((url) => <div
                            className='page--image'
                            style={{backgroundImage: 'url('+ url + ')'}}
                        ></div>)
                    }
                </div>
                <div className='page--content'>
                    <span className='page--category'>{categoryName}</span>
                    <div>
                        <h2 className='page--name'>{name}</h2>
                        <p className='page--description'>{description}</p>
                    </div>
                    <div className='page--footer'>
                        <div className='page--price__wrapper'>
                            <div className='page--price'>{price}&#32;руб.</div>
                            <div className='page--price__old'>{priceOld}&#32;руб.</div>
                        </div>
                        <CartButton type='disabled' count={0}>В корзину</CartButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
