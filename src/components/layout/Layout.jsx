import './layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="layout--inner">{children}</div>
        </div>
    );
};

export default Layout;
