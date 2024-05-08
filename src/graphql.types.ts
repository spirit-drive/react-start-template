import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type AuthResult = {
  __typename?: 'AuthResult';
  profile: Profile;
  token: Scalars['String']['output'];
};

export type CategoriesResponse = {
  __typename?: 'CategoriesResponse';
  data?: Maybe<Array<Maybe<Category>>>;
  pagination: ResponsePagination;
  sorting: Sorting;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type CategoryAddInput = {
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryGetManyInput = {
  createdAt?: InputMaybe<DateRange>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  sorting?: InputMaybe<SortingInput>;
  updatedAt?: InputMaybe<DateRange>;
};

export type CategoryMutations = {
  __typename?: 'CategoryMutations';
  add: Category;
  patch: Category;
  put: Category;
  remove: Category;
};

export type CategoryMutationsAddArgs = {
  input: CategoryAddInput;
};

export type CategoryMutationsPatchArgs = {
  id: Scalars['ID']['input'];
  input: CategoryUpdateInput;
};

export type CategoryMutationsPutArgs = {
  id: Scalars['ID']['input'];
  input: CategoryUpdateInput;
};

export type CategoryMutationsRemoveArgs = {
  id: Scalars['ID']['input'];
};

export type CategoryQueries = {
  __typename?: 'CategoryQueries';
  getMany: CategoriesResponse;
  getOne?: Maybe<Category>;
};

export type CategoryQueriesGetManyArgs = {
  input?: InputMaybe<CategoryGetManyInput>;
};

export type CategoryQueriesGetOneArgs = {
  id: Scalars['ID']['input'];
};

export type CategoryUpdateInput = {
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
};

export type ChangePasswordBody = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ChangePasswordResult = {
  __typename?: 'ChangePasswordResult';
  success: Scalars['Boolean']['output'];
};

export type Cost = {
  __typename?: 'Cost';
  amount: Scalars['Float']['output'];
  category: Category;
  createdAt: Scalars['Date']['output'];
  date: Scalars['Date']['output'];
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type DateRange = {
  gte?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  categories: CategoryMutations;
  operations: OperationMutations;
  orders: OrderMutations;
  products: ProductMutations;
  profile?: Maybe<ProfileMutations>;
};

export type Operation = Cost | Profit;

export type OperationAddInput = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  date: Scalars['Date']['input'];
  desc?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: OperationType;
};

export type OperationGetManyInput = {
  categoryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<DateRange>;
  date?: InputMaybe<DateRange>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  sorting?: InputMaybe<SortingInput>;
  type?: InputMaybe<OperationType>;
  updatedAt?: InputMaybe<DateRange>;
};

export type OperationMutations = {
  __typename?: 'OperationMutations';
  add: Operation;
  patch: Operation;
  put: Operation;
  remove: Operation;
};

export type OperationMutationsAddArgs = {
  input: OperationAddInput;
};

export type OperationMutationsPatchArgs = {
  id: Scalars['ID']['input'];
  input: OperationUpdateInput;
};

export type OperationMutationsPutArgs = {
  id: Scalars['ID']['input'];
  input: OperationUpdateInput;
};

export type OperationMutationsRemoveArgs = {
  id: Scalars['ID']['input'];
};

export type OperationQueries = {
  __typename?: 'OperationQueries';
  getMany: OperationsResponse;
  getOne?: Maybe<Operation>;
};

export type OperationQueriesGetManyArgs = {
  input?: InputMaybe<OperationGetManyInput>;
};

export type OperationQueriesGetOneArgs = {
  id: Scalars['ID']['input'];
};

export enum OperationType {
  Cost = 'Cost',
  Profit = 'Profit',
}

export type OperationUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<OperationType>;
};

export type OperationsResponse = {
  __typename?: 'OperationsResponse';
  data?: Maybe<Array<Maybe<Operation>>>;
  pagination: ResponsePagination;
  sorting: Sorting;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  products: Array<OrderProduct>;
  status: OrderStatus;
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type OrderAddInput = {
  products: Array<ProductInput>;
  status?: InputMaybe<OrderStatus>;
};

export type OrderGetManyInput = {
  createdAt?: InputMaybe<DateRange>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  pagination?: InputMaybe<PaginationInput>;
  productIds?: InputMaybe<Array<Scalars['String']['input']>>;
  sorting?: InputMaybe<SortingInput>;
  status?: InputMaybe<OrderStatus>;
  updatedAt?: InputMaybe<DateRange>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type OrderMutations = {
  __typename?: 'OrderMutations';
  add: Order;
  patch: Order;
  put: Order;
  remove: Order;
};

export type OrderMutationsAddArgs = {
  input: OrderAddInput;
};

export type OrderMutationsPatchArgs = {
  id: Scalars['ID']['input'];
  input: OrderUpdateInput;
};

export type OrderMutationsPutArgs = {
  id: Scalars['ID']['input'];
  input: OrderUpdateInput;
};

export type OrderMutationsRemoveArgs = {
  id: Scalars['ID']['input'];
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  _id: Scalars['ID']['output'];
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type OrderQueries = {
  __typename?: 'OrderQueries';
  getMany: OrdersResponse;
  getOne?: Maybe<Order>;
};

export type OrderQueriesGetManyArgs = {
  input?: InputMaybe<OrderGetManyInput>;
};

export type OrderQueriesGetOneArgs = {
  id: Scalars['ID']['input'];
};

export enum OrderStatus {
  Delivered = 'Delivered',
  InTransit = 'InTransit',
  OrderCancelled = 'OrderCancelled',
  Packaging = 'Packaging',
  PendingConfirmation = 'PendingConfirmation',
  Processing = 'Processing',
  ReturnRequested = 'ReturnRequested',
  WaitingForDelivery = 'WaitingForDelivery',
}

export type OrderUpdateInput = {
  products?: InputMaybe<Array<ProductInput>>;
  status?: InputMaybe<OrderStatus>;
};

export type OrdersResponse = {
  __typename?: 'OrdersResponse';
  data?: Maybe<Array<Maybe<Order>>>;
  pagination: ResponsePagination;
  sorting: Sorting;
};

export type Pagination = {
  __typename?: 'Pagination';
  pageNumber: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
};

export type PaginationInput = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type Product = {
  __typename?: 'Product';
  category: Category;
  createdAt: Scalars['Date']['output'];
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  oldPrice?: Maybe<Scalars['Float']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ProductAddInput = {
  categoryId: Scalars['String']['input'];
  desc?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
};

export type ProductGetManyInput = {
  categoryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<DateRange>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  sorting?: InputMaybe<SortingInput>;
  updatedAt?: InputMaybe<DateRange>;
};

export type ProductInput = {
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type ProductMutations = {
  __typename?: 'ProductMutations';
  add: Product;
  patch: Product;
  put: Product;
  remove: Product;
};

export type ProductMutationsAddArgs = {
  input: ProductAddInput;
};

export type ProductMutationsPatchArgs = {
  id: Scalars['ID']['input'];
  input: ProductUpdateInput;
};

export type ProductMutationsPutArgs = {
  id: Scalars['ID']['input'];
  input: ProductUpdateInput;
};

export type ProductMutationsRemoveArgs = {
  id: Scalars['ID']['input'];
};

export type ProductQueries = {
  __typename?: 'ProductQueries';
  getMany: ProductsResponse;
  getOne?: Maybe<Product>;
};

export type ProductQueriesGetManyArgs = {
  input?: InputMaybe<ProductGetManyInput>;
};

export type ProductQueriesGetOneArgs = {
  id: Scalars['ID']['input'];
};

export type ProductUpdateInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  oldPrice?: InputMaybe<Scalars['Float']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductsResponse = {
  __typename?: 'ProductsResponse';
  data?: Maybe<Array<Maybe<Product>>>;
  pagination: ResponsePagination;
  sorting: Sorting;
};

export type Profile = {
  __typename?: 'Profile';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  signUpDate: Scalars['Date']['output'];
};

export type ProfileMutations = {
  __typename?: 'ProfileMutations';
  password?: Maybe<ProfilePasswordMutations>;
  signin: AuthResult;
  signup: AuthResult;
  update: Profile;
};

export type ProfileMutationsSigninArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ProfileMutationsSignupArgs = {
  commandId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type ProfileMutationsUpdateArgs = {
  input: UpdateProfileInput;
};

export type ProfilePasswordMutations = {
  __typename?: 'ProfilePasswordMutations';
  change: ResetPassword;
};

export type ProfilePasswordMutationsChangeArgs = {
  input: ChangePasswordInput;
};

export type Profit = {
  __typename?: 'Profit';
  amount: Scalars['Float']['output'];
  category: Category;
  createdAt: Scalars['Date']['output'];
  date: Scalars['Date']['output'];
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Query = {
  __typename?: 'Query';
  categories: CategoryQueries;
  operations: OperationQueries;
  orders: OrderQueries;
  products: ProductQueries;
  profile?: Maybe<Profile>;
};

export type ResetPassword = {
  __typename?: 'ResetPassword';
  success: Scalars['Boolean']['output'];
};

export type ResponsePagination = {
  __typename?: 'ResponsePagination';
  pageNumber: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SignInBody = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpBody = {
  commandId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum SortField {
  CreatedAt = 'createdAt',
  Date = 'date',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export enum SortType {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Sorting = {
  __typename?: 'Sorting';
  field: SortField;
  type: SortType;
};

export type SortingInput = {
  field?: InputMaybe<SortField>;
  type?: InputMaybe<SortType>;
};

export type StandardParams = {
  __typename?: 'StandardParams';
  id: Scalars['ID']['output'];
};

export type UpdateProfileBody = {
  name: Scalars['String']['input'];
};

export type UpdateProfileInput = {
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};
