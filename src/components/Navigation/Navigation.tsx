import React, { FC, ReactElement } from 'react';
import './Navigation.scss';
import { useTranslation } from 'react-i18next';

const navItems = [
  { name: 'navbar.home' },
  { name: 'navbar.notebook' },
  { name: 'navbar.phone' },
  { name: 'navbar.accessories' },
  { name: 'navbar.contact' },
];

export const Navigation: FC = (): ReactElement => {
  const { t } = useTranslation();
  return (
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
              {navItems.map(({ name }) => {
                return (
                  <li key={name} className="nav-item">
                    <a className="nav-link">{t(name)}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
