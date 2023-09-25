import './modal.css';

const Modal = ({ visible = false, children }) => {
    return (
        visible && <div className="modal">
            <div className="modal--body">{children}</div>
        </div>
    );
};

export default Modal;
