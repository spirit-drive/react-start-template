import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Modal = ({ visible, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = null;
    };
  }, []);

  return (
    <div className="modal" hidden={!visible}>
      <div className="modal__backdrop" />
      <div className="modal__card">
        <div className="modal__card__close" />
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  visible: PropTypes.boolean,
  children: PropTypes.node,
};

export default Modal;
