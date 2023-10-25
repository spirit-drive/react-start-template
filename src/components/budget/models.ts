export enum NamesColumns {
  Name = 'Название',
  Category = 'Категория',
  Description = 'Описание',
  Amount = 'Сумма',
  Details = 'Подробно',
}

export enum TBudgetType {
  Income = 'Доходы',
  Outlay = 'Расходы',
}

export type TTableList = {
  id: number;
  name: string[];
};

export type TBudget = TBudgetType | TTableList;
