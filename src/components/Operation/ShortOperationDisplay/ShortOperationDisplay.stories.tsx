import type { Meta } from "@storybook/react";
import { ShortOperationDisplay } from "./ShortOperationDisplay";

const meta: Meta<typeof ShortOperationDisplay> = {
  title: "Компоненты/Operation/ShortOperationDisplay",
  component: ShortOperationDisplay,
  tags: ["autodocs"],
};

export default meta;

export const Операция_1 = {
    args: {
        operation: {
            id: 1,
            name: "Хлеб",
            desc: "Магазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин Пятёрочка",
            createAt: "01.01.2023 23:59:59",
            amount: 56,
            category: {id: 1, name: "Продукты", photo: ""},
            type: "Расход"
        },
    },
};

export const Операция_2 = {
    args: {
        operation: {
            id: 2,
            name: "Молоко",
            desc: "Магазин Магнит",
            createAt: "01.01.2023 23:59:59",
            amount: 44,
            category: {id: 1, name: "Продукты", photo: ""},
            type: "Расход",
        },
    },
};

export const Операция_3 = {
    args: {
        operation: {
            id: 3,
            name: "Аванс",
            desc: "Получил аванс на работе",
            createAt: "01.01.2023 23:59:59",
            amount: 10000,
            category: {id: 4, name: "Зарплата", photo: ""},
            type: "Доход"
        },
    },
};

export const Операция_4 = {
    args: {
        operation: {
            id: 4,
            name: "АИ-95",
            desc: "Газпромнефть",
            createAt: "01.01.2023 23:59:59",
            amount: 1000,
            category: {id: 2, name: "Бензин", photo: ""},
            type: "Расход"
        },
    },
};

export const Операция_5 = {
    args: {
        operation: {
            id: 5,
            name: "Кино",
            desc: "Звёздные войны",
            createAt: "01.01.2023 23:59:59",
            amount: 145,
            category: {id: 3, name: "Развлечения", photo: ""},
            type: "Расход"
        },
    },
};

export const Операция_6 = {
    args: {
        operation: {
            id: 6,
            name: "Сделал сайт",
            desc: "Сделал сайт",
            createAt: "01.01.2023 23:59:59",
            amount: 110000,
            category: {id: 5, name: "Халтура", photo: ""},
            type: "Доход"
        },
    },
};