import React, { useState } from 'react';
import Modal from 'src/features/modal/ui/Modal';

const ModalWithButton = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal
        onClose={() => {
          setOpen(false);
        }}
        visible={open}
      >
        {text}
      </Modal>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <div className="mt-2">
        <button onClick={() => setOpen(!open)}>Open</button>
      </div>
    </>
  );
};

export default ModalWithButton;
