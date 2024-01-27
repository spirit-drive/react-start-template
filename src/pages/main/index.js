import Modal from 'src/components/Modal/Modal';
import { useState } from 'react';

function Main(props) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Modal active={active} setActive={setActive}>
        <div>
            sda
        </div>
      </Modal>
      <button onClick={() => setActive(true)}>open</button>
        sss
    </div>
  );
}

export default Main;
