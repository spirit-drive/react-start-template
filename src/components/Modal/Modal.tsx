import React, { PropsWithChildren, memo } from 'react';

// import PropTypes from 'prop-types';

import clsx from 'clsx';
import s from './modal.module.scss';

type Props = {
    /** Modal visibility */
    visible: boolean;
    closeModal: () => void;
};

/** Modal component */
const Modal = ({ children, visible, closeModal }: PropsWithChildren<Props>): React.ReactElement => {
    return (
        <div className={clsx([s.mask, visible ? s.show : s.hide])}>
            <div className={s.modal}>
                {children}
                <button onClick={() => closeModal()} className={s.close} />
            </div>
        </div>
    );
};

export const MemoizedModal = memo(Modal);

// Modal.propTypes = {
//     /** Modal visibility */
//     visible: PropTypes.bool,
//     /** Modal content */
//     children: PropTypes.node,
// };
