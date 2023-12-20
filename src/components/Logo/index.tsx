import React, { FC, SVGProps } from 'react'
import LogoImg from 'src/assets/svgs/logo.svg';
const Logo: FC<SVGProps<SVGElement>> = (props) => {
    return (
            <LogoImg {...props}/>
    )
}

export default Logo