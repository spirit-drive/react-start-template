type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number;
  category: Category;
  commandId: string;
  type: 'Profit';
};