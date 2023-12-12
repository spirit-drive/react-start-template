import React, { FC, ReactElement } from "react";
import "./HeaderBottom.scss";
import { useTranslation } from "react-i18next";


window.addEventListener("scroll", function () {
    document.getElementById("header-nav").classList.toggle("headernav-scroll", window.scrollY > 135);
});

/**
 * Компонент нижней части шапки сайта
 */
export const HeaderBottom: FC = (): ReactElement => {
    const { t } = useTranslation();
    return (
        <div className="header-bottom sticky-top" id="header-nav">
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" id="offcanvasNavbar" tabIndex={-1} aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Catalog</h5>
                            <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">{t("navbar.home")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{t("navbar.about")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{t("navbar.contact")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{t("navbar.payment")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{t("navbar.delivery")}</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" data-bs-auto-close="outside"> {t("navbar.catalog")} </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a className="dropdown-item" href="category.html">{t("navbar.shoes")}</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="category.html">{t("navbar.jeans")}</a>
                                        </li>
                                        <li className="nav-item dropend">
                                            <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside">{t("navbar.sportswear")}</a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a className="dropdown-item" href="category.html">{t("navbar.mensSportswear")}</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="category.html">{t("navbar.womensSportswear")}</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="category.html">{t("navbar.babysSportswear")}</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="category.html">{t("navbar.coat")}</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="category.html">{t("navbar.shirts")}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cart-block">
                        <a className="btn p-1" href="#">
                            <i className="fa-solid fa-heart"></i>
                            <span className="badge text-bg-warning cart-badge bg-warning rounded-circle">3</span>
                        </a>
                        <button className="btn p-1" id="cart-open" type="button" data-bs-toggle="offcanvas2" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="badge text-bg-warning cart-badge bg-warning rounded-circle">5</span>
                        </button>
                    </div>
                </div>
              </nav>
        </div>
    );
};