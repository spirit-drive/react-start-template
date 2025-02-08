import React, { useLayoutEffect, useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
import './css/modal.css';

export interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

type ModalState = {
    mounted: boolean;
    visible: boolean;
};

enum ModalActionType {
    show,
    hide,
    mount,
    unmount,
}

const reducer = (state: ModalState, action: ModalActionType): ModalState => {
    switch (action) {
        case ModalActionType.show:
            return { ...state, visible: true, mounted: true };
        case ModalActionType.hide:
            return { ...state, visible: false };
        case ModalActionType.mount:
            return { ...state, mounted: true };
        case ModalActionType.unmount:
            return { mounted: false, visible: false };
        default:
            return state;
    }
};

export const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
    const [state, dispatch] = useReducer(reducer, { visible: false, mounted: false });
    const modalRef = useRef<HTMLDivElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);
    // const [modalWidth, setModalWidth] = useState(300);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.target !== e.currentTarget) return;
        if (!state.visible) {
            dispatch(ModalActionType.unmount);
        }
    };

    useLayoutEffect(() => {
        if (visible) {
            dispatch(ModalActionType.mount);
            setTimeout(() => dispatch(ModalActionType.show), 1);
        } else {
            dispatch(ModalActionType.hide);
        }
    }, [visible]);

    if (!state.mounted) return null;

    return ReactDOM.createPortal(
        <div
            className={`modal-overlay ${state.visible ? 'modal-overlay--open' : 'modal-overlay--close'}`}
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className={`modal-window ${state.visible ? 'modal-window--open' : 'modal-window--close'}`}
                onClick={(e) => e.stopPropagation()}
                onTransitionEnd={handleTransitionEnd}
            >
                <button className="modal-close-button" onClick={onClose}>
                    ×
                </button>
                <div ref={modalContentRef} className="modal-content">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};