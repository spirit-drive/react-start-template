import React, { useState } from 'react';
import { Button } from '../button/Button';
import { Layout } from '../lauout/Layout';
import { Portal } from '../ui/Portal/Portal';

export const PortalPopup = () => {
  const [popupVisibility, setPopupVisibility] = useState(false);
  return (
    <>
      <Layout>
        <Button onClick={() => setPopupVisibility(true)}>open Portal Popop</Button>
      </Layout>
      <Portal closePortal={() => setPopupVisibility(false)} visible={popupVisibility}>
        содержимое попап портала монтируемого в root при помощи портала(передаётся как children)
      </Portal>
    </>
  );
};
