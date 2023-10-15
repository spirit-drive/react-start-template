import React, { PropsWithChildren } from 'react';

// import PropTypes from 'prop-types';

import clsx from 'clsx';
import './modal.scss';

type Props = {
    // children: React.ReactNode;
    /** Modal visibility */
    visible: boolean;
};

/** Modal component */
export const Modal = ({ children, visible }: PropsWithChildren<Props>) => {
    return (
        <div className={clsx(['mask', visible ? 'modal--show' : 'modal--hide'])}>
            <div className="modal">
                {children}
                <button className="modal_close" />
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
