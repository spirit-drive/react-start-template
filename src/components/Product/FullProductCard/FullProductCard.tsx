import React, { FC, ReactElement } from 'react';
import './FullProductCard.scss';
import { TypeProduct } from '../types';

export const FullProductCard: FC<TypeProduct> = ({ product }): ReactElement => {
  const { id, name, photos, desc, oldPrice, price } = product;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 mb-3">
            <div className="bg-white h-100">
              <div id="carouselExampleFade" className="carousel carousel-dark slide carousel-fade">
                <div className="carousel-inner">
                  {photos.map((photo, index) => (
                    <div key={index} className={`carousel-item${index === id - 1 ? ' active' : ''}`}>
                      <img src={require(`../photos/${photo}`)} className="d-block w-100" alt="..." />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8 mb-3">
            <div className="bg-white product-content p-3 h-100">
              <h1 className="section-title h3">
                <span>{name}</span>
              </h1>
              <div className="product-price">
                RUB {price} <small>{oldPrice}</small>
              </div>
              <p>{desc}</p>
              <div className="row mt-3">
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
              </div>
              <div className="row mt-3">
                <a href="#" className="btn btn-outline-primary add-to-cart">
                  <i className="fas fa-shopping-cart"></i> В корзину
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
