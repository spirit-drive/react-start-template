import React, { FC, useState, useEffect, useContext } from 'react';
import { Cost, createRandomOperation } from '../../objects/mainObjects';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { TestContent } from '../../components/testContent/testContent';
import { Modal } from '../../components/modal/modal';
import { OperationTable } from '../../components/table/operationTable';
import { Button } from '../../components/button/Button';
import { Operation } from '../../components/operation/operation';
import ThemeContext from '../../components/layout/layout';
import { CreateOperationForm } from './ui/create/createOperationForm';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions, profileSelector } from '../../entities/profileSlice';

export const OperationScreen: FC = () => {
  const headers = ['Название', 'Стоимость', 'Категория'];

  const [modalActive, setModalActive] = useState(false);
  const { costList } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const [child, setChild] = useState<JSX.Element>();
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  useEffect(() => {
    if(costList.length == 0 ) {
      const cost = createRandomOperation('12.12.2023');
      dispatch(profileActions.setCostList([...costList, cost]));
    }
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
    setChild(<CreateOperationForm />);
    setModalActive(true);
  }

  const className = 'layout' + theme;
  const backgroundColor = theme == 'dark' ? '#b4c4d1' : '#4682b4';

  return (
    <div>
      <OperationTable headers={headers} rows={costList} />
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
