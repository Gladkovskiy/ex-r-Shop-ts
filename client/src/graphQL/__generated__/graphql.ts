/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
  /** Represents NULL values */
  Void: { input: any; output: any; }
};

export type Auth_Role = {
  __typename?: 'Auth_role';
  _id: Scalars['ObjectID']['output'];
  type: Scalars['String']['output'];
};

export type Auth_User = {
  __typename?: 'Auth_user';
  _id: Scalars['ObjectID']['output'];
  createdAt: Scalars['DateTime']['output'];
  fullname: Scalars['String']['output'];
  mail: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
  tel: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Auth_User_AdminRegistration = {
  fullname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
  tel: Scalars['String']['input'];
};

export type Auth_User_LoginData = {
  __typename?: 'Auth_user_loginData';
  id?: Maybe<Scalars['ObjectID']['output']>;
  login: Scalars['String']['output'];
  role: Scalars['String']['output'];
  tel: Scalars['String']['output'];
};

export type Auth_User_NewPass = {
  _id: Scalars['ObjectID']['input'];
  pass: Scalars['String']['input'];
};

export type Auth_User_PaginationAll = {
  __typename?: 'Auth_user_paginationAll';
  count: Scalars['Int']['output'];
  users: Array<Maybe<Auth_User>>;
};

export type Auth_User_Registration = {
  fullname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  password: Scalars['String']['input'];
  tel: Scalars['String']['input'];
};

export type Auth_User_Update = {
  _id: Scalars['ObjectID']['input'];
  fullname: Scalars['String']['input'];
  mail: Scalars['String']['input'];
  tel: Scalars['String']['input'];
};

export type Complete = {
  __typename?: 'Complete';
  complete?: Maybe<Scalars['Boolean']['output']>;
};

export type DescriptionLang = {
  __typename?: 'DescriptionLang';
  en: Scalars['String']['output'];
  ru: Scalars['String']['output'];
};

export type DescriptionLang_Add = {
  en: Scalars['String']['input'];
  ru: Scalars['String']['input'];
};

export type IdResponse = {
  __typename?: 'IdResponse';
  id?: Maybe<Scalars['ObjectID']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** добавить роль */
  auth_role_add: Auth_Role;
  /** удалить роль по id */
  auth_role_delete?: Maybe<IdResponse>;
  auth_user_adminRegistration?: Maybe<Auth_User>;
  auth_user_delete?: Maybe<IdResponse>;
  auth_user_login: Auth_User_LoginData;
  auth_user_logout?: Maybe<Scalars['Void']['output']>;
  auth_user_newPass: IdResponse;
  auth_user_registration?: Maybe<Auth_User>;
  auth_user_update?: Maybe<Auth_User>;
  ayth_user_confirmRegistration?: Maybe<Auth_User>;
  products_eav_attribute_add: Products_Eav_Attribute;
  products_eav_attribute_delete?: Maybe<IdResponse>;
  products_eav_attribute_update: Products_Eav_Attribute;
  products_eav_entity_add: Products_Eav_Entity;
  products_eav_entity_delete?: Maybe<IdResponse>;
  products_eav_entity_update: Products_Eav_Entity;
  products_order_add: Products_Order;
  products_order_cancel: Products_Order;
  products_order_comlete: Products_Order;
  products_order_confirm: Products_Order;
  products_order_delete?: Maybe<IdResponse>;
  products_order_update: Products_Order;
  settings_category_add: Settings_Category;
  settings_category_delete: IdResponse;
  settings_fullTextSearch_add?: Maybe<IdResponse>;
  settings_fullTextSearch_delete?: Maybe<Complete>;
  settings_group_add: Settings_Group;
  settings_group_delete: IdResponse;
  uploadFile_add: UploadFile_Success;
  uploadFilesToGoogle: Array<Scalars['String']['output']>;
  uploadFiles_add: UploadFile_Success;
};


export type MutationAuth_Role_AddArgs = {
  role: Scalars['String']['input'];
};


export type MutationAuth_Role_DeleteArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationAuth_User_AdminRegistrationArgs = {
  user: Auth_User_AdminRegistration;
};


export type MutationAuth_User_DeleteArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationAuth_User_LoginArgs = {
  login: Scalars['String']['input'];
  pass: Scalars['String']['input'];
};


export type MutationAuth_User_NewPassArgs = {
  newPass: Auth_User_NewPass;
};


export type MutationAuth_User_RegistrationArgs = {
  user: Auth_User_Registration;
};


export type MutationAuth_User_UpdateArgs = {
  user: Auth_User_Update;
};


export type MutationAyth_User_ConfirmRegistrationArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationProducts_Eav_Attribute_AddArgs = {
  attr: Products_Eav_AttributeInput;
};


export type MutationProducts_Eav_Attribute_DeleteArgs = {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
};


export type MutationProducts_Eav_Attribute_UpdateArgs = {
  id?: InputMaybe<Scalars['ObjectID']['input']>;
  values?: InputMaybe<Array<Products_Eav_Attribute_ValuesInput>>;
};


export type MutationProducts_Eav_Entity_AddArgs = {
  product: Products_Eav_Entity_Input;
};


export type MutationProducts_Eav_Entity_DeleteArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationProducts_Eav_Entity_UpdateArgs = {
  product: Products_Eav_Entity_Update_Input;
};


export type MutationProducts_Order_AddArgs = {
  order: Products_Order_Input;
};


export type MutationProducts_Order_CancelArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationProducts_Order_ComleteArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationProducts_Order_ConfirmArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationProducts_Order_DeleteArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationProducts_Order_UpdateArgs = {
  id: Scalars['ObjectID']['input'];
  order: Products_Order_Input;
};


export type MutationSettings_Category_AddArgs = {
  category: Settings_Category_Add;
};


export type MutationSettings_Category_DeleteArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationSettings_FullTextSearch_AddArgs = {
  text: Scalars['String']['input'];
};


export type MutationSettings_FullTextSearch_DeleteArgs = {
  text: Scalars['String']['input'];
};


export type MutationSettings_Group_AddArgs = {
  group: Settings_Group_Add;
};


export type MutationSettings_Group_DeleteArgs = {
  id: Scalars['ObjectID']['input'];
};


export type MutationUploadFile_AddArgs = {
  file: UploadFile_Add;
};


export type MutationUploadFilesToGoogleArgs = {
  files: Array<Scalars['Upload']['input']>;
  path: SaveType;
};


export type MutationUploadFiles_AddArgs = {
  files: Array<Scalars['Upload']['input']>;
  path: Array<Scalars['String']['input']>;
};

export enum OrderStatus {
  Cancel = 'cancel',
  Complete = 'complete',
  Confirm = 'confirm',
  New = 'new'
}

export type Pagination_Input = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export enum ProductSort {
  Discount = 'discount',
  DownPrice = 'downPrice',
  Rating = 'rating',
  UpPrice = 'upPrice'
}

export type Product_Order_Product_Input = {
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  product_id: Scalars['ObjectID']['input'];
  quantity: Scalars['Int']['input'];
};

export type Products_EavValue_FiltersInput = {
  filters: Array<InputMaybe<Products_FiltersInput>>;
  group: Scalars['String']['input'];
  price?: InputMaybe<Products_PriceInput>;
};

export type Products_EavValue_ProductsInput = {
  filters: Array<InputMaybe<Products_FiltersInput>>;
  group: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  price?: InputMaybe<Products_PriceInput>;
  sort: ProductSort;
};

export type Products_Eav_Attribute = {
  __typename?: 'Products_eav_attribute';
  _id: Scalars['ObjectID']['output'];
  attr_name: Scalars['String']['output'];
  description: DescriptionLang;
  group: Scalars['String']['output'];
  values?: Maybe<Array<Products_Eav_Attribute_Values>>;
};

export type Products_Eav_AttributeInput = {
  attr_name: Scalars['String']['input'];
  description: DescriptionLang_Add;
  group: Scalars['String']['input'];
  values?: InputMaybe<Array<Products_Eav_Attribute_ValuesInput>>;
};

export type Products_Eav_Attribute_Values = {
  __typename?: 'Products_eav_attribute_values';
  description: DescriptionLang;
  value: Scalars['String']['output'];
};

export type Products_Eav_Attribute_ValuesInput = {
  description: DescriptionLang_Add;
  value: Scalars['String']['input'];
};

export type Products_Eav_Entity = {
  __typename?: 'Products_eav_entity';
  _id: Scalars['ObjectID']['output'];
  description: DescriptionLang;
  discount: Products_Eav_Entity_Discount;
  group: Scalars['String']['output'];
  img_urls: Array<Scalars['String']['output']>;
  name: DescriptionLang;
  quantity: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  searchTag: Scalars['String']['output'];
};

export type Products_Eav_Entity_Discount = {
  __typename?: 'Products_eav_entity_discount';
  active: Scalars['Boolean']['output'];
  oldPrice: Scalars['String']['output'];
};

export type Products_Eav_Entity_FilterValue_Input = {
  description?: InputMaybe<DescriptionLang_Add>;
  value: Scalars['String']['input'];
};

export type Products_Eav_Entity_Filter_Input = {
  attr_description: DescriptionLang_Add;
  attr_name: Scalars['String']['input'];
  attr_value: Products_Eav_Entity_FilterValue_Input;
};

export type Products_Eav_Entity_Get = {
  __typename?: 'Products_eav_entity_get';
  price: Scalars['Int']['output'];
  product: Products_Eav_Entity;
};

export type Products_Eav_Entity_GlobalSearchResult = {
  __typename?: 'Products_eav_entity_globalSearchResult';
  groups: Array<Products_Eav_Entity_GroupsResult>;
  products: Array<Products_Eav_Value_ProductsResult>;
  totalProducts: Scalars['Int']['output'];
};

export type Products_Eav_Entity_GroupsResult = {
  __typename?: 'Products_eav_entity_groupsResult';
  description: DescriptionLang;
  type: Scalars['String']['output'];
};

export type Products_Eav_Entity_Input = {
  description: DescriptionLang_Add;
  filters: Array<Products_Eav_Entity_Filter_Input>;
  group: Scalars['String']['input'];
  img_urls?: InputMaybe<Array<Scalars['String']['input']>>;
  name: DescriptionLang_Add;
  quantity: Scalars['Int']['input'];
  searchTag: Scalars['String']['input'];
};

export type Products_Eav_Entity_ProductsResult = {
  __typename?: 'Products_eav_entity_productsResult';
  products: Array<Maybe<Products_Eav_Value_ProductsResult>>;
  totalProducts: Scalars['Int']['output'];
};

export type Products_Eav_Entity_SearchProducts_Input = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  searchText: Scalars['String']['input'];
  sort: ProductSort;
};

export type Products_Eav_Entity_Update_Input = {
  active: Scalars['Boolean']['input'];
  id: Scalars['ObjectID']['input'];
  newPrice: Scalars['String']['input'];
  oldPrice: Scalars['String']['input'];
  /** "+" add quantity, "-" sub quantity */
  quantity: Scalars['Int']['input'];
};

export type Products_Eav_Value = {
  __typename?: 'Products_eav_value';
  _id: Scalars['ObjectID']['output'];
  attr_description: DescriptionLang;
  attr_name: Scalars['String']['output'];
  attr_value: Products_Eav_Attribute_Values;
  group: Scalars['String']['output'];
  product_id: Scalars['ObjectID']['output'];
};

export type Products_Eav_Value_Filter = {
  __typename?: 'Products_eav_value_filter';
  attr: Products_Eav_Value_FilterName;
  values: Array<Products_Eav_Value_FilterData>;
};

export type Products_Eav_Value_FilterData = {
  __typename?: 'Products_eav_value_filterData';
  attr_value: Products_Eav_Value_FilterValue;
  count: Scalars['Int']['output'];
};

export type Products_Eav_Value_FilterName = {
  __typename?: 'Products_eav_value_filterName';
  description: DescriptionLang;
  name: Scalars['String']['output'];
};

export type Products_Eav_Value_FilterValue = {
  __typename?: 'Products_eav_value_filterValue';
  description: DescriptionLang;
  value: Scalars['String']['output'];
};

export type Products_Eav_Value_FiltersResult = {
  __typename?: 'Products_eav_value_filtersResult';
  filters: Array<Products_Eav_Value_Filter>;
  price?: Maybe<Products_Eav_Value_Price>;
};

export type Products_Eav_Value_Price = {
  __typename?: 'Products_eav_value_price';
  max: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
};

export type Products_Eav_Value_ProductsFinelResult = {
  __typename?: 'Products_eav_value_productsFinelResult';
  products: Array<Products_Eav_Value_ProductsResult>;
  totalProducts: Scalars['Int']['output'];
};

export type Products_Eav_Value_ProductsResult = {
  __typename?: 'Products_eav_value_productsResult';
  _id: Scalars['ObjectID']['output'];
  description: DescriptionLang;
  discount: Products_Eav_Entity_Discount;
  group: Scalars['String']['output'];
  img_urls: Array<Scalars['String']['output']>;
  name: DescriptionLang;
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
};

export type Products_FiltersInput = {
  attr_name: Scalars['String']['input'];
  attr_value: Scalars['String']['input'];
};

export type Products_Order = {
  __typename?: 'Products_order';
  _id: Scalars['ObjectID']['output'];
  adress: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  fio: Scalars['String']['output'];
  orderNumber: Scalars['Int']['output'];
  products: Array<Products_Order_Product>;
  status: OrderStatus;
  tel: Scalars['String']['output'];
  totalPrice: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Products_Order_Cancel_Input = {
  id: Scalars['ObjectID']['input'];
  products: Array<Product_Order_Product_Input>;
};

export type Products_Order_Input = {
  adress: Scalars['String']['input'];
  fio: Scalars['String']['input'];
  products: Array<Product_Order_Product_Input>;
  tel: Scalars['String']['input'];
};

export type Products_Order_NewCount = {
  __typename?: 'Products_order_newCount';
  count: Scalars['Int']['output'];
};

export type Products_Order_Product = {
  __typename?: 'Products_order_product';
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  product_id: Scalars['ObjectID']['output'];
  quantity: Scalars['Int']['output'];
};

export type Products_PriceInput = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** получить все поли */
  auth_role_getAll: Array<Auth_Role>;
  auth_user_checkToken: Auth_User_LoginData;
  auth_user_getAll: Auth_User_PaginationAll;
  auth_user_getOne: Auth_User;
  auth_user_search: Array<Auth_User>;
  products_eavValue_filters_get: Products_Eav_Value_FiltersResult;
  products_eavValue_products_get: Products_Eav_Value_ProductsFinelResult;
  /** поиск характеристик товара */
  products_eavValue_value_get: Array<Products_Eav_Value>;
  products_eav_attribute_get: Array<Products_Eav_Attribute>;
  /** выбор из списка для одиночного отображения товара */
  products_eav_entity_getById: Products_Eav_Entity_Get;
  /** поиска товара для обновлениея заказа */
  products_eav_entity_getByName: Array<Products_Eav_Entity>;
  /** глобальный поиск товара */
  products_eav_entity_globalSearch: Products_Eav_Entity_GlobalSearchResult;
  products_order_getForNumber?: Maybe<Products_Order>;
  products_order_getNew: Array<Products_Order>;
  products_order_getNewCount: Products_Order_NewCount;
  settings_category_getAll: Array<Settings_Category>;
  settings_fullTextSearch_get: Settings_FullTextSearch_Result;
  settings_group_get: Array<Settings_Group>;
};


export type QueryAuth_User_GetAllArgs = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};


export type QueryAuth_User_GetOneArgs = {
  id: Scalars['ObjectID']['input'];
};


export type QueryAuth_User_SearchArgs = {
  text: Scalars['String']['input'];
};


export type QueryProducts_EavValue_Filters_GetArgs = {
  filters: Products_EavValue_FiltersInput;
};


export type QueryProducts_EavValue_Products_GetArgs = {
  filters: Products_EavValue_ProductsInput;
};


export type QueryProducts_EavValue_Value_GetArgs = {
  idProduct: Scalars['ObjectID']['input'];
};


export type QueryProducts_Eav_Attribute_GetArgs = {
  group: Scalars['String']['input'];
};


export type QueryProducts_Eav_Entity_GetByIdArgs = {
  id: Scalars['ObjectID']['input'];
};


export type QueryProducts_Eav_Entity_GetByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryProducts_Eav_Entity_GlobalSearchArgs = {
  search: Products_Eav_Entity_SearchProducts_Input;
};


export type QueryProducts_Order_GetForNumberArgs = {
  orderNumber: Scalars['Int']['input'];
};


export type QueryProducts_Order_GetNewArgs = {
  pagination: Pagination_Input;
};


export type QuerySettings_FullTextSearch_GetArgs = {
  searchText: Scalars['String']['input'];
};


export type QuerySettings_Group_GetArgs = {
  category: Scalars['String']['input'];
};

export enum SaveType {
  Category = 'category',
  Group = 'group',
  Product = 'product'
}

export type Settings_Category = {
  __typename?: 'Settings_category';
  _id: Scalars['ObjectID']['output'];
  description: DescriptionLang;
  img_path: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Settings_Category_Add = {
  description: DescriptionLang_Add;
  img_path: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Settings_FullTextSearch = {
  __typename?: 'Settings_fullTextSearch';
  id: Scalars['ObjectID']['output'];
  text: Scalars['String']['output'];
};

export type Settings_FullTextSearch_GroupesResult = {
  __typename?: 'Settings_fullTextSearch_groupesResult';
  description: DescriptionLang;
  type: Scalars['String']['output'];
};

export type Settings_FullTextSearch_Result = {
  __typename?: 'Settings_fullTextSearch_result';
  groupes: Array<Settings_FullTextSearch_GroupesResult>;
  phrases: Array<Scalars['String']['output']>;
};

export type Settings_Group = {
  __typename?: 'Settings_group';
  _id: Scalars['ObjectID']['output'];
  category: Scalars['String']['output'];
  description: DescriptionLang;
  img_path: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Settings_Group_Add = {
  category: Scalars['String']['input'];
  description: DescriptionLang_Add;
  img_path: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type UploadFile_Add = {
  img: Scalars['Upload']['input'];
  path: Scalars['String']['input'];
};

export type UploadFile_Success = {
  __typename?: 'UploadFile_success';
  errorMessage?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type UploadFiles_Add = {
  imgs: Array<Scalars['Upload']['input']>;
  path: Array<Scalars['String']['input']>;
};

export type Auth_User_LoginMutationVariables = Exact<{
  login: Scalars['String']['input'];
  pass: Scalars['String']['input'];
}>;


export type Auth_User_LoginMutation = { __typename?: 'Mutation', user: { __typename?: 'Auth_user_loginData', id?: any | null, login: string, role: string, tel: string } };

export type MutationMutationVariables = Exact<{ [key: string]: never; }>;


export type MutationMutation = { __typename?: 'Mutation', auth_user_logout?: any | null };

export type Auth_User_CheckTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type Auth_User_CheckTokenQuery = { __typename?: 'Query', user: { __typename?: 'Auth_user_loginData', id?: any | null, login: string, role: string, tel: string } };

export type Auth_User_AdminRegistrationMutationVariables = Exact<{
  user: Auth_User_AdminRegistration;
}>;


export type Auth_User_AdminRegistrationMutation = { __typename?: 'Mutation', name?: { __typename?: 'Auth_user', fullname: string } | null };

export type Auth_User_SearchQueryVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type Auth_User_SearchQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Auth_user', fullname: string, mail: string, tel: string, _id: any }> };

export type Auth_User_DeleteMutationVariables = Exact<{
  authUserDeleteId: Scalars['ObjectID']['input'];
}>;


export type Auth_User_DeleteMutation = { __typename?: 'Mutation', auth_user_delete?: { __typename?: 'IdResponse', id?: any | null } | null };

export type Products_Order_GetNewQueryVariables = Exact<{
  pagination: Pagination_Input;
}>;


export type Products_Order_GetNewQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Products_order', _id: any, adress: string, createdAt: any, fio: string, orderNumber: number, status: OrderStatus, tel: string, totalPrice: number, updatedAt: any, products: Array<{ __typename?: 'Products_order_product', name: string, price: number, product_id: any, quantity: number }> }> };

export type Products_Order_GetNewCountQueryVariables = Exact<{ [key: string]: never; }>;


export type Products_Order_GetNewCountQuery = { __typename?: 'Query', orderCount: { __typename?: 'Products_order_newCount', count: number } };

export type Products_Order_GetForNumberQueryVariables = Exact<{
  orderNumber: Scalars['Int']['input'];
}>;


export type Products_Order_GetForNumberQuery = { __typename?: 'Query', order?: { __typename?: 'Products_order', _id: any, adress: string, createdAt: any, fio: string, orderNumber: number, status: OrderStatus, tel: string, totalPrice: number, updatedAt: any, products: Array<{ __typename?: 'Products_order_product', name: string, price: number, product_id: any, quantity: number }> } | null };

export type Products_Order_AddMutationVariables = Exact<{
  order: Products_Order_Input;
}>;


export type Products_Order_AddMutation = { __typename?: 'Mutation', order: { __typename?: 'Products_order', _id: any, adress: string, createdAt: any, fio: string, orderNumber: number, status: OrderStatus, tel: string, totalPrice: number, updatedAt: any, products: Array<{ __typename?: 'Products_order_product', name: string, price: number, product_id: any, quantity: number }> } };

export type Products_Order_CancelMutationVariables = Exact<{
  productsOrderCancelId: Scalars['ObjectID']['input'];
}>;


export type Products_Order_CancelMutation = { __typename?: 'Mutation', order: { __typename?: 'Products_order', _id: any, orderNumber: number, fio: string, tel: string, adress: string, status: OrderStatus, totalPrice: number, createdAt: any, updatedAt: any, products: Array<{ __typename?: 'Products_order_product', product_id: any, name: string, price: number, quantity: number }> } };

export type Products_Order_ComleteMutationVariables = Exact<{
  productsOrderComleteId: Scalars['ObjectID']['input'];
}>;


export type Products_Order_ComleteMutation = { __typename?: 'Mutation', order: { __typename?: 'Products_order', _id: any, orderNumber: number, fio: string, tel: string, adress: string, status: OrderStatus, totalPrice: number, createdAt: any, updatedAt: any, products: Array<{ __typename?: 'Products_order_product', product_id: any, name: string, price: number, quantity: number }> } };

export type Products_Order_ConfirmMutationVariables = Exact<{
  productsOrderConfirmId: Scalars['ObjectID']['input'];
}>;


export type Products_Order_ConfirmMutation = { __typename?: 'Mutation', order: { __typename?: 'Products_order', _id: any, orderNumber: number, fio: string, tel: string, adress: string, status: OrderStatus, totalPrice: number, createdAt: any, updatedAt: any, products: Array<{ __typename?: 'Products_order_product', product_id: any, name: string, price: number, quantity: number }> } };

export type Products_Order_DeleteMutationVariables = Exact<{
  productsOrderDeleteId: Scalars['ObjectID']['input'];
}>;


export type Products_Order_DeleteMutation = { __typename?: 'Mutation', order?: { __typename?: 'IdResponse', id?: any | null } | null };

export type Products_Order_UpdateMutationVariables = Exact<{
  productsOrderUpdateId: Scalars['ObjectID']['input'];
  order: Products_Order_Input;
}>;


export type Products_Order_UpdateMutation = { __typename?: 'Mutation', order: { __typename?: 'Products_order', _id: any, orderNumber: number, fio: string, tel: string, adress: string, status: OrderStatus, totalPrice: number, createdAt: any, updatedAt: any, products: Array<{ __typename?: 'Products_order_product', product_id: any, name: string, price: number, quantity: number }> } };

export type Products_Eav_Attribute_AddMutationVariables = Exact<{
  attr: Products_Eav_AttributeInput;
}>;


export type Products_Eav_Attribute_AddMutation = { __typename?: 'Mutation', attribute: { __typename?: 'Products_eav_attribute', _id: any, attr_name: string, group: string, description: { __typename?: 'DescriptionLang', en: string, ru: string }, values?: Array<{ __typename?: 'Products_eav_attribute_values', value: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } }> | null } };

export type Products_Eav_Attribute_GetQueryVariables = Exact<{
  group: Scalars['String']['input'];
}>;


export type Products_Eav_Attribute_GetQuery = { __typename?: 'Query', attrs: Array<{ __typename?: 'Products_eav_attribute', _id: any, attr_name: string, group: string, description: { __typename?: 'DescriptionLang', en: string, ru: string }, values?: Array<{ __typename?: 'Products_eav_attribute_values', value: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } }> | null }> };

export type Products_Eav_Attribute_DeleteMutationVariables = Exact<{
  productsEavAttributeDeleteId?: InputMaybe<Scalars['ObjectID']['input']>;
}>;


export type Products_Eav_Attribute_DeleteMutation = { __typename?: 'Mutation', delete?: { __typename?: 'IdResponse', id?: any | null } | null };

export type Products_Eav_Attribute_UpdateMutationVariables = Exact<{
  productsEavAttributeUpdateId?: InputMaybe<Scalars['ObjectID']['input']>;
  values?: InputMaybe<Array<Products_Eav_Attribute_ValuesInput> | Products_Eav_Attribute_ValuesInput>;
}>;


export type Products_Eav_Attribute_UpdateMutation = { __typename?: 'Mutation', attr: { __typename?: 'Products_eav_attribute', _id: any, values?: Array<{ __typename?: 'Products_eav_attribute_values', value: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } }> | null } };

export type Products_Eav_Entity_GetByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type Products_Eav_Entity_GetByNameQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Products_eav_entity', _id: any, group: string, img_urls: Array<string>, quantity: number, rating: number, searchTag: string, description: { __typename?: 'DescriptionLang', en: string, ru: string }, discount: { __typename?: 'Products_eav_entity_discount', active: boolean, oldPrice: string }, name: { __typename?: 'DescriptionLang', en: string, ru: string } }> };

export type Products_Eav_Entity_GetByIdQueryVariables = Exact<{
  productsEavEntityGetByIdId: Scalars['ObjectID']['input'];
}>;


export type Products_Eav_Entity_GetByIdQuery = { __typename?: 'Query', product: { __typename?: 'Products_eav_entity_get', price: number, product: { __typename?: 'Products_eav_entity', _id: any, group: string, img_urls: Array<string>, quantity: number, rating: number, searchTag: string, description: { __typename?: 'DescriptionLang', ru: string, en: string }, discount: { __typename?: 'Products_eav_entity_discount', active: boolean, oldPrice: string }, name: { __typename?: 'DescriptionLang', en: string, ru: string } } } };

export type Products_Eav_Entity_AddMutationVariables = Exact<{
  product: Products_Eav_Entity_Input;
}>;


export type Products_Eav_Entity_AddMutation = { __typename?: 'Mutation', product: { __typename?: 'Products_eav_entity', _id: any, img_urls: Array<string>, name: { __typename?: 'DescriptionLang', en: string, ru: string } } };

export type Products_Eav_Entity_DeleteMutationVariables = Exact<{
  productsEavEntityDeleteId: Scalars['ObjectID']['input'];
}>;


export type Products_Eav_Entity_DeleteMutation = { __typename?: 'Mutation', products_eav_entity_delete?: { __typename?: 'IdResponse', id?: any | null } | null };

export type Products_Eav_Entity_UpdateMutationVariables = Exact<{
  product: Products_Eav_Entity_Update_Input;
}>;


export type Products_Eav_Entity_UpdateMutation = { __typename?: 'Mutation', product: { __typename?: 'Products_eav_entity', _id: any, group: string, img_urls: Array<string>, quantity: number, rating: number, searchTag: string, description: { __typename?: 'DescriptionLang', en: string, ru: string }, discount: { __typename?: 'Products_eav_entity_discount', active: boolean, oldPrice: string }, name: { __typename?: 'DescriptionLang', en: string, ru: string } } };

export type Products_EavValue_Products_GetQueryVariables = Exact<{
  filters: Products_EavValue_ProductsInput;
}>;


export type Products_EavValue_Products_GetQuery = { __typename?: 'Query', allProducts: { __typename?: 'Products_eav_value_productsFinelResult', totalProducts: number, products: Array<{ __typename?: 'Products_eav_value_productsResult', _id: any, img_urls: Array<string>, price: number, rating: number, quantity: number, discount: { __typename?: 'Products_eav_entity_discount', active: boolean, oldPrice: string }, name: { __typename?: 'DescriptionLang', en: string, ru: string } }> } };

export type Products_EavValue_Filters_GetQueryVariables = Exact<{
  filters: Products_EavValue_FiltersInput;
}>;


export type Products_EavValue_Filters_GetQuery = { __typename?: 'Query', filtersGet: { __typename?: 'Products_eav_value_filtersResult', price?: { __typename?: 'Products_eav_value_price', max: number, min: number } | null, filters: Array<{ __typename?: 'Products_eav_value_filter', attr: { __typename?: 'Products_eav_value_filterName', name: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } }, values: Array<{ __typename?: 'Products_eav_value_filterData', count: number, attr_value: { __typename?: 'Products_eav_value_filterValue', value: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } } }> }> } };

export type Products_EavValue_Value_GetQueryVariables = Exact<{
  idProduct: Scalars['ObjectID']['input'];
}>;


export type Products_EavValue_Value_GetQuery = { __typename?: 'Query', values: Array<{ __typename?: 'Products_eav_value', attr_description: { __typename?: 'DescriptionLang', en: string, ru: string }, attr_value: { __typename?: 'Products_eav_attribute_values', description: { __typename?: 'DescriptionLang', en: string, ru: string } } }> };

export type ExampleQueryQueryVariables = Exact<{
  search: Products_Eav_Entity_SearchProducts_Input;
}>;


export type ExampleQueryQuery = { __typename?: 'Query', search: { __typename?: 'Products_eav_entity_globalSearchResult', totalProducts: number, groups: Array<{ __typename?: 'Products_eav_entity_groupsResult', type: string, description: { __typename?: 'DescriptionLang', ru: string, en: string } }>, products: Array<{ __typename?: 'Products_eav_value_productsResult', _id: any, img_urls: Array<string>, price: number, quantity: number, rating: number, discount: { __typename?: 'Products_eav_entity_discount', active: boolean, oldPrice: string }, name: { __typename?: 'DescriptionLang', en: string, ru: string } }> } };

export type Auth_Role_GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type Auth_Role_GetAllQuery = { __typename?: 'Query', roles: Array<{ __typename?: 'Auth_role', type: string }> };

export type Settings_FullTextSearch_GetQueryVariables = Exact<{
  searchText: Scalars['String']['input'];
}>;


export type Settings_FullTextSearch_GetQuery = { __typename?: 'Query', results: { __typename?: 'Settings_fullTextSearch_result', phrases: Array<string>, groupes: Array<{ __typename?: 'Settings_fullTextSearch_groupesResult', type: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } }> } };

export type Settings_Category_AddMutationVariables = Exact<{
  category: Settings_Category_Add;
}>;


export type Settings_Category_AddMutation = { __typename?: 'Mutation', category: { __typename?: 'Settings_category', _id: any, img_path: string, type: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } } };

export type Settings_Category_DeleteMutationVariables = Exact<{
  settingsCategoryDeleteId: Scalars['ObjectID']['input'];
}>;


export type Settings_Category_DeleteMutation = { __typename?: 'Mutation', res: { __typename?: 'IdResponse', id?: any | null } };

export type Settings_Category_GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type Settings_Category_GetAllQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Settings_category', _id: any, img_path: string, type: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } }> };

export type Settings_Group_AddMutationVariables = Exact<{
  group: Settings_Group_Add;
}>;


export type Settings_Group_AddMutation = { __typename?: 'Mutation', group: { __typename?: 'Settings_group', _id: any, category: string, img_path: string, type: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } } };

export type Settings_Group_DeleteMutationVariables = Exact<{
  settingsGroupDeleteId: Scalars['ObjectID']['input'];
}>;


export type Settings_Group_DeleteMutation = { __typename?: 'Mutation', res: { __typename?: 'IdResponse', id?: any | null } };

export type Settings_Group_GetQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type Settings_Group_GetQuery = { __typename?: 'Query', groups: Array<{ __typename?: 'Settings_group', _id: any, type: string, img_path: string, description: { __typename?: 'DescriptionLang', en: string, ru: string } }> };

export type UploadFile_AddMutationVariables = Exact<{
  file: UploadFile_Add;
}>;


export type UploadFile_AddMutation = { __typename?: 'Mutation', uploadFile_add: { __typename?: 'UploadFile_success', errorMessage?: string | null, success: boolean } };

export type UploadFiles_AddMutationVariables = Exact<{
  files: Array<Scalars['Upload']['input']> | Scalars['Upload']['input'];
  path: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type UploadFiles_AddMutation = { __typename?: 'Mutation', uploadFiles_add: { __typename?: 'UploadFile_success', errorMessage?: string | null, success: boolean } };

export type UploadFilesToGoogleMutationVariables = Exact<{
  files: Array<Scalars['Upload']['input']> | Scalars['Upload']['input'];
  path: SaveType;
}>;


export type UploadFilesToGoogleMutation = { __typename?: 'Mutation', uploadFilesToGoogle: Array<string> };


export const Auth_User_LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Auth_user_login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pass"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"auth_user_login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"pass"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pass"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}}]}}]}}]} as unknown as DocumentNode<Auth_User_LoginMutation, Auth_User_LoginMutationVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_user_logout"}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const Auth_User_CheckTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auth_user_checkToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"auth_user_checkToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}}]}}]}}]} as unknown as DocumentNode<Auth_User_CheckTokenQuery, Auth_User_CheckTokenQueryVariables>;
export const Auth_User_AdminRegistrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Auth_user_adminRegistration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Auth_user_adminRegistration"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"auth_user_adminRegistration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}}]}}]}}]} as unknown as DocumentNode<Auth_User_AdminRegistrationMutation, Auth_User_AdminRegistrationMutationVariables>;
export const Auth_User_SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auth_user_search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"users"},"name":{"kind":"Name","value":"auth_user_search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullname"}},{"kind":"Field","name":{"kind":"Name","value":"mail"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<Auth_User_SearchQuery, Auth_User_SearchQueryVariables>;
export const Auth_User_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Auth_user_delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authUserDeleteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_user_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authUserDeleteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Auth_User_DeleteMutation, Auth_User_DeleteMutationVariables>;
export const Products_Order_GetNewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products_order_getNew"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"orders"},"name":{"kind":"Name","value":"products_order_getNew"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fio"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Products_Order_GetNewQuery, Products_Order_GetNewQueryVariables>;
export const Products_Order_GetNewCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products_order_getNewCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"orderCount"},"name":{"kind":"Name","value":"products_order_getNewCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<Products_Order_GetNewCountQuery, Products_Order_GetNewCountQueryVariables>;
export const Products_Order_GetForNumberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products_order_getForNumber"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"order"},"name":{"kind":"Name","value":"products_order_getForNumber"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fio"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Products_Order_GetForNumberQuery, Products_Order_GetForNumberQueryVariables>;
export const Products_Order_AddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_order_add"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Products_order_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"order"},"name":{"kind":"Name","value":"products_order_add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fio"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Products_Order_AddMutation, Products_Order_AddMutationVariables>;
export const Products_Order_CancelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_order_cancel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderCancelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"order"},"name":{"kind":"Name","value":"products_order_cancel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderCancelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fio"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Products_Order_CancelMutation, Products_Order_CancelMutationVariables>;
export const Products_Order_ComleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_order_comlete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderComleteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"order"},"name":{"kind":"Name","value":"products_order_comlete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderComleteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fio"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Products_Order_ComleteMutation, Products_Order_ComleteMutationVariables>;
export const Products_Order_ConfirmDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_order_confirm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderConfirmId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"order"},"name":{"kind":"Name","value":"products_order_confirm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderConfirmId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fio"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Products_Order_ConfirmMutation, Products_Order_ConfirmMutationVariables>;
export const Products_Order_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_order_delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderDeleteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"order"},"name":{"kind":"Name","value":"products_order_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderDeleteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Products_Order_DeleteMutation, Products_Order_DeleteMutationVariables>;
export const Products_Order_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_order_update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Products_order_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"order"},"name":{"kind":"Name","value":"products_order_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsOrderUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"fio"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}},{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Products_Order_UpdateMutation, Products_Order_UpdateMutationVariables>;
export const Products_Eav_Attribute_AddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_eav_attribute_add"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attr"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Products_eav_attributeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"attribute"},"name":{"kind":"Name","value":"products_eav_attribute_add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attr"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attr_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Products_Eav_Attribute_AddMutation, Products_Eav_Attribute_AddMutationVariables>;
export const Products_Eav_Attribute_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products_eav_attribute_get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"group"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"attrs"},"name":{"kind":"Name","value":"products_eav_attribute_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"group"},"value":{"kind":"Variable","name":{"kind":"Name","value":"group"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attr_name"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Products_Eav_Attribute_GetQuery, Products_Eav_Attribute_GetQueryVariables>;
export const Products_Eav_Attribute_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_eav_attribute_delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsEavAttributeDeleteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"delete"},"name":{"kind":"Name","value":"products_eav_attribute_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsEavAttributeDeleteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Products_Eav_Attribute_DeleteMutation, Products_Eav_Attribute_DeleteMutationVariables>;
export const Products_Eav_Attribute_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_eav_attribute_update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsEavAttributeUpdateId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"values"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Products_eav_attribute_valuesInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"attr"},"name":{"kind":"Name","value":"products_eav_attribute_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsEavAttributeUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"values"},"value":{"kind":"Variable","name":{"kind":"Name","value":"values"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<Products_Eav_Attribute_UpdateMutation, Products_Eav_Attribute_UpdateMutationVariables>;
export const Products_Eav_Entity_GetByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products_eav_entity_getByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"products"},"name":{"kind":"Name","value":"products_eav_entity_getByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"img_urls"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"searchTag"}}]}}]}}]} as unknown as DocumentNode<Products_Eav_Entity_GetByNameQuery, Products_Eav_Entity_GetByNameQueryVariables>;
export const Products_Eav_Entity_GetByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products_eav_entity_getById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsEavEntityGetByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"product"},"name":{"kind":"Name","value":"products_eav_entity_getById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsEavEntityGetByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ru"}},{"kind":"Field","name":{"kind":"Name","value":"en"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"img_urls"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"searchTag"}}]}}]}}]}}]} as unknown as DocumentNode<Products_Eav_Entity_GetByIdQuery, Products_Eav_Entity_GetByIdQueryVariables>;
export const Products_Eav_Entity_AddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_eav_entity_add"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Products_eav_entity_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"product"},"name":{"kind":"Name","value":"products_eav_entity_add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"product"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"img_urls"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}}]}}]}}]} as unknown as DocumentNode<Products_Eav_Entity_AddMutation, Products_Eav_Entity_AddMutationVariables>;
export const Products_Eav_Entity_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_eav_entity_delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsEavEntityDeleteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products_eav_entity_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsEavEntityDeleteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Products_Eav_Entity_DeleteMutation, Products_Eav_Entity_DeleteMutationVariables>;
export const Products_Eav_Entity_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Products_eav_entity_update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Products_eav_entity_update_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"product"},"name":{"kind":"Name","value":"products_eav_entity_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"product"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"img_urls"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"searchTag"}}]}}]}}]} as unknown as DocumentNode<Products_Eav_Entity_UpdateMutation, Products_Eav_Entity_UpdateMutationVariables>;
export const Products_EavValue_Products_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products_eavValue_products_get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Products_eavValue_productsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"allProducts"},"name":{"kind":"Name","value":"products_eavValue_products_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalProducts"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"img_urls"}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]}}]} as unknown as DocumentNode<Products_EavValue_Products_GetQuery, Products_EavValue_Products_GetQueryVariables>;
export const Products_EavValue_Filters_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products_eavValue_filters_get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Products_eavValue_filtersInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"filtersGet"},"name":{"kind":"Name","value":"products_eavValue_filters_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"attr_value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Products_EavValue_Filters_GetQuery, Products_EavValue_Filters_GetQueryVariables>;
export const Products_EavValue_Value_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products_eavValue_value_get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idProduct"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"values"},"name":{"kind":"Name","value":"products_eavValue_value_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idProduct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attr_description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attr_value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Products_EavValue_Value_GetQuery, Products_EavValue_Value_GetQueryVariables>;
export const ExampleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Products_eav_entity_searchProducts_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"search"},"name":{"kind":"Name","value":"products_eav_entity_globalSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ru"}},{"kind":"Field","name":{"kind":"Name","value":"en"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"oldPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"img_urls"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalProducts"}}]}}]}}]} as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;
export const Auth_Role_GetAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auth_role_getAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"roles"},"name":{"kind":"Name","value":"auth_role_getAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<Auth_Role_GetAllQuery, Auth_Role_GetAllQueryVariables>;
export const Settings_FullTextSearch_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Settings_fullTextSearch_get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchText"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"results"},"name":{"kind":"Name","value":"settings_fullTextSearch_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchText"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchText"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"groupes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phrases"}}]}}]}}]} as unknown as DocumentNode<Settings_FullTextSearch_GetQuery, Settings_FullTextSearch_GetQueryVariables>;
export const Settings_Category_AddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Settings_category_add"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Settings_category_add"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"category"},"name":{"kind":"Name","value":"settings_category_add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"img_path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<Settings_Category_AddMutation, Settings_Category_AddMutationVariables>;
export const Settings_Category_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Settings_category_delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settingsCategoryDeleteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"res"},"name":{"kind":"Name","value":"settings_category_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settingsCategoryDeleteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Settings_Category_DeleteMutation, Settings_Category_DeleteMutationVariables>;
export const Settings_Category_GetAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Settings_category_getAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"categories"},"name":{"kind":"Name","value":"settings_category_getAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"img_path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<Settings_Category_GetAllQuery, Settings_Category_GetAllQueryVariables>;
export const Settings_Group_AddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Settings_group_add"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"group"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Settings_group_add"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"group"},"name":{"kind":"Name","value":"settings_group_add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"group"},"value":{"kind":"Variable","name":{"kind":"Name","value":"group"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"img_path"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<Settings_Group_AddMutation, Settings_Group_AddMutationVariables>;
export const Settings_Group_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Settings_group_delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"settingsGroupDeleteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"res"},"name":{"kind":"Name","value":"settings_group_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"settingsGroupDeleteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Settings_Group_DeleteMutation, Settings_Group_DeleteMutationVariables>;
export const Settings_Group_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Settings_group_get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"groups"},"name":{"kind":"Name","value":"settings_group_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"ru"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"img_path"}}]}}]}}]} as unknown as DocumentNode<Settings_Group_GetQuery, Settings_Group_GetQueryVariables>;
export const UploadFile_AddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadFile_add"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile_add"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFile_add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<UploadFile_AddMutation, UploadFile_AddMutationVariables>;
export const UploadFiles_AddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadFiles_add"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFiles_add"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}},{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<UploadFiles_AddMutation, UploadFiles_AddMutationVariables>;
export const UploadFilesToGoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadFilesToGoogle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SaveType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFilesToGoogle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}},{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}]}}]} as unknown as DocumentNode<UploadFilesToGoogleMutation, UploadFilesToGoogleMutationVariables>;