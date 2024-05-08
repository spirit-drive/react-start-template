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
import { useLazyQuery } from '@apollo/client/react/hooks';
import { gql } from '@apollo/client';
import { CreateCategoryForm } from './ui/createCategory/createCategoryForm';

export const GET_OPERATIONS = gql`
  query {
    operations {
      getMany {
        data {
          ... on Cost {
            id
            name
            desc
            date
            createdAt
            updatedAt
            amount
            type
            category {
              createdAt
              id
              name
              photo
              updatedAt
            }
          }
          ... on Profit {
            id
            name
            desc
            date
            createdAt
            updatedAt
            amount
            type
            category {
              createdAt
              id
              name
              photo
              updatedAt
            }
          }
        }
        pagination {
          pageNumber
          pageSize
          total
        }
        sorting {
          field
          type
        }
      }
    }
  }
`;

export const OperationScreen: FC = () => {
  const headers = ['Название ', 'Стоимость ', 'Категория '];
  const [getMany, { data, error }] = useLazyQuery(GET_OPERATIONS);
  const [modalActive, setModalActive] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const dispatch = useDispatch();
  const [child, setChild] = useState<JSX.Element>();
  const [childUpdate, setChildUpdate] = useState<JSX.Element>();
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    getMany();

    if (data) {
      const a = JSON.stringify(data, null, 2);
      const b = JSON.parse(a);
      dispatch(profileActions.setCostList(b.operations.getMany.data));
    }
  }, [data]);

  function createOperation(): void {
    setChild(<CreateOperationForm />);
    setModalActive(true);
  }

  function createCategory(): void {
    setChildUpdate(<CreateCategoryForm />);
    setModalUpdate(true);
  }

  const className = 'layout' + theme;
  const backgroundColor = theme == 'dark' ? '#b4c4d1' : '#4682b4';

  return (
    <div>
      <OperationTable headers={headers} rows={data} />
      <Button
        primary={true}
        size={'small'}
        backgroundColor={backgroundColor}
        label="Создать операцию"
        func={createOperation}
      />
      <main className={className}>
        <Button
          primary={true}
          size={'small'}
          backgroundColor={backgroundColor}
          label="Создать категорию"
          func={createCategory}
        />
      </main>
      {modalActive ? createPortal(<Modal setActive={setModalActive}>{child}</Modal>, document.body) : ''}
      {modalUpdate ? createPortal(<Modal setActive={setModalUpdate}>{childUpdate}</Modal>, document.body) : ''}
    </div>
  );
};

export default OperationScreen;
