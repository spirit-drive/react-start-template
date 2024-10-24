import { gql } from '@apollo/client';
import { Category } from '../../entities/Category/Model/Category';

export type categoriesData = {
  categories: {
    getMany: {
      data: Category[];
    };
  };
};

export type CategoryAddInput = {
  input: {
    name: string;
  };
};

export type CategoryAddData = {
    categories: {
      add: {
        id: string;
        name: string;
        commandId: string;
      };
    };
};
export type CategoryUpdateInput = {
  patchId: string;
  input: {
    name: string;
  };
};

export type CategoryUpdateData = {
  categories: {
    patch: {
      id: string;
      name: string;
    };
  };
};


export const GET_CATEGORIES = gql`
  query GetMany {
    categories {
      getMany {
        data {
          id
          name
          commandId
        }
      }
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation Add($input: CategoryAddInput!) {
    categories {
      add(input: $input) {
        id
        name
        commandId
      }
    }
  }
`;

export const PUT_CATEGORY = gql`
  mutation Put($patchId: ID!, $input: CategoryUpdateInput!) {
    categories {
      patch(id: $patchId, input: $input) {
        id
        name
      }
    }
  }
`;