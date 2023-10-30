import React, { PropsWithChildren } from 'react';

// import PropTypes from 'prop-types';

import clsx from 'clsx';
import s from './modal.module.scss';

type Props = {
    // children: React.ReactNode;
    /** Modal visibility */
    visible: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

/** Modal component */
export const Modal = ({ children, visible, setIsOpen }: PropsWithChildren<Props>): React.ReactElement => {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={clsx([s.mask, visible ? s.show : s.hide])}>
            <div className={s.modal}>
                {children}
                <button onClick={() => closeModal()} className={s.close} />
            </div>
        </div>
    );
};

// Modal.propTypes = {
//     /** Modal visibility */
//     visible: PropTypes.bool,
//     /** Modal content */
//     children: PropTypes.node,
// };
