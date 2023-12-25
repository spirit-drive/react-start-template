import React, {FC} from "react";
import  classNames from './Header.module.css'
import clsx from "clsx";
import Logo from "src/components/Logo/Logo";

const Header: FC = () => {
    return(
        <header className={clsx(classNames.header)}>
            <Logo />
            <h2>HEADER</h2>
        </header>
    )
}

export default Header