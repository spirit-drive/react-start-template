import React, { FC, ReactElement, useContext } from 'react';
import './HeaderTop.scss';
import { ThemeSwitcher } from '../../Switchers/ThemeSwitcher';
import { AccountSwitcher } from '../../Switchers/AccountSwitcher';
import { LangSwitcher } from '../../Switchers/LangSwitcher';
import cn from 'classnames';

/**
 * Компонент верхней части шапки сайта
 */
export const HeaderTop: FC = (): ReactElement => {
  return (
    <div className="header-top py-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-4">
            <div className="header-top-phone d-flex align-items-center h-100">
              <i className="fa-solid fa-mobile-screen"></i>
              <a className="ms-2" href="tel:+79122585567">
                912-258-55-67
              </a>
            </div>
          </div>

          <div className="col-sm-4 d-none d-sm-block">
            <ul className="social-icons d-flex justify-content-center">
              <li>
                <a>
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-sm-4">
            <div className="d-flex justify-content-end">
              <div className="btn-group me-2">
                <ThemeSwitcher />
              </div>
              <div className="btn-group me-2">
                <AccountSwitcher />
              </div>
              <div className="btn-group">
                <LangSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
