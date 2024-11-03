import React, { FC, ReactElement, useState } from 'react';
import './Navigation.scss';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ModalWindow } from '../ModalWindow';
import { Portal } from '../Portal';
import { ProductForm } from '../Forms/ProductForm/ui/ProductForm';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'src/features/Auth/service/user';

const navItems = [
  { name: 'navbar.home', path: '' },
  { name: 'navbar.cart', path: 'cart' },
  { name: 'navbar.category', path: 'category' },
  { name: 'navbar.register', path: 'register' },
  { name: 'navbar.account', path: 'account' },
];

export const Navigation: FC = (): ReactElement => {
  const { t } = useTranslation();
  const [showAddProduct, setAddProductModal] = useState(false);
  const isAuth = useSelector(getIsAuth);
  const openProductModal = (): void => {
    setAddProductModal(true);
  };
  const closeProductModal = (): void => {
    setAddProductModal(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            id="offcanvasNavbar"
            tabIndex={-1}
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button className="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                {navItems.map((i) => {
                  return (
                    <li key={i.name} className="nav-item">
                      <NavLink className="nav-link" to={i.path}>
                        {t(i.name)}
                      </NavLink>
                    </li>
                  );
                })}
                <li key="add" className="nav-item">
                  <a className="nav-link" title="Добавить товар" onClick={() => openProductModal()}>
                    {t('navbar.addproduct')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isAuth && showAddProduct && (
        <Portal>
          <ModalWindow visible={showAddProduct} onCloseModalWindow={closeProductModal} isAuth={isAuth}>
            <ProductForm closeModal={closeProductModal}></ProductForm>
          </ModalWindow>
        </Portal>
      )}
    </>
  );
};
