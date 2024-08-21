export interface CategoryType {
    id: string;
    name: string;
    photo?: string;
};


export interface Category extends CategoryType {
    commandId? :string
    createdAt?: Date
    updatedAt?: Date
}

interface IOperation {
    commandId: string;
    createdAt: Date;
    updatedAt: Date;
    id: string;
    name: string;
    desc?: string;
    date: Date;
    amount: number | null;
    category: Category;
}
interface ICost extends IOperation {
    type: 'Cost';
}
interface IProfit extends IOperation {
    type: 'Profit';
}

export type Operation = ICost | IProfit;



export interface ShortOperationTypes {
    id:number
    amount: number;
    categoryName: string;
    name: string;
    shortDescription?: string | null;
}