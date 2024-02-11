import React, { FC, useState, useContext, createContext, useEffect } from 'react';
import '../layout/layout.css';
import { Header } from '../header/header';
import { Button } from '../button/Button';
import { Modal } from '../modal/modal';
import { TestContent } from '../testContent/testContent';
import { Cost, createRandomOperation } from '../../objects/mainObjects';
import { OperationShort } from '../operationShort/operationShort';
import { Operation } from '../operation/operation';
import { useTranslation } from "react-i18next";
import { Toggle } from '../toggles/toggle';
import OperationTable from '../table/operationTable';
import { createPortal } from 'react-dom';

export interface layoutProps {
  prop?: string;
}

const ThemeContext = createContext(null);

export const Layout: FC = () => {

  const headers = ['Название', 'Стоимость', 'Категория']

  const [modalActive, setModalActive] = useState(false);
  const [modalCost, setCost] = useState<Cost[]>([]);
  const [nameInput, setNameInput] = useState('');
  const [child, setChild] = useState<JSX.Element>();
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');

  useEffect(()=>{
    const cost = createRandomOperation('12.12.2023');
    setCost([...modalCost, cost]);
  }, [])

  function OpenModalEmpty(): void {
    setChild(<TestContent prop={nameInput} />);
    setModalActive(true);
  }

  function OpenShortOperation(): void {
    const cost = createRandomOperation('12.12.2023');
    setChild(
      <OperationShort amount={cost.amount} categoryName={cost.category.name} description={cost.desc} name={cost.name} />
    );
    setModalActive(true);
  }

  function OpenOperation(): void {
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
  
  function CreateRows() : void {
    const item = createRandomOperation(Date.now.toString());
    setCost([...modalCost, item]);    
  }

  const className = "layout" + theme;
  const backgroundColor = theme == 'dark' ? '#b4c4d1' : '#4682b4';
  const handleChange = (e : any) => {
    setTheme(
      e.target.checked
        ? 'dark'
        : 'light'
    );
  }


  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Header />
        <Toggle func = {handleChange} theme = {theme} />
        <OperationTable headers={headers} rows = {modalCost} />
        <Button
            primary={true}
            size={'small'}
             backgroundColor={backgroundColor}
            label={t("buttonCreateOperation")}
            func={CreateRows}
          />
        <main className={className}>
          {/* <div className="inputWithButton">
            <input value={nameInput} type='text' onChange={e => setNameInput(e.target.value)}></input>
            <Button
              primary={true}
              size={'small'}
              backgroundColor={backgroundColor}
              label={t("buttonModalOpen")}
              func={OpenModalEmpty}
            /></div> */}
          <Button
            primary={true}
            size={'small'}
            backgroundColor={backgroundColor}
            label={t("buttonShowOperation")}
            func={OpenOperation}
          />
          {/* <Button
            primary={true}
            size={'small'}
            backgroundColor={backgroundColor}
            label={t("buttonShowOperationShort")}
            func={OpenShortOperation}
          /> */}
        </main>

        {modalActive ?  createPortal
        (<Modal setActive={setModalActive}>{child}</Modal> ,
      document.body): ''}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
