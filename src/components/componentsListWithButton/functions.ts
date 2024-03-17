const category: string[] = ['траты', 'Болшьшие траты', 'Очень большие траты'];
export const getRandomOperation = () => {
  const randomOperationId = Math.floor(Math.random() * category.length);
  return category[randomOperationId];
};
type randomOperation = {
  operationId: string;
  total: string;
  description: string;
  createdAt: string;
  name: string;
  category: string;
};

export const createRandomOperation = (operationDate: Date): randomOperation => {
  const operationId = operationDate.getTime().toString();
  const total = Math.floor(Math.random() * 10000).toString();
  const description = 'Сгенерированно функцией';
  const createdAt = `${operationDate.getDay()}-${operationDate.getMonth()}-${operationDate.getFullYear()}`;
  const name = 'Сгенерированное название операции';
  const category = getRandomOperation();
  return {
    operationId,
    total,
    description,
    createdAt,
    name,
    category,
  };
};
