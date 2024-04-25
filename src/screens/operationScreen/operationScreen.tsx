import React, { FC, useState, useEffect, useContext } from 'react';
import { Cost, createRandomOperation } from '../../objects/mainObjects';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { TestContent } from '../../components/testContent/testContent';
import { Modal } from '../../components/modal/modal';
import { OperationTable } from '../../components/table/operationTable';
import { Button } from '../../components/button/Button';
import { Operation } from '../../components/operation/operation';
import ThemeContext from 'src/components/layout/layout';
import { OperationForm } from 'src/components/operationForms/createOperationForm';
import { CreateOperationForm } from './ui/create/createOperationForm';


export const OperationScreen: FC = () => {
  const headers = ['Название', 'Стоимость', 'Категория'];

  const [modalActive, setModalActive] = useState(false);
  const [modalCost, setCost] = useState<Cost[]>([]);
  const [child, setChild] = useState<JSX.Element>();
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const cost = createRandomOperation('12.12.2023');
    setCost([...modalCost, cost]);
  }, []);

  function openOperation(): void {
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

  function createOperation(): void {
    setChild(
      <CreateOperationForm />
    );
    setModalActive(true);
  }


  const className = 'layout' + theme;
  const backgroundColor = theme == 'dark' ? '#b4c4d1' : '#4682b4';

  return (
      <div>
        <OperationTable headers={headers} rows={modalCost} />
        <Button
          primary={true}
          size={'small'}
          backgroundColor={backgroundColor}
          label={t('buttonCreateOperation')}
          func={createOperation}
        />
        <main className={className}>
          <Button
            primary={true}
            size={'small'}
            backgroundColor={backgroundColor}
            label={t('buttonShowOperation')}
            func={openOperation}
          />
        </main>

        {modalActive ? createPortal(<Modal setActive={setModalActive}>{child}</Modal>, document.body) : ''}
      </div>
  );
};

export default OperationScreen;