import { FullOperationDisplay } from "./FullOperationDisplay";

export default {
  title: "Компоненты/Operation/FullOperationDisplay",
  component: FullOperationDisplay,
  tags: ['autodocs'],
  argTypes: {
    operation: {
      type: {},
      description: "Информация об операции",
    },
  }
}

const Template = (arg) => <FullOperationDisplay {...arg} />

export const Операция_1 = Template.bind({});
export const Операция_2 = Template.bind({});
export const Операция_3 = Template.bind({});
export const Операция_4 = Template.bind({});
export const Операция_5 = Template.bind({});
export const Операция_6 = Template.bind({});

Операция_1.args = {
    operation: {
        id: 1,
        name: "Хлеб",
        desc: "Магазин Пятёрочка",
        createAt: "01.01.2023 23:59:59",
        amount: 56,
        category: {id: 1, name: "Продукты", photo: ""},
        type: "Расход"
    },
};

Операция_2.args = {
    operation: {
        id: "2",
        name: "Молоко",
        desc: "Магазин Магнит",
        createAt: "01.01.2023",
        amount: 44,
        category: {id: "1", name: "Продукты", photo: ""},
        type: "Расход",
    },
};

Операция_3.args = {
    operation: {
        id: "3",
        name: "Аванс",
        desc: "Получил аванс на работе",
        createAt: "01.01.2023",
        amount: 10000,
        category: {id: "4", name: "Зарплата", photo: ""},
        type: "Доход"
    },
};

Операция_4.args = {
    operation: {
        id: "4",
        name: "АИ-95",
        desc: "Газпромнефть",
        createAt: "01.01.2023",
        amount: 1000,
        category: {id: "2", name: "Бензин", photo: ""},
        type: "Расход"
    },
};

Операция_5.args = {
    operation: {
        id: "5",
        name: "Кино",
        desc: "Звёздные войны",
        createAt: "01.01.2023",
        amount: 145,
        category: {id: "3", name: "Развлечения", photo: ""},
        type: "Расход"
    },
};

Операция_6.args = {
    operation: {
        id: "6",
        name: "Сделал сайт",
        desc: "Сделал сайт",
        createAt: "01.01.2023",
        amount: 110000,
        category: {id: "5", name: "Халтура", photo: ""},
        type: "Доход"
    },
};