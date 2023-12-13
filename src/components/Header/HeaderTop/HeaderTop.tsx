import React, { FC, ReactElement, useContext } from 'react';
import './HeaderTop.scss';
import { ThemeContext } from '../../../theming/ThemeProvider';
import { LangSwitcher } from '../../LangSwitcher';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

/**
 * Компонент верхней части шапки сайта
 */
export const HeaderTop: FC = (): ReactElement => {
  const [theme, setTheme] = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
  };
  const { t } = useTranslation();
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
            <div className="header-top-account d-flex justify-content-end">
              <div className="btn-group me-2">
                <ul className="theme-switcher d-flex justify-content-center">
                  <li>
                    <a onClick={changeTheme}>
                      <i className={cn('fa-regular', `${theme === 'Light' ? 'fa-moon' : 'fa-sun'}`)}></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="btn-group me-2">
                <div className="dropdown">
                  <button
                    className="btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {' '}
                    {t('account.title')}{' '}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item">{t('account.signIn')}</a>
                    </li>
                    <li>
                      <a className="dropdown-item">{t('account.signUp')}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn-group">
                <div className="dropdown">
                  <LangSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
