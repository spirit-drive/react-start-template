import { UploadFile } from 'antd';

export type ProductFormValues = {
  name: string;
  price: number;
  oldPrice?: number;
  desc?: string;
  photo: UploadFile;
  photoErrors: string;
  photoTouched: string;
  category: string;
};

export type ProductFormErrors = Record<keyof ProductFormValues, string>;

export type DdlItem = {
  value: string;
  label: string;
};
