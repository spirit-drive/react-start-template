import { gql } from '@apollo/client';
import { Product } from 'src/entities/Product/Model/Product';

export type ProductsData = {
  products: {
    getMany: {
      data: Product[];
    };
  };
};

export type ProductGetManyInput = {
  ids: string;
};

export type ProductAddInput = {
  input: {
    name: string;
    photo: string;
    desc: string;
    price: number;
    categoryId: string;
  };
};

export type ProductAddData = {
  id: string;
};

export const GET_PRODUCT_BY_IDS = gql`
  query GetMany($input: ProductGetManyInput) {
    products {
      getMany(input: $input) {
        data {
          id
          name
          photo
          price
          desc
        }
      }
    }
  }
`;
export const GET_PRODUCTS = gql`
  query Query($input: ProductGetManyInput) {
    products {
      getMany(input: $input) {
        data {
          id
          name
          photo
          desc
          createdAt
          updatedAt
          oldPrice
          price
          commandId
        }
        pagination {
          pageNumber
          pageSize
          total
        }
        sorting {
          type
          field
        }
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation Add($input: ProductAddInput!) {
    products {
      add(input: $input) {
        id
      }
    }
  }
`;
