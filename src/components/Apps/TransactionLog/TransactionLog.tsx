import React, { FC, ReactElement } from 'react';
import { Layout } from "../../Layout";
import { OperationList } from "../../Operation";

const operations = [
  {
    id: 1,
    name: "Хлеб",
    desc: 'Магазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин Пятёрочка',
    amount: 56,
    category: { id: 1, name: 'Продукты', photo: '' },
    type: 'Расход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 2,
    name: "Молоко",
    desc: 'Магазин Магнит',
    amount: 44,
    category: { id: 1, name: 'Продукты', photo: '' },
    type: 'Расход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 3,
    name: "Получка",
    desc: 'Получил аванс на работе',
    amount: 10000,
    category: { id: 4, name: 'Зарплата', photo: '' },
    type: 'Доход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 4,
    name: "92-ой бензин",
    desc: 'Газпромнефть',
    amount: 1000,
    category: { id: 2, name: 'Бензин', photo: '' },
    type: 'Расход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 5,
    name: "В Кино ходил",
    desc: 'Звёздные войны',
    amount: 145,
    category: { id: 3, name: 'Развлечения', photo: '' },
    type: 'Расход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 6,
    name: "Халтура",
    desc: 'Сделал сайт',
    amount: 110000,
    category: { id: 5, name: 'Халтура', photo: '' },
    type: 'Доход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 7,
    name: "Сметана",
    desc: 'Магазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин Пятёрочка',
    amount: 56,
    category: { id: 1, name: 'Продукты', photo: '' },
    type: 'Расход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 8,
    name: "Яйца",
    desc: 'Магазин Магнит',
    amount: 44,
    category: { id: 1, name: 'Продукты', photo: '' },
    type: 'Расход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 9,
    name: "Получка",
    desc: 'Получил аванс на работе',
    amount: 10000,
    category: { id: 4, name: 'Зарплата', photo: '' },
    type: 'Доход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 10,
    name: "95-ый бензин",
    desc: 'Газпромнефть',
    amount: 1000,
    category: { id: 2, name: 'Бензин', photo: '' },
    type: 'Расход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 11,
    name: "Ходил в Синема",
    desc: 'Звёздные войны',
    amount: 145,
    category: { id: 3, name: 'Развлечения', photo: '' },
    type: 'Расход',
    createAt: '01.01.2023 23:59:59'
  },
  {
    id: 12,
    name: "Приработок",
    desc: 'Сделал сайт',
    amount: 110000,
    category: { id: 5, name: 'Халтура', photo: '' },
    type: 'Доход',
    createAt: '01.01.2023 23:59:59'
  },
];

/**
 * Основной компонент приложения <b>"Журнал доходов и расходов"</b>,
 * который включает в себя все остальные компоненты
 */
export const TransactionLog: FC = (): ReactElement => {
  return (
    <Layout>
        <OperationList operations={operations}/>
    </Layout>
  );
}