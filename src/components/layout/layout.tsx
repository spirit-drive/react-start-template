import React, { FC, useState } from 'react';
import { Header } from '../header/header';
import { Button } from '../button/Button';
import { Modal } from '../modal/modal';
import './layout.css';
import { TestContent } from '../testContent/testContent';
import { createRandomOperation } from '../../objects/mainObjects';
import { OperationShort } from '../operationShort/operationShort';
import { Operation } from '../operation/operation';

export interface layoutProps {
  prop?: string;
}

export const Layout: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [child, setChild] = useState<JSX.Element>();

  function OpenModalEmpty() {
    setChild(<TestContent prop="test" />);
    setModalActive(true);
  }

  function OpenShortOperation() {
    const cost = createRandomOperation('12.12.2023');
    setChild(
      <OperationShort amount={cost.amount} categoryName={cost.category.name} description={cost.desc} name={cost.name} />
    );
    setModalActive(true);
  }

  function OpenOperation() {
    const cost = createRandomOperation('12.12.2023');
    setChild(
      <Operation
        amount={cost.amount}
        categoryName={cost.category.name}
        description={cost.desc}
        name={cost.name}
        createdAt={cost.createdAt}
      />
    );
    setModalActive(true);
  }

  return (
    <div>
      <Header />
      <main className="layout">
        <Button
          primary={true}
          size={'small'}
          backgroundColor={'#1e5987'}
          label={'Открыть модальное окно'}
          func={OpenModalEmpty}
        />
        <Button
          primary={true}
          size={'small'}
          backgroundColor={'#1e5987'}
          label={'Отобразить операцию'}
          func={OpenOperation}
        />
        <Button
          primary={true}
          size={'small'}
          backgroundColor={'#1e5987'}
          label={'Отобразить операцию (кратко)'}
          func={OpenShortOperation}
        />
      </main>

      {modalActive ? <Modal setActive={setModalActive}>{child}</Modal> : ''}
    </div>
  );
};
