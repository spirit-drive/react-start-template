import React from 'react';
import s from './UserModal.module.sass';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const UserModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <h2>User Modal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea quae quas rerum sequi? Aliquam amet commodi dignissimos, eos expedita id ipsa, natus nesciunt optio perferendis, ratione repudiandae saepe vel?</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserModal;
