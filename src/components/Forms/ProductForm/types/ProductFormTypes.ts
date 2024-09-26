export type ProductFormValues = {
  name: string;
  price: number;
  oldPrice?: number;
  desc?: string;
  photo: string;
  category: string;
};

export type ProductFormErrors = Record<keyof ProductFormValues, string>;

export type DdlItem = {
  value: string;
  label: string;
};
