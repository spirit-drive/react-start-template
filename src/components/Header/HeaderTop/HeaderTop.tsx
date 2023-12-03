import React, { FC, ReactElement, useContext } from "react";
import "./HeaderTop.scss";
import { ThemeContext } from "../../../theming/ThemeProvider";
import cn from "classnames";

/**
 * Компонент верхней части шапки сайта
 */
export const HeaderTop: FC = (): ReactElement => {
    const [theme, setTheme] = useContext(ThemeContext);
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="header-top py-1">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-6 col-sm-4">
                        <div className="header-top-phone d-flex align-items-center h-100">
                            <i className="fa-solid fa-mobile-screen"></i>
                            <a className="ms-2" href="tel:+79122585567">912-258-55-67</a>
                        </div>
                    </div>

                    <div className="col-sm-4 d-none d-sm-block">
                        <ul className="social-icons d-flex justify-content-center">
                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-4">
                        <div className="header-top-account d-flex justify-content-end">
                            <div className="btn-group me-2">
                                <ul className="theme-switcher d-flex justify-content-center">
                                    <li><a onClick={changeTheme}><i className={cn("fa-regular", `${theme === "light" ? "fa-moon" : "fa-sun"}`)}></i></a></li>
                                </ul>
                            </div>
                            <div className="btn-group me-2">
                                <div className="dropdown">
                                    <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Account </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Sign In</a></li>
                                        <li><a className="dropdown-item" href="#">Sign Up</a></li>
                                    </ul>
                                    </div>
                            </div>
                            <div className="btn-group">
                                <div className="dropdown">
                                    <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> En </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Ru</a></li>
                                        <li><a className="dropdown-item" href="#">De</a></li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};