import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
  ObjectId: any;
  Upload: any;
  Void: any;
};

export type Auth_Role = {
  __typename?: 'Auth_role';
  _id: Scalars['ObjectId'];
  type: Scalars['String'];
};

export type Auth_User = {
  __typename?: 'Auth_user';
  _id: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  fullname: Scalars['String'];
  mail: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  tel: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Auth_User_AdminRegistration = {
  fullname: Scalars['String'];
  mail: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  tel: Scalars['String'];
};

export type Auth_User_LoginData = {
  __typename?: 'Auth_user_loginData';
  id?: Maybe<Scalars['ObjectId']>;
  login: Scalars['String'];
  role: Scalars['String'];
  tel: Scalars['String'];
};

export type Auth_User_NewPass = {
  _id: Scalars['ObjectId'];
  pass: Scalars['String'];
};

export type Auth_User_PaginationAll = {
  __typename?: 'Auth_user_paginationAll';
  count: Scalars['Int'];
  users: Maybe<Auth_User>[];
};

export type Auth_User_Registration = {
  fullname: Scalars['String'];
  mail: Scalars['String'];
  password: Scalars['String'];
  tel: Scalars['String'];
};

export type Auth_User_Update = {
  _id: Scalars['ObjectId'];
  fullname: Scalars['String'];
  mail: Scalars['String'];
  tel: Scalars['String'];
};

export type Complete = {
  __typename?: 'Complete';
  complete?: Maybe<Scalars['Boolean']>;
};

export type DescriptionLang = {
  __typename?: 'DescriptionLang';
  en: Scalars['String'];
  ru: Scalars['String'];
};

export type DescriptionLang_Add = {
  en: Scalars['String'];
  ru: Scalars['String'];
};

export type IdResponse = {
  __typename?: 'IdResponse';
  id?: Maybe<Scalars['ObjectId']>;
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
  auth_user_logout?: Maybe<Scalars['Void']>;
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
  uploadFilesToGoogle: Scalars['String'][];
  uploadFiles_add: UploadFile_Success;
};


export type MutationAuth_Role_AddArgs = {
  role: Scalars['String'];
};


export type MutationAuth_Role_DeleteArgs = {
  id: Scalars['ObjectId'];
};


export type MutationAuth_User_AdminRegistrationArgs = {
  user: Auth_User_AdminRegistration;
};


export type MutationAuth_User_DeleteArgs = {
  id: Scalars['ObjectId'];
};


export type MutationAuth_User_LoginArgs = {
  login: Scalars['String'];
  pass: Scalars['String'];
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
  id: Scalars['ObjectId'];
};


export type MutationProducts_Eav_Attribute_AddArgs = {
  attr: Products_Eav_AttributeInput;
};


export type MutationProducts_Eav_Attribute_DeleteArgs = {
  id?: InputMaybe<Scalars['ObjectId']>;
};


export type MutationProducts_Eav_Attribute_UpdateArgs = {
  id?: InputMaybe<Scalars['ObjectId']>;
  values?: InputMaybe<Products_Eav_Attribute_ValuesInput[]>;
};


export type MutationProducts_Eav_Entity_AddArgs = {
  product: Products_Eav_Entity_Input;
};


export type MutationProducts_Eav_Entity_DeleteArgs = {
  id: Scalars['ObjectId'];
};


export type MutationProducts_Eav_Entity_UpdateArgs = {
  product: Products_Eav_Entity_Update_Input;
};


export type MutationProducts_Order_AddArgs = {
  order: Products_Order_Input;
};


export type MutationProducts_Order_CancelArgs = {
  id: Scalars['ObjectId'];
};


export type MutationProducts_Order_ComleteArgs = {
  id: Scalars['ObjectId'];
};


export type MutationProducts_Order_ConfirmArgs = {
  id: Scalars['ObjectId'];
};


export type MutationProducts_Order_DeleteArgs = {
  id: Scalars['ObjectId'];
};


export type MutationProducts_Order_UpdateArgs = {
  id: Scalars['ObjectId'];
  order: Products_Order_Input;
};


export type MutationSettings_Category_AddArgs = {
  category: Settings_Category_Add;
};


export type MutationSettings_Category_DeleteArgs = {
  id: Scalars['ObjectId'];
};


export type MutationSettings_FullTextSearch_AddArgs = {
  text: Scalars['String'];
};


export type MutationSettings_FullTextSearch_DeleteArgs = {
  text: Scalars['String'];
};


export type MutationSettings_Group_AddArgs = {
  group: Settings_Group_Add;
};


export type MutationSettings_Group_DeleteArgs = {
  id: Scalars['ObjectId'];
};


export type MutationUploadFile_AddArgs = {
  file: UploadFile_Add;
};


export type MutationUploadFilesToGoogleArgs = {
  files: Scalars['Upload'][];
  path: SaveType;
};


export type MutationUploadFiles_AddArgs = {
  files: Scalars['Upload'][];
  path: Scalars['String'][];
};

export enum OrderStatus {
  Cancel = 'cancel',
  Complete = 'complete',
  Confirm = 'confirm',
  New = 'new'
}

export type Pagination_Input = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export enum ProductSort {
  Discount = 'discount',
  DownPrice = 'downPrice',
  Rating = 'rating',
  UpPrice = 'upPrice'
}

export type Product_Order_Product_Input = {
  name: Scalars['String'];
  price: Scalars['Int'];
  product_id: Scalars['ObjectId'];
  quantity: Scalars['Int'];
};

export type Products_EavValue_FiltersInput = {
  filters: InputMaybe<Products_FiltersInput>[];
  group: Scalars['String'];
  price?: InputMaybe<Products_PriceInput>;
};

export type Products_EavValue_ProductsInput = {
  filters: InputMaybe<Products_FiltersInput>[];
  group: Scalars['String'];
  limit: Scalars['Int'];
  page: Scalars['Int'];
  price?: InputMaybe<Products_PriceInput>;
  sort: ProductSort;
};

export type Products_Eav_Attribute = {
  __typename?: 'Products_eav_attribute';
  _id: Scalars['ObjectId'];
  attr_name: Scalars['String'];
  description: DescriptionLang;
  group: Scalars['String'];
  values?: Maybe<Products_Eav_Attribute_Values[]>;
};

export type Products_Eav_AttributeInput = {
  attr_name: Scalars['String'];
  description: DescriptionLang_Add;
  group: Scalars['String'];
  values?: InputMaybe<Products_Eav_Attribute_ValuesInput[]>;
};

export type Products_Eav_Attribute_Values = {
  __typename?: 'Products_eav_attribute_values';
  description: DescriptionLang;
  value: Scalars['String'];
};

export type Products_Eav_Attribute_ValuesInput = {
  description: DescriptionLang_Add;
  value: Scalars['String'];
};

export type Products_Eav_Entity = {
  __typename?: 'Products_eav_entity';
  _id: Scalars['ObjectId'];
  description: DescriptionLang;
  discount: Products_Eav_Entity_Discount;
  group: Scalars['String'];
  img_urls: Scalars['String'][];
  name: DescriptionLang;
  quantity: Scalars['Int'];
  rating: Scalars['Int'];
  searchTag: Scalars['String'];
};

export type Products_Eav_Entity_Discount = {
  __typename?: 'Products_eav_entity_discount';
  active: Scalars['Boolean'];
  oldPrice: Scalars['String'];
};

export type Products_Eav_Entity_FilterValue_Input = {
  description?: InputMaybe<DescriptionLang_Add>;
  value: Scalars['String'];
};

export type Products_Eav_Entity_Filter_Input = {
  attr_description: DescriptionLang_Add;
  attr_name: Scalars['String'];
  attr_value: Products_Eav_Entity_FilterValue_Input;
};

export type Products_Eav_Entity_Get = {
  __typename?: 'Products_eav_entity_get';
  price: Scalars['Int'];
  product: Products_Eav_Entity;
};

export type Products_Eav_Entity_GlobalSearchResult = {
  __typename?: 'Products_eav_entity_globalSearchResult';
  groups: Products_Eav_Entity_GroupsResult[];
  products: Products_Eav_Value_ProductsResult[];
  totalProducts: Scalars['Int'];
};

export type Products_Eav_Entity_GroupsResult = {
  __typename?: 'Products_eav_entity_groupsResult';
  description: DescriptionLang;
  type: Scalars['String'];
};

export type Products_Eav_Entity_Input = {
  description: DescriptionLang_Add;
  filters: Products_Eav_Entity_Filter_Input[];
  group: Scalars['String'];
  img_urls?: InputMaybe<Scalars['String'][]>;
  name: DescriptionLang_Add;
  quantity: Scalars['Int'];
  searchTag: Scalars['String'];
};

export type Products_Eav_Entity_ProductsResult = {
  __typename?: 'Products_eav_entity_productsResult';
  products: Maybe<Products_Eav_Value_ProductsResult>[];
  totalProducts: Scalars['Int'];
};

export type Products_Eav_Entity_SearchProducts_Input = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  searchText: Scalars['String'];
  sort: ProductSort;
};

export type Products_Eav_Entity_Update_Input = {
  active: Scalars['Boolean'];
  id: Scalars['ObjectId'];
  newPrice: Scalars['String'];
  oldPrice: Scalars['String'];
  /** "+" add quantity, "-" sub quantity */
  quantity: Scalars['Int'];
};

export type Products_Eav_Value = {
  __typename?: 'Products_eav_value';
  _id: Scalars['ObjectId'];
  attr_description: DescriptionLang;
  attr_name: Scalars['String'];
  attr_value: Products_Eav_Attribute_Values;
  group: Scalars['String'];
  product_id: Scalars['ObjectId'];
};

export type Products_Eav_Value_Filter = {
  __typename?: 'Products_eav_value_filter';
  attr: Products_Eav_Value_FilterName;
  values: Products_Eav_Value_FilterData[];
};

export type Products_Eav_Value_FilterData = {
  __typename?: 'Products_eav_value_filterData';
  attr_value: Products_Eav_Value_FilterValue;
  count: Scalars['Int'];
};

export type Products_Eav_Value_FilterName = {
  __typename?: 'Products_eav_value_filterName';
  description: DescriptionLang;
  name: Scalars['String'];
};

export type Products_Eav_Value_FilterValue = {
  __typename?: 'Products_eav_value_filterValue';
  description: DescriptionLang;
  value: Scalars['String'];
};

export type Products_Eav_Value_FiltersResult = {
  __typename?: 'Products_eav_value_filtersResult';
  filters: Products_Eav_Value_Filter[];
  price?: Maybe<Products_Eav_Value_Price>;
};

export type Products_Eav_Value_Price = {
  __typename?: 'Products_eav_value_price';
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type Products_Eav_Value_ProductsFinelResult = {
  __typename?: 'Products_eav_value_productsFinelResult';
  products: Products_Eav_Value_ProductsResult[];
  totalProducts: Scalars['Int'];
};

export type Products_Eav_Value_ProductsResult = {
  __typename?: 'Products_eav_value_productsResult';
  _id: Scalars['ObjectId'];
  description: DescriptionLang;
  discount: Products_Eav_Entity_Discount;
  group: Scalars['String'];
  img_urls: Scalars['String'][];
  name: DescriptionLang;
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  rating: Scalars['Int'];
};

export type Products_FiltersInput = {
  attr_name: Scalars['String'];
  attr_value: Scalars['String'];
};

export type Products_Order = {
  __typename?: 'Products_order';
  _id: Scalars['ObjectId'];
  adress: Scalars['String'];
  createdAt: Scalars['DateTime'];
  fio: Scalars['String'];
  orderNumber: Scalars['Int'];
  products: Products_Order_Product[];
  status: OrderStatus;
  tel: Scalars['String'];
  totalPrice: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type Products_Order_Cancel_Input = {
  id: Scalars['ObjectId'];
  products: Product_Order_Product_Input[];
};

export type Products_Order_Input = {
  adress: Scalars['String'];
  fio: Scalars['String'];
  products: Product_Order_Product_Input[];
  tel: Scalars['String'];
};

export type Products_Order_NewCount = {
  __typename?: 'Products_order_newCount';
  count: Scalars['Int'];
};

export type Products_Order_Product = {
  __typename?: 'Products_order_product';
  name: Scalars['String'];
  price: Scalars['Int'];
  product_id: Scalars['ObjectId'];
  quantity: Scalars['Int'];
};

export type Products_PriceInput = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** получить все поли */
  auth_role_getAll: Auth_Role[];
  auth_user_checkToken: Auth_User_LoginData;
  auth_user_getAll: Auth_User_PaginationAll;
  auth_user_getOne: Auth_User;
  auth_user_search: Auth_User[];
  products_eavValue_filters_get: Products_Eav_Value_FiltersResult;
  products_eavValue_products_get: Products_Eav_Value_ProductsFinelResult;
  /** поиск характеристик товара */
  products_eavValue_value_get: Products_Eav_Value[];
  products_eav_attribute_get: Products_Eav_Attribute[];
  /** выбор из списка для одиночного отображения товара */
  products_eav_entity_getById: Products_Eav_Entity_Get;
  /** поиска товара для обновлениея заказа */
  products_eav_entity_getByName: Products_Eav_Entity[];
  /** глобальный поиск товара */
  products_eav_entity_globalSearch: Products_Eav_Entity_GlobalSearchResult;
  products_order_getForNumber?: Maybe<Products_Order>;
  products_order_getNew: Products_Order[];
  products_order_getNewCount: Products_Order_NewCount;
  settings_category_getAll: Settings_Category[];
  settings_fullTextSearch_get: Settings_FullTextSearch_Result;
  settings_group_get: Settings_Group[];
};


export type QueryAuth_User_GetAllArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type QueryAuth_User_GetOneArgs = {
  id: Scalars['ObjectId'];
};


export type QueryAuth_User_SearchArgs = {
  text: Scalars['String'];
};


export type QueryProducts_EavValue_Filters_GetArgs = {
  filters: Products_EavValue_FiltersInput;
};


export type QueryProducts_EavValue_Products_GetArgs = {
  filters: Products_EavValue_ProductsInput;
};


export type QueryProducts_EavValue_Value_GetArgs = {
  idProduct: Scalars['ObjectId'];
};


export type QueryProducts_Eav_Attribute_GetArgs = {
  group: Scalars['String'];
};


export type QueryProducts_Eav_Entity_GetByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryProducts_Eav_Entity_GetByNameArgs = {
  name: Scalars['String'];
};


export type QueryProducts_Eav_Entity_GlobalSearchArgs = {
  search: Products_Eav_Entity_SearchProducts_Input;
};


export type QueryProducts_Order_GetForNumberArgs = {
  orderNumber: Scalars['Int'];
};


export type QueryProducts_Order_GetNewArgs = {
  pagination: Pagination_Input;
};


export type QuerySettings_FullTextSearch_GetArgs = {
  searchText: Scalars['String'];
};


export type QuerySettings_Group_GetArgs = {
  category: Scalars['String'];
};

export enum SaveType {
  Category = 'category',
  Group = 'group',
  Product = 'product'
}

export type Settings_Category = {
  __typename?: 'Settings_category';
  _id: Scalars['ObjectId'];
  description: DescriptionLang;
  img_path: Scalars['String'];
  type: Scalars['String'];
};

export type Settings_Category_Add = {
  description: DescriptionLang_Add;
  img_path: Scalars['String'];
  type: Scalars['String'];
};

export type Settings_FullTextSearch = {
  __typename?: 'Settings_fullTextSearch';
  id: Scalars['ObjectId'];
  text: Scalars['String'];
};

export type Settings_FullTextSearch_GroupesResult = {
  __typename?: 'Settings_fullTextSearch_groupesResult';
  description: DescriptionLang;
  type: Scalars['String'];
};

export type Settings_FullTextSearch_Result = {
  __typename?: 'Settings_fullTextSearch_result';
  groupes: Settings_FullTextSearch_GroupesResult[];
  phrases: Scalars['String'][];
};

export type Settings_Group = {
  __typename?: 'Settings_group';
  _id: Scalars['ObjectId'];
  category: Scalars['String'];
  description: DescriptionLang;
  img_path: Scalars['String'];
  type: Scalars['String'];
};

export type Settings_Group_Add = {
  category: Scalars['String'];
  description: DescriptionLang_Add;
  img_path: Scalars['String'];
  type: Scalars['String'];
};

export type UploadFile_Add = {
  img: Scalars['Upload'];
  path: Scalars['String'];
};

export type UploadFile_Success = {
  __typename?: 'UploadFile_success';
  errorMessage?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type UploadFiles_Add = {
  imgs: Scalars['Upload'][];
  path: Scalars['String'][];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Auth_role: ResolverTypeWrapper<Auth_Role>;
  Auth_user: ResolverTypeWrapper<Auth_User>;
  Auth_user_adminRegistration: Auth_User_AdminRegistration;
  Auth_user_loginData: ResolverTypeWrapper<Auth_User_LoginData>;
  Auth_user_newPass: Auth_User_NewPass;
  Auth_user_paginationAll: ResolverTypeWrapper<Auth_User_PaginationAll>;
  Auth_user_registration: Auth_User_Registration;
  Auth_user_update: Auth_User_Update;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Complete: ResolverTypeWrapper<Complete>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DescriptionLang: ResolverTypeWrapper<DescriptionLang>;
  DescriptionLang_add: DescriptionLang_Add;
  IdResponse: ResolverTypeWrapper<IdResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectId: ResolverTypeWrapper<Scalars['ObjectId']>;
  OrderStatus: OrderStatus;
  Pagination_input: Pagination_Input;
  ProductSort: ProductSort;
  Product_order_product_input: Product_Order_Product_Input;
  Products_eavValue_filtersInput: Products_EavValue_FiltersInput;
  Products_eavValue_productsInput: Products_EavValue_ProductsInput;
  Products_eav_attribute: ResolverTypeWrapper<Products_Eav_Attribute>;
  Products_eav_attributeInput: Products_Eav_AttributeInput;
  Products_eav_attribute_values: ResolverTypeWrapper<Products_Eav_Attribute_Values>;
  Products_eav_attribute_valuesInput: Products_Eav_Attribute_ValuesInput;
  Products_eav_entity: ResolverTypeWrapper<Products_Eav_Entity>;
  Products_eav_entity_discount: ResolverTypeWrapper<Products_Eav_Entity_Discount>;
  Products_eav_entity_filterValue_input: Products_Eav_Entity_FilterValue_Input;
  Products_eav_entity_filter_input: Products_Eav_Entity_Filter_Input;
  Products_eav_entity_get: ResolverTypeWrapper<Products_Eav_Entity_Get>;
  Products_eav_entity_globalSearchResult: ResolverTypeWrapper<Products_Eav_Entity_GlobalSearchResult>;
  Products_eav_entity_groupsResult: ResolverTypeWrapper<Products_Eav_Entity_GroupsResult>;
  Products_eav_entity_input: Products_Eav_Entity_Input;
  Products_eav_entity_productsResult: ResolverTypeWrapper<Products_Eav_Entity_ProductsResult>;
  Products_eav_entity_searchProducts_input: Products_Eav_Entity_SearchProducts_Input;
  Products_eav_entity_update_input: Products_Eav_Entity_Update_Input;
  Products_eav_value: ResolverTypeWrapper<Products_Eav_Value>;
  Products_eav_value_filter: ResolverTypeWrapper<Products_Eav_Value_Filter>;
  Products_eav_value_filterData: ResolverTypeWrapper<Products_Eav_Value_FilterData>;
  Products_eav_value_filterName: ResolverTypeWrapper<Products_Eav_Value_FilterName>;
  Products_eav_value_filterValue: ResolverTypeWrapper<Products_Eav_Value_FilterValue>;
  Products_eav_value_filtersResult: ResolverTypeWrapper<Products_Eav_Value_FiltersResult>;
  Products_eav_value_price: ResolverTypeWrapper<Products_Eav_Value_Price>;
  Products_eav_value_productsFinelResult: ResolverTypeWrapper<Products_Eav_Value_ProductsFinelResult>;
  Products_eav_value_productsResult: ResolverTypeWrapper<Products_Eav_Value_ProductsResult>;
  Products_filtersInput: Products_FiltersInput;
  Products_order: ResolverTypeWrapper<Products_Order>;
  Products_order_cancel_input: Products_Order_Cancel_Input;
  Products_order_input: Products_Order_Input;
  Products_order_newCount: ResolverTypeWrapper<Products_Order_NewCount>;
  Products_order_product: ResolverTypeWrapper<Products_Order_Product>;
  Products_priceInput: Products_PriceInput;
  Query: ResolverTypeWrapper<{}>;
  SaveType: SaveType;
  Settings_category: ResolverTypeWrapper<Settings_Category>;
  Settings_category_add: Settings_Category_Add;
  Settings_fullTextSearch: ResolverTypeWrapper<Settings_FullTextSearch>;
  Settings_fullTextSearch_groupesResult: ResolverTypeWrapper<Settings_FullTextSearch_GroupesResult>;
  Settings_fullTextSearch_result: ResolverTypeWrapper<Settings_FullTextSearch_Result>;
  Settings_group: ResolverTypeWrapper<Settings_Group>;
  Settings_group_add: Settings_Group_Add;
  String: ResolverTypeWrapper<Scalars['String']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UploadFile_add: UploadFile_Add;
  UploadFile_success: ResolverTypeWrapper<UploadFile_Success>;
  UploadFiles_add: UploadFiles_Add;
  Void: ResolverTypeWrapper<Scalars['Void']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Auth_role: Auth_Role;
  Auth_user: Auth_User;
  Auth_user_adminRegistration: Auth_User_AdminRegistration;
  Auth_user_loginData: Auth_User_LoginData;
  Auth_user_newPass: Auth_User_NewPass;
  Auth_user_paginationAll: Auth_User_PaginationAll;
  Auth_user_registration: Auth_User_Registration;
  Auth_user_update: Auth_User_Update;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Complete: Complete;
  DateTime: Scalars['DateTime'];
  DescriptionLang: DescriptionLang;
  DescriptionLang_add: DescriptionLang_Add;
  IdResponse: IdResponse;
  Int: Scalars['Int'];
  Mutation: {};
  ObjectId: Scalars['ObjectId'];
  Pagination_input: Pagination_Input;
  Product_order_product_input: Product_Order_Product_Input;
  Products_eavValue_filtersInput: Products_EavValue_FiltersInput;
  Products_eavValue_productsInput: Products_EavValue_ProductsInput;
  Products_eav_attribute: Products_Eav_Attribute;
  Products_eav_attributeInput: Products_Eav_AttributeInput;
  Products_eav_attribute_values: Products_Eav_Attribute_Values;
  Products_eav_attribute_valuesInput: Products_Eav_Attribute_ValuesInput;
  Products_eav_entity: Products_Eav_Entity;
  Products_eav_entity_discount: Products_Eav_Entity_Discount;
  Products_eav_entity_filterValue_input: Products_Eav_Entity_FilterValue_Input;
  Products_eav_entity_filter_input: Products_Eav_Entity_Filter_Input;
  Products_eav_entity_get: Products_Eav_Entity_Get;
  Products_eav_entity_globalSearchResult: Products_Eav_Entity_GlobalSearchResult;
  Products_eav_entity_groupsResult: Products_Eav_Entity_GroupsResult;
  Products_eav_entity_input: Products_Eav_Entity_Input;
  Products_eav_entity_productsResult: Products_Eav_Entity_ProductsResult;
  Products_eav_entity_searchProducts_input: Products_Eav_Entity_SearchProducts_Input;
  Products_eav_entity_update_input: Products_Eav_Entity_Update_Input;
  Products_eav_value: Products_Eav_Value;
  Products_eav_value_filter: Products_Eav_Value_Filter;
  Products_eav_value_filterData: Products_Eav_Value_FilterData;
  Products_eav_value_filterName: Products_Eav_Value_FilterName;
  Products_eav_value_filterValue: Products_Eav_Value_FilterValue;
  Products_eav_value_filtersResult: Products_Eav_Value_FiltersResult;
  Products_eav_value_price: Products_Eav_Value_Price;
  Products_eav_value_productsFinelResult: Products_Eav_Value_ProductsFinelResult;
  Products_eav_value_productsResult: Products_Eav_Value_ProductsResult;
  Products_filtersInput: Products_FiltersInput;
  Products_order: Products_Order;
  Products_order_cancel_input: Products_Order_Cancel_Input;
  Products_order_input: Products_Order_Input;
  Products_order_newCount: Products_Order_NewCount;
  Products_order_product: Products_Order_Product;
  Products_priceInput: Products_PriceInput;
  Query: {};
  Settings_category: Settings_Category;
  Settings_category_add: Settings_Category_Add;
  Settings_fullTextSearch: Settings_FullTextSearch;
  Settings_fullTextSearch_groupesResult: Settings_FullTextSearch_GroupesResult;
  Settings_fullTextSearch_result: Settings_FullTextSearch_Result;
  Settings_group: Settings_Group;
  Settings_group_add: Settings_Group_Add;
  String: Scalars['String'];
  Upload: Scalars['Upload'];
  UploadFile_add: UploadFile_Add;
  UploadFile_success: UploadFile_Success;
  UploadFiles_add: UploadFiles_Add;
  Void: Scalars['Void'];
}>;

export type Auth_RoleResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Auth_role'] = ResolversParentTypes['Auth_role']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Auth_UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Auth_user'] = ResolversParentTypes['Auth_user']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fullname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Auth_User_LoginDataResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Auth_user_loginData'] = ResolversParentTypes['Auth_user_loginData']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Auth_User_PaginationAllResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Auth_user_paginationAll'] = ResolversParentTypes['Auth_user_paginationAll']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['Auth_user']>[], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CompleteResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Complete'] = ResolversParentTypes['Complete']> = ResolversObject<{
  complete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DescriptionLangResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['DescriptionLang'] = ResolversParentTypes['DescriptionLang']> = ResolversObject<{
  en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ru?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['IdResponse'] = ResolversParentTypes['IdResponse']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  auth_role_add?: Resolver<ResolversTypes['Auth_role'], ParentType, ContextType, RequireFields<MutationAuth_Role_AddArgs, 'role'>>;
  auth_role_delete?: Resolver<Maybe<ResolversTypes['IdResponse']>, ParentType, ContextType, RequireFields<MutationAuth_Role_DeleteArgs, 'id'>>;
  auth_user_adminRegistration?: Resolver<Maybe<ResolversTypes['Auth_user']>, ParentType, ContextType, RequireFields<MutationAuth_User_AdminRegistrationArgs, 'user'>>;
  auth_user_delete?: Resolver<Maybe<ResolversTypes['IdResponse']>, ParentType, ContextType, RequireFields<MutationAuth_User_DeleteArgs, 'id'>>;
  auth_user_login?: Resolver<ResolversTypes['Auth_user_loginData'], ParentType, ContextType, RequireFields<MutationAuth_User_LoginArgs, 'login' | 'pass'>>;
  auth_user_logout?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  auth_user_newPass?: Resolver<ResolversTypes['IdResponse'], ParentType, ContextType, RequireFields<MutationAuth_User_NewPassArgs, 'newPass'>>;
  auth_user_registration?: Resolver<Maybe<ResolversTypes['Auth_user']>, ParentType, ContextType, RequireFields<MutationAuth_User_RegistrationArgs, 'user'>>;
  auth_user_update?: Resolver<Maybe<ResolversTypes['Auth_user']>, ParentType, ContextType, RequireFields<MutationAuth_User_UpdateArgs, 'user'>>;
  ayth_user_confirmRegistration?: Resolver<Maybe<ResolversTypes['Auth_user']>, ParentType, ContextType, RequireFields<MutationAyth_User_ConfirmRegistrationArgs, 'id'>>;
  products_eav_attribute_add?: Resolver<ResolversTypes['Products_eav_attribute'], ParentType, ContextType, RequireFields<MutationProducts_Eav_Attribute_AddArgs, 'attr'>>;
  products_eav_attribute_delete?: Resolver<Maybe<ResolversTypes['IdResponse']>, ParentType, ContextType, Partial<MutationProducts_Eav_Attribute_DeleteArgs>>;
  products_eav_attribute_update?: Resolver<ResolversTypes['Products_eav_attribute'], ParentType, ContextType, Partial<MutationProducts_Eav_Attribute_UpdateArgs>>;
  products_eav_entity_add?: Resolver<ResolversTypes['Products_eav_entity'], ParentType, ContextType, RequireFields<MutationProducts_Eav_Entity_AddArgs, 'product'>>;
  products_eav_entity_delete?: Resolver<Maybe<ResolversTypes['IdResponse']>, ParentType, ContextType, RequireFields<MutationProducts_Eav_Entity_DeleteArgs, 'id'>>;
  products_eav_entity_update?: Resolver<ResolversTypes['Products_eav_entity'], ParentType, ContextType, RequireFields<MutationProducts_Eav_Entity_UpdateArgs, 'product'>>;
  products_order_add?: Resolver<ResolversTypes['Products_order'], ParentType, ContextType, RequireFields<MutationProducts_Order_AddArgs, 'order'>>;
  products_order_cancel?: Resolver<ResolversTypes['Products_order'], ParentType, ContextType, RequireFields<MutationProducts_Order_CancelArgs, 'id'>>;
  products_order_comlete?: Resolver<ResolversTypes['Products_order'], ParentType, ContextType, RequireFields<MutationProducts_Order_ComleteArgs, 'id'>>;
  products_order_confirm?: Resolver<ResolversTypes['Products_order'], ParentType, ContextType, RequireFields<MutationProducts_Order_ConfirmArgs, 'id'>>;
  products_order_delete?: Resolver<Maybe<ResolversTypes['IdResponse']>, ParentType, ContextType, RequireFields<MutationProducts_Order_DeleteArgs, 'id'>>;
  products_order_update?: Resolver<ResolversTypes['Products_order'], ParentType, ContextType, RequireFields<MutationProducts_Order_UpdateArgs, 'id' | 'order'>>;
  settings_category_add?: Resolver<ResolversTypes['Settings_category'], ParentType, ContextType, RequireFields<MutationSettings_Category_AddArgs, 'category'>>;
  settings_category_delete?: Resolver<ResolversTypes['IdResponse'], ParentType, ContextType, RequireFields<MutationSettings_Category_DeleteArgs, 'id'>>;
  settings_fullTextSearch_add?: Resolver<Maybe<ResolversTypes['IdResponse']>, ParentType, ContextType, RequireFields<MutationSettings_FullTextSearch_AddArgs, 'text'>>;
  settings_fullTextSearch_delete?: Resolver<Maybe<ResolversTypes['Complete']>, ParentType, ContextType, RequireFields<MutationSettings_FullTextSearch_DeleteArgs, 'text'>>;
  settings_group_add?: Resolver<ResolversTypes['Settings_group'], ParentType, ContextType, RequireFields<MutationSettings_Group_AddArgs, 'group'>>;
  settings_group_delete?: Resolver<ResolversTypes['IdResponse'], ParentType, ContextType, RequireFields<MutationSettings_Group_DeleteArgs, 'id'>>;
  uploadFile_add?: Resolver<ResolversTypes['UploadFile_success'], ParentType, ContextType, RequireFields<MutationUploadFile_AddArgs, 'file'>>;
  uploadFilesToGoogle?: Resolver<ResolversTypes['String'][], ParentType, ContextType, RequireFields<MutationUploadFilesToGoogleArgs, 'files' | 'path'>>;
  uploadFiles_add?: Resolver<ResolversTypes['UploadFile_success'], ParentType, ContextType, RequireFields<MutationUploadFiles_AddArgs, 'files' | 'path'>>;
}>;

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
  name: 'ObjectId';
}

export type Products_Eav_AttributeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_attribute'] = ResolversParentTypes['Products_eav_attribute']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  attr_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Maybe<ResolversTypes['Products_eav_attribute_values'][]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Attribute_ValuesResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_attribute_values'] = ResolversParentTypes['Products_eav_attribute_values']> = ResolversObject<{
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_EntityResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_entity'] = ResolversParentTypes['Products_eav_entity']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Products_eav_entity_discount'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  img_urls?: Resolver<ResolversTypes['String'][], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  searchTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Entity_DiscountResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_entity_discount'] = ResolversParentTypes['Products_eav_entity_discount']> = ResolversObject<{
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  oldPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Entity_GetResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_entity_get'] = ResolversParentTypes['Products_eav_entity_get']> = ResolversObject<{
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Products_eav_entity'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Entity_GlobalSearchResultResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_entity_globalSearchResult'] = ResolversParentTypes['Products_eav_entity_globalSearchResult']> = ResolversObject<{
  groups?: Resolver<ResolversTypes['Products_eav_entity_groupsResult'][], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['Products_eav_value_productsResult'][], ParentType, ContextType>;
  totalProducts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Entity_GroupsResultResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_entity_groupsResult'] = ResolversParentTypes['Products_eav_entity_groupsResult']> = ResolversObject<{
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Entity_ProductsResultResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_entity_productsResult'] = ResolversParentTypes['Products_eav_entity_productsResult']> = ResolversObject<{
  products?: Resolver<Maybe<ResolversTypes['Products_eav_value_productsResult']>[], ParentType, ContextType>;
  totalProducts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_ValueResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_value'] = ResolversParentTypes['Products_eav_value']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  attr_description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  attr_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attr_value?: Resolver<ResolversTypes['Products_eav_attribute_values'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Value_FilterResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_value_filter'] = ResolversParentTypes['Products_eav_value_filter']> = ResolversObject<{
  attr?: Resolver<ResolversTypes['Products_eav_value_filterName'], ParentType, ContextType>;
  values?: Resolver<ResolversTypes['Products_eav_value_filterData'][], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Value_FilterDataResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_value_filterData'] = ResolversParentTypes['Products_eav_value_filterData']> = ResolversObject<{
  attr_value?: Resolver<ResolversTypes['Products_eav_value_filterValue'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Value_FilterNameResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_value_filterName'] = ResolversParentTypes['Products_eav_value_filterName']> = ResolversObject<{
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Value_FilterValueResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_value_filterValue'] = ResolversParentTypes['Products_eav_value_filterValue']> = ResolversObject<{
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Value_FiltersResultResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_value_filtersResult'] = ResolversParentTypes['Products_eav_value_filtersResult']> = ResolversObject<{
  filters?: Resolver<ResolversTypes['Products_eav_value_filter'][], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Products_eav_value_price']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Value_PriceResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_value_price'] = ResolversParentTypes['Products_eav_value_price']> = ResolversObject<{
  max?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Value_ProductsFinelResultResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_value_productsFinelResult'] = ResolversParentTypes['Products_eav_value_productsFinelResult']> = ResolversObject<{
  products?: Resolver<ResolversTypes['Products_eav_value_productsResult'][], ParentType, ContextType>;
  totalProducts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Eav_Value_ProductsResultResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_eav_value_productsResult'] = ResolversParentTypes['Products_eav_value_productsResult']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Products_eav_entity_discount'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  img_urls?: Resolver<ResolversTypes['String'][], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_OrderResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_order'] = ResolversParentTypes['Products_order']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  adress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['Products_order_product'][], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  tel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Order_NewCountResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_order_newCount'] = ResolversParentTypes['Products_order_newCount']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Products_Order_ProductResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Products_order_product'] = ResolversParentTypes['Products_order_product']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  auth_role_getAll?: Resolver<ResolversTypes['Auth_role'][], ParentType, ContextType>;
  auth_user_checkToken?: Resolver<ResolversTypes['Auth_user_loginData'], ParentType, ContextType>;
  auth_user_getAll?: Resolver<ResolversTypes['Auth_user_paginationAll'], ParentType, ContextType, RequireFields<QueryAuth_User_GetAllArgs, 'limit' | 'page'>>;
  auth_user_getOne?: Resolver<ResolversTypes['Auth_user'], ParentType, ContextType, RequireFields<QueryAuth_User_GetOneArgs, 'id'>>;
  auth_user_search?: Resolver<ResolversTypes['Auth_user'][], ParentType, ContextType, RequireFields<QueryAuth_User_SearchArgs, 'text'>>;
  products_eavValue_filters_get?: Resolver<ResolversTypes['Products_eav_value_filtersResult'], ParentType, ContextType, RequireFields<QueryProducts_EavValue_Filters_GetArgs, 'filters'>>;
  products_eavValue_products_get?: Resolver<ResolversTypes['Products_eav_value_productsFinelResult'], ParentType, ContextType, RequireFields<QueryProducts_EavValue_Products_GetArgs, 'filters'>>;
  products_eavValue_value_get?: Resolver<ResolversTypes['Products_eav_value'][], ParentType, ContextType, RequireFields<QueryProducts_EavValue_Value_GetArgs, 'idProduct'>>;
  products_eav_attribute_get?: Resolver<ResolversTypes['Products_eav_attribute'][], ParentType, ContextType, RequireFields<QueryProducts_Eav_Attribute_GetArgs, 'group'>>;
  products_eav_entity_getById?: Resolver<ResolversTypes['Products_eav_entity_get'], ParentType, ContextType, RequireFields<QueryProducts_Eav_Entity_GetByIdArgs, 'id'>>;
  products_eav_entity_getByName?: Resolver<ResolversTypes['Products_eav_entity'][], ParentType, ContextType, RequireFields<QueryProducts_Eav_Entity_GetByNameArgs, 'name'>>;
  products_eav_entity_globalSearch?: Resolver<ResolversTypes['Products_eav_entity_globalSearchResult'], ParentType, ContextType, RequireFields<QueryProducts_Eav_Entity_GlobalSearchArgs, 'search'>>;
  products_order_getForNumber?: Resolver<Maybe<ResolversTypes['Products_order']>, ParentType, ContextType, RequireFields<QueryProducts_Order_GetForNumberArgs, 'orderNumber'>>;
  products_order_getNew?: Resolver<ResolversTypes['Products_order'][], ParentType, ContextType, RequireFields<QueryProducts_Order_GetNewArgs, 'pagination'>>;
  products_order_getNewCount?: Resolver<ResolversTypes['Products_order_newCount'], ParentType, ContextType>;
  settings_category_getAll?: Resolver<ResolversTypes['Settings_category'][], ParentType, ContextType>;
  settings_fullTextSearch_get?: Resolver<ResolversTypes['Settings_fullTextSearch_result'], ParentType, ContextType, RequireFields<QuerySettings_FullTextSearch_GetArgs, 'searchText'>>;
  settings_group_get?: Resolver<ResolversTypes['Settings_group'][], ParentType, ContextType, RequireFields<QuerySettings_Group_GetArgs, 'category'>>;
}>;

export type Settings_CategoryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Settings_category'] = ResolversParentTypes['Settings_category']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  img_path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Settings_FullTextSearchResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Settings_fullTextSearch'] = ResolversParentTypes['Settings_fullTextSearch']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Settings_FullTextSearch_GroupesResultResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Settings_fullTextSearch_groupesResult'] = ResolversParentTypes['Settings_fullTextSearch_groupesResult']> = ResolversObject<{
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Settings_FullTextSearch_ResultResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Settings_fullTextSearch_result'] = ResolversParentTypes['Settings_fullTextSearch_result']> = ResolversObject<{
  groupes?: Resolver<ResolversTypes['Settings_fullTextSearch_groupesResult'][], ParentType, ContextType>;
  phrases?: Resolver<ResolversTypes['String'][], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Settings_GroupResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Settings_group'] = ResolversParentTypes['Settings_group']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['DescriptionLang'], ParentType, ContextType>;
  img_path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFile_SuccessResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['UploadFile_success'] = ResolversParentTypes['UploadFile_success']> = ResolversObject<{
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Auth_role?: Auth_RoleResolvers<ContextType>;
  Auth_user?: Auth_UserResolvers<ContextType>;
  Auth_user_loginData?: Auth_User_LoginDataResolvers<ContextType>;
  Auth_user_paginationAll?: Auth_User_PaginationAllResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Complete?: CompleteResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DescriptionLang?: DescriptionLangResolvers<ContextType>;
  IdResponse?: IdResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjectId?: GraphQLScalarType;
  Products_eav_attribute?: Products_Eav_AttributeResolvers<ContextType>;
  Products_eav_attribute_values?: Products_Eav_Attribute_ValuesResolvers<ContextType>;
  Products_eav_entity?: Products_Eav_EntityResolvers<ContextType>;
  Products_eav_entity_discount?: Products_Eav_Entity_DiscountResolvers<ContextType>;
  Products_eav_entity_get?: Products_Eav_Entity_GetResolvers<ContextType>;
  Products_eav_entity_globalSearchResult?: Products_Eav_Entity_GlobalSearchResultResolvers<ContextType>;
  Products_eav_entity_groupsResult?: Products_Eav_Entity_GroupsResultResolvers<ContextType>;
  Products_eav_entity_productsResult?: Products_Eav_Entity_ProductsResultResolvers<ContextType>;
  Products_eav_value?: Products_Eav_ValueResolvers<ContextType>;
  Products_eav_value_filter?: Products_Eav_Value_FilterResolvers<ContextType>;
  Products_eav_value_filterData?: Products_Eav_Value_FilterDataResolvers<ContextType>;
  Products_eav_value_filterName?: Products_Eav_Value_FilterNameResolvers<ContextType>;
  Products_eav_value_filterValue?: Products_Eav_Value_FilterValueResolvers<ContextType>;
  Products_eav_value_filtersResult?: Products_Eav_Value_FiltersResultResolvers<ContextType>;
  Products_eav_value_price?: Products_Eav_Value_PriceResolvers<ContextType>;
  Products_eav_value_productsFinelResult?: Products_Eav_Value_ProductsFinelResultResolvers<ContextType>;
  Products_eav_value_productsResult?: Products_Eav_Value_ProductsResultResolvers<ContextType>;
  Products_order?: Products_OrderResolvers<ContextType>;
  Products_order_newCount?: Products_Order_NewCountResolvers<ContextType>;
  Products_order_product?: Products_Order_ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Settings_category?: Settings_CategoryResolvers<ContextType>;
  Settings_fullTextSearch?: Settings_FullTextSearchResolvers<ContextType>;
  Settings_fullTextSearch_groupesResult?: Settings_FullTextSearch_GroupesResultResolvers<ContextType>;
  Settings_fullTextSearch_result?: Settings_FullTextSearch_ResultResolvers<ContextType>;
  Settings_group?: Settings_GroupResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFile_success?: UploadFile_SuccessResolvers<ContextType>;
  Void?: GraphQLScalarType;
}>;

