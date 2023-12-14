export type TypeOperation = {
  /** Объект с информацией об одной операции */
  operation: {
    id: number;
    name: string;
    desc: string;
    createAt: string;
    amount: number;
    category: {
      id: number;
      name: string;
      photo: string;
    };
    type: string;
  };
};
