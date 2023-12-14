import React, { FC, ReactElement } from 'react';
import './FullProductDisplay.scss';
import { TypeProduct } from '../types';
import { AddToCartButton } from '../../Buttons/AddToCartButton';

/**
 * Компонент полного отображения товара. Содержит стоимость, изображения, название категории, название, описание - все это он получает из пропсов. Также пока не активная кнопка "в корзину"
 */
export const FullProductDisplay: FC<TypeProduct> = ({ product }): ReactElement => {
  const { id, name, photos, desc, createAt, oldPrice, price, category, properties } = product;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="breadcrumbs">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="category.html">{category.name}</a>
                </li>
                <li>
                  <span>{name}</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 mb-3">
            <div className="bg-white h-100">
              <div id="carouselExampleFade" className="carousel carousel-dark slide carousel-fade">
                <div className="carousel-inner">
                  {photos.map((photo, index) => (
                    <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
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
                <small>{oldPrice}</small>${price}
              </div>
              <p>{desc}</p>
              <AddToCartButton counter={0} />
              <div className="row mt-3">
                <div className="col-lg-4  mb-2">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="fa-solid fa-shield-halved"></i> Гарантия
                      </h5>
                      <ul className="list-unstyled">
                        <li>Гарантия 1 год</li>
                        <li>Возвращение товара в течение 14 дней</li>
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
                        <li>Доставка по всей стране</li>
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
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="product-content-details bg-white p-4">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="description-tab-pane"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="features-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="features-tab-pane"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Features
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="video-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#video-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="video-tab-pane"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Video
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade active show"
                  id="description-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex={0}
                >
                  {desc}
                </div>
                <div
                  className="tab-pane fade"
                  id="features-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex={0}
                >
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Colors</th>
                        <td>white, black, pink</td>
                      </tr>
                      <tr>
                        <th scope="row">Sizes</th>
                        <td>S, M, L</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade"
                  id="video-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabIndex={0}
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/I10XB1-IIbA?si=fdECpgGFeE6n_epy"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
