import './header.css';

const Header = ({ children }) => {
    return (
        <div className="header">
            <div className="header--inner">{children}</div>
        </div>
    );
};

export default Header;
