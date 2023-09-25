import './logo.css';
import LogoSvg from '../../logo.svg';
import LogoInvertedSvg from '../../logo-inverted.svg';

const Logo = ({
    size = 'small',
    type = 'default',
}) => {
    return (
        <div className="logo">
            <div className="logo--inner">
                {type === 'inverted'
                    ? <img className={`logo--inner__img logo--inner__img-${size}`} src={LogoInvertedSvg} alt="logo" />
                    : <img className={`logo--inner__img logo--inner__img-${size}`} src={LogoSvg} alt="logo" />}
            </div>
        </div>
    );
};

export default Logo;
