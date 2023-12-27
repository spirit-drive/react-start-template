import type { Meta } from "@storybook/react";
import { FullOperationDisplay } from "./FullOperationDisplay";

const meta: Meta<typeof FullOperationDisplay> = {
  title: "Компоненты/Operation/FullOperationDisplay",
  component: FullOperationDisplay,
  tags: ["autodocs"],
};

export default meta;

export const Операция_1 = {
    args: {
        visible: false,
        id: 1,
        name: "Хлеб",
        desc: "Магазин Пятёрочка",
        createAt: "01.01.2023 23:59:59",
        amount: 56,
        category: {id: 1, name: "Продукты", photo: ""},
        type: "Расход",
    },
};

export const Операция_2 = {
    args: {
        visible: false,
        id: 2,
        name: "Молоко",
        desc: "Магазин Магнит",
        createAt: "01.01.2023 23:59:59",
        amount: 44,
        category: {id: 1, name: "Продукты", photo: ""},
        type: "Расход",
    },
};

export const Операция_3 = {
    args: {
        visible: false,
        id: 3,
        name: "Аванс",
        desc: "Получил аванс на работе",
        createAt: "01.01.2023 23:59:59",
        amount: 10000,
        category: {id: 4, name: "Зарплата", photo: ""},
        type: "Доход",
    },
};

export const Операция_4 = {
    args: {
        visible: false,
        id: 4,
        name: "АИ-95",
        desc: "Газпромнефть",
        createAt: "01.01.2023 23:59:59",
        amount: 1000,
        category: {id: 2, name: "Бензин", photo: ""},
        type: "Расход",
    },
};

export const Операция_5 = {
    args: {
        visible: false,
        id: 5,
        name: "Кино",
        desc: "Звёздные войны",
        createAt: "01.01.2023 23:59:59",
        amount: 145,
        category: {id: 3, name: "Развлечения", photo: ""},
        type: "Расход",
    },
};

export const Операция_6 = {
    args: {
        visible: false,
        id: 6,
        name: "Сделал сайт",
        desc: "Сделал сайт",
        createAt: "01.01.2023 23:59:59",
        amount: 110000,
        category: {id: 5, name: "Халтура", photo: ""},
        type: "Доход",
    },
};