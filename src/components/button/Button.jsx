import './button.css';

const Button = ({
    type = 'primary',
    size = 'medium',
    icon = false,
    children,
}) => {
    return (
        <button className={`button ${icon ? 'button--icon' : ''} button--${type} button--${size}`}>
            <span className='button--inner'>{children}</span>
        </button>
    );
};

export default Button;
