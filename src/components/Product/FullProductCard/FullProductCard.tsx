import React, { FC, ReactElement, useState } from 'react';
import './FullProductCard.scss';
import { Product } from 'src/types/ProductTypes';
import { ButtonBasket } from 'src/components/Buttons/ButtonBasket/ButtonBasket';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'src/features/Auth/service/user';
import { Button } from 'src/components/Buttons/Button/Button';
import { Portal } from 'src/components/Portal';
import { ModalWindow } from 'src/components/ModalWindow';
import { ProductForm } from 'src/components/Forms/ProductForm/ui/ProductForm';
import { MdEdit } from 'react-icons/md';

export const FullProductCard: FC<Product> = (product): ReactElement => {
  const { id, name, photo, desc, oldPrice, price } = product;
  const isAuth = useSelector(getIsAuth);
  const [showAddProduct, setAddProductModal] = useState(false);
  const openProductModal = (): void => {
    setAddProductModal(true);
  };
  const closeProductModal = (): void => {
    setAddProductModal(false);
  };

  return (
    <>
      <div className="product-container container-fluid">
        <div className="row">
          <div className="card-photo col-md-5 col-lg-4">
            <div className="bg-white h-100">
              <img src={photo} />
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="bg-white product-content p-3 h-100">
              <div className="product-header">
                {isAuth && (
                  <div className="oper-btn">
                    <Button type="button" variant="clean" size="small" onClick={openProductModal}>
                      <MdEdit />
                    </Button>
                  </div>
                )}
                <h1 className="section-title h3">
                  <span>{name}</span>
                </h1>
                <div className="product-price">
                  RUB {price} <small>{oldPrice}</small>
                </div>
                <p>{desc}</p>
              </div>
              <div className="product-footer row mt-3">
                <div className="col-lg-4  mb-2">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="fa-solid fa-shield-halved"></i> Гарантия
                      </h5>
                      <ul className="list-unstyled">
                        <li>Гарантия 1 год</li>
                        <li>Возврат в течение 30 дней</li>
                        <li>Гарантия качества</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  mb-2">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="fa-solid fa-truck-fast"></i> Доставка
                      </h5>
                      <ul className="list-unstyled">
                        <li>Доставка в пункт выдачи</li>
                        <li>Доставка почтой</li>
                        <li>Самовывоз</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  mb-2">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="fa-regular fa-credit-card"></i> Оплата
                      </h5>
                      <ul className="list-unstyled">
                        <li>Наличный расчёт</li>
                        <li>Безналичный расчёт</li>
                        <li>VISA/MasterCard</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <ButtonBasket text="в корзину" product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAuth && showAddProduct && (
        <Portal>
          <ModalWindow visible={showAddProduct} onCloseModalWindow={closeProductModal} isAuth={isAuth}>
            <ProductForm id={product.id} product={product} closeModal={closeProductModal}></ProductForm>
          </ModalWindow>
        </Portal>
      )}
    </>
  );
};
