/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation Auth_user_login($login: String!, $pass: String!) {\n  user:auth_user_login(login: $login, pass: $pass) {\n    id\n    login\n    role\n    tel\n  }\n}\n": types.Auth_User_LoginDocument,
    "\nmutation Mutation {\n  auth_user_logout\n}\n": types.MutationDocument,
    "query Auth_user_checkToken {\n  user:auth_user_checkToken {\n    id\n    login\n    role\n    tel\n  }\n}": types.Auth_User_CheckTokenDocument,
    "\nmutation Auth_user_adminRegistration($user: Auth_user_adminRegistration!) {\n  name:auth_user_adminRegistration(user: $user) {\n    fullname\n  }\n}\n": types.Auth_User_AdminRegistrationDocument,
    "\nquery Auth_user_search($text: String!) {\n  users: auth_user_search(text: $text) {\n    fullname\n    mail\n    tel\n    _id\n  }\n}\n": types.Auth_User_SearchDocument,
    "\nmutation Auth_user_delete($authUserDeleteId: ObjectID!) {\n  auth_user_delete(id: $authUserDeleteId) {\n    id\n  }\n}\n": types.Auth_User_DeleteDocument,
    "\nquery Products_order_getNew($pagination: Pagination_input!) {\n  orders:products_order_getNew(pagination: $pagination) {\n    _id\n    adress\n    createdAt\n    fio\n    orderNumber\n    products {\n      name\n      price\n      product_id\n      quantity\n    }\n    status\n    tel\n    totalPrice\n    updatedAt\n  }\n}\n": types.Products_Order_GetNewDocument,
    "\nquery Products_order_getNewCount {\n  orderCount:products_order_getNewCount {\n    count\n  }\n}\n\n": types.Products_Order_GetNewCountDocument,
    "\nquery Products_order_getForNumber($orderNumber: Int!) {\n  order:products_order_getForNumber(orderNumber: $orderNumber) {\n    _id\n    adress\n    createdAt\n    fio\n    orderNumber\n    products {\n      name\n      price\n      product_id\n      quantity\n    }\n    status\n    tel\n    totalPrice\n    updatedAt\n  }\n}\n": types.Products_Order_GetForNumberDocument,
    "\nmutation Products_order_add($order: Products_order_input!) {\n  order:products_order_add(order: $order) {\n    _id\n    adress\n    createdAt\n    fio\n    orderNumber\n    products {\n      name\n      price\n      product_id\n      quantity\n    }\n    status\n    tel\n    totalPrice\n    updatedAt\n  }\n}\n": types.Products_Order_AddDocument,
    "\nmutation Products_order_cancel($productsOrderCancelId: ObjectID!) {\n  order:products_order_cancel(id: $productsOrderCancelId) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n": types.Products_Order_CancelDocument,
    "\nmutation Products_order_comlete($productsOrderComleteId: ObjectID!) {\n  order: products_order_comlete(id: $productsOrderComleteId) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n": types.Products_Order_ComleteDocument,
    "\nmutation Products_order_confirm($productsOrderConfirmId: ObjectID!) {\n  order: products_order_confirm(id: $productsOrderConfirmId) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n": types.Products_Order_ConfirmDocument,
    "\nmutation Products_order_delete($productsOrderDeleteId: ObjectID!) {\n  order: products_order_delete(id: $productsOrderDeleteId) {\n    id\n  }\n}\n": types.Products_Order_DeleteDocument,
    "\nmutation Products_order_update($productsOrderUpdateId: ObjectID!, $order: Products_order_input!) {\n  order: products_order_update(id: $productsOrderUpdateId, order: $order) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n": types.Products_Order_UpdateDocument,
    "\nmutation Products_eav_attribute_add($attr: Products_eav_attributeInput!) {\n  attribute:products_eav_attribute_add(attr: $attr) {\n    _id\n    attr_name\n    description {\n      en\n      ru\n    }\n    group\n    values {\n      description {\n        en\n        ru\n      }\n      value\n    }\n  }\n}\n": types.Products_Eav_Attribute_AddDocument,
    "query Products_eav_attribute_get($group: String!) {\n  attrs:products_eav_attribute_get(group: $group) {\n    _id\n    attr_name\n    description {\n      en\n      ru\n    }\n    group\n    values {\n      description {\n        en\n        ru\n      }\n      value\n    }\n  }\n}": types.Products_Eav_Attribute_GetDocument,
    "\nmutation Products_eav_attribute_delete($productsEavAttributeDeleteId: ObjectID) {\n  delete:products_eav_attribute_delete(id: $productsEavAttributeDeleteId) {\n    id\n  }\n}\n": types.Products_Eav_Attribute_DeleteDocument,
    "\nmutation Products_eav_attribute_update($productsEavAttributeUpdateId: ObjectID, $values: [Products_eav_attribute_valuesInput!]) {\n  attr:products_eav_attribute_update(id: $productsEavAttributeUpdateId, values: $values) {\n    _id\n    values {\n      description {\n        en\n        ru\n      }\n      value\n    }\n  }\n}\n": types.Products_Eav_Attribute_UpdateDocument,
    "\nquery Products_eav_entity_getByName($name: String!) {\n  products:products_eav_entity_getByName(name: $name) {\n    _id\n    description {\n      en\n      ru\n    }\n    discount {\n      active\n      oldPrice\n    }\n    group\n    img_urls\n    name {\n      en\n      ru\n    }\n    quantity\n    rating\n    searchTag\n  }\n}\n": types.Products_Eav_Entity_GetByNameDocument,
    "\nquery Products_eav_entity_getById($productsEavEntityGetByIdId: ObjectID!) {\n  product:products_eav_entity_getById(id: $productsEavEntityGetByIdId) {\n    price\n    product {\n      _id\n      description {\n        ru\n        en\n      }\n      discount {\n        active\n        oldPrice\n      }\n      group\n      img_urls\n      name {\n        en\n        ru\n      }\n      quantity\n      rating\n      searchTag\n    }\n  }\n}\n": types.Products_Eav_Entity_GetByIdDocument,
    "\nmutation Products_eav_entity_add($product: Products_eav_entity_input!) {\n  product:products_eav_entity_add(product: $product) {\n    _id\n    img_urls\n    name {\n      en\n      ru\n    }\n  }\n}\n": types.Products_Eav_Entity_AddDocument,
    "\nmutation Products_eav_entity_delete($productsEavEntityDeleteId: ObjectID!) {\n  products_eav_entity_delete(id: $productsEavEntityDeleteId) {\n    id\n  }\n}\n": types.Products_Eav_Entity_DeleteDocument,
    "\nmutation Products_eav_entity_update($product: Products_eav_entity_update_input!) {\n  product:products_eav_entity_update(product: $product) {\n    _id\n    description {\n      en\n      ru\n    }\n    discount {\n      active\n      oldPrice\n    }\n    group\n    img_urls\n    name {\n      en\n      ru\n    }\n    quantity\n    rating\n    searchTag\n  }\n}\n": types.Products_Eav_Entity_UpdateDocument,
    "\nquery Products_eavValue_products_get($filters: Products_eavValue_productsInput!) {\n  allProducts:products_eavValue_products_get(filters: $filters) {\n    totalProducts\n    products {\n      _id\n      img_urls\n      discount {\n        active\n        oldPrice\n      }\n      price\n      name {\n        en\n        ru\n      }\n      rating\n      quantity\n    }\n  }\n}\n": types.Products_EavValue_Products_GetDocument,
    "\nquery Products_eavValue_filters_get($filters: Products_eavValue_filtersInput!) {\n  filtersGet:products_eavValue_filters_get(filters: $filters) {\n    price {\n      max\n      min\n    }\n    filters {\n      attr {\n        description {\n          en\n          ru\n        }\n        name\n      }\n      values {\n        count\n        attr_value {\n          description {\n            en\n            ru\n          }\n          value\n        }\n      }\n    }\n  }\n}\n": types.Products_EavValue_Filters_GetDocument,
    "\nquery Products_eavValue_value_get($idProduct: ObjectID!) {\n  values:products_eavValue_value_get(idProduct: $idProduct) {\n    attr_description {\n      en\n      ru\n    }\n    attr_value {\n      description {\n        en\n        ru\n      }\n    }\n  }\n}\n": types.Products_EavValue_Value_GetDocument,
    "\nquery ExampleQuery($search: Products_eav_entity_searchProducts_input!) {\n  search:products_eav_entity_globalSearch(search: $search) {\n    groups {\n      description {\n        ru\n        en\n      }\n      type\n    }\n    products {\n      _id\n      discount {\n        active\n        oldPrice\n      }\n      img_urls\n      name {\n        en\n        ru\n      }\n      price\n      quantity\n      rating\n    }\n    totalProducts\n  }\n}\n\n": types.ExampleQueryDocument,
    "\nquery Auth_role_getAll {\n  roles:auth_role_getAll {\n    type\n  }\n}\n": types.Auth_Role_GetAllDocument,
    "\nquery Settings_fullTextSearch_get($searchText: String!) {\n results:settings_fullTextSearch_get(searchText: $searchText) {\n    groupes {\n      description {\n        en\n        ru\n      }\n      type\n    }\n    phrases\n  }\n}\n": types.Settings_FullTextSearch_GetDocument,
    "\nmutation Settings_category_add($category: Settings_category_add!) {\n  category:settings_category_add(category: $category) {\n    _id\n    description {\n      en\n      ru\n    }\n    img_path\n    type\n  }\n}\n": types.Settings_Category_AddDocument,
    "\nmutation Settings_category_delete($settingsCategoryDeleteId: ObjectID!) {\n  res:settings_category_delete(id: $settingsCategoryDeleteId) {\n    id\n  }\n}\n\n": types.Settings_Category_DeleteDocument,
    "\nquery Settings_category_getAll {\n  categories: settings_category_getAll {\n    _id\n    description {\n      en\n      ru\n    }\n    img_path\n    type\n  }\n}\n": types.Settings_Category_GetAllDocument,
    "\nmutation Settings_group_add($group: Settings_group_add!) {\n  group:settings_group_add(group: $group) {\n    _id\n    category\n    description {\n      en\n      ru\n    }\n    img_path\n    type\n  }\n}\n": types.Settings_Group_AddDocument,
    "\nmutation Settings_group_delete($settingsGroupDeleteId: ObjectID!) {\n  res:settings_group_delete(id: $settingsGroupDeleteId) {\n    id\n  }\n}\n": types.Settings_Group_DeleteDocument,
    "\nquery Settings_group_get($category: String!) {\n  groups:settings_group_get(category: $category) {\n    _id\n    description {\n      en\n      ru\n    }\n    type\n    img_path\n  }\n}\n": types.Settings_Group_GetDocument,
    "\nmutation UploadFile_add($file: UploadFile_add!) {\n  uploadFile_add(file: $file) {\n    errorMessage\n    success\n  }\n}\n": types.UploadFile_AddDocument,
    "\nmutation UploadFiles_add($files: [Upload!]!, $path: [String!]!) {\n  uploadFiles_add(files: $files, path: $path) {\n    errorMessage\n    success\n  }\n}\n": types.UploadFiles_AddDocument,
    "\nmutation UploadFilesToGoogle($files: [Upload!]!, $path: SaveType!) {\n  uploadFilesToGoogle(files: $files, path: $path)\n}\n  ": types.UploadFilesToGoogleDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Auth_user_login($login: String!, $pass: String!) {\n  user:auth_user_login(login: $login, pass: $pass) {\n    id\n    login\n    role\n    tel\n  }\n}\n"): (typeof documents)["\nmutation Auth_user_login($login: String!, $pass: String!) {\n  user:auth_user_login(login: $login, pass: $pass) {\n    id\n    login\n    role\n    tel\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Mutation {\n  auth_user_logout\n}\n"): (typeof documents)["\nmutation Mutation {\n  auth_user_logout\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Auth_user_checkToken {\n  user:auth_user_checkToken {\n    id\n    login\n    role\n    tel\n  }\n}"): (typeof documents)["query Auth_user_checkToken {\n  user:auth_user_checkToken {\n    id\n    login\n    role\n    tel\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Auth_user_adminRegistration($user: Auth_user_adminRegistration!) {\n  name:auth_user_adminRegistration(user: $user) {\n    fullname\n  }\n}\n"): (typeof documents)["\nmutation Auth_user_adminRegistration($user: Auth_user_adminRegistration!) {\n  name:auth_user_adminRegistration(user: $user) {\n    fullname\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Auth_user_search($text: String!) {\n  users: auth_user_search(text: $text) {\n    fullname\n    mail\n    tel\n    _id\n  }\n}\n"): (typeof documents)["\nquery Auth_user_search($text: String!) {\n  users: auth_user_search(text: $text) {\n    fullname\n    mail\n    tel\n    _id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Auth_user_delete($authUserDeleteId: ObjectID!) {\n  auth_user_delete(id: $authUserDeleteId) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation Auth_user_delete($authUserDeleteId: ObjectID!) {\n  auth_user_delete(id: $authUserDeleteId) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Products_order_getNew($pagination: Pagination_input!) {\n  orders:products_order_getNew(pagination: $pagination) {\n    _id\n    adress\n    createdAt\n    fio\n    orderNumber\n    products {\n      name\n      price\n      product_id\n      quantity\n    }\n    status\n    tel\n    totalPrice\n    updatedAt\n  }\n}\n"): (typeof documents)["\nquery Products_order_getNew($pagination: Pagination_input!) {\n  orders:products_order_getNew(pagination: $pagination) {\n    _id\n    adress\n    createdAt\n    fio\n    orderNumber\n    products {\n      name\n      price\n      product_id\n      quantity\n    }\n    status\n    tel\n    totalPrice\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Products_order_getNewCount {\n  orderCount:products_order_getNewCount {\n    count\n  }\n}\n\n"): (typeof documents)["\nquery Products_order_getNewCount {\n  orderCount:products_order_getNewCount {\n    count\n  }\n}\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Products_order_getForNumber($orderNumber: Int!) {\n  order:products_order_getForNumber(orderNumber: $orderNumber) {\n    _id\n    adress\n    createdAt\n    fio\n    orderNumber\n    products {\n      name\n      price\n      product_id\n      quantity\n    }\n    status\n    tel\n    totalPrice\n    updatedAt\n  }\n}\n"): (typeof documents)["\nquery Products_order_getForNumber($orderNumber: Int!) {\n  order:products_order_getForNumber(orderNumber: $orderNumber) {\n    _id\n    adress\n    createdAt\n    fio\n    orderNumber\n    products {\n      name\n      price\n      product_id\n      quantity\n    }\n    status\n    tel\n    totalPrice\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_order_add($order: Products_order_input!) {\n  order:products_order_add(order: $order) {\n    _id\n    adress\n    createdAt\n    fio\n    orderNumber\n    products {\n      name\n      price\n      product_id\n      quantity\n    }\n    status\n    tel\n    totalPrice\n    updatedAt\n  }\n}\n"): (typeof documents)["\nmutation Products_order_add($order: Products_order_input!) {\n  order:products_order_add(order: $order) {\n    _id\n    adress\n    createdAt\n    fio\n    orderNumber\n    products {\n      name\n      price\n      product_id\n      quantity\n    }\n    status\n    tel\n    totalPrice\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_order_cancel($productsOrderCancelId: ObjectID!) {\n  order:products_order_cancel(id: $productsOrderCancelId) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\nmutation Products_order_cancel($productsOrderCancelId: ObjectID!) {\n  order:products_order_cancel(id: $productsOrderCancelId) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_order_comlete($productsOrderComleteId: ObjectID!) {\n  order: products_order_comlete(id: $productsOrderComleteId) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\nmutation Products_order_comlete($productsOrderComleteId: ObjectID!) {\n  order: products_order_comlete(id: $productsOrderComleteId) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_order_confirm($productsOrderConfirmId: ObjectID!) {\n  order: products_order_confirm(id: $productsOrderConfirmId) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\nmutation Products_order_confirm($productsOrderConfirmId: ObjectID!) {\n  order: products_order_confirm(id: $productsOrderConfirmId) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_order_delete($productsOrderDeleteId: ObjectID!) {\n  order: products_order_delete(id: $productsOrderDeleteId) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation Products_order_delete($productsOrderDeleteId: ObjectID!) {\n  order: products_order_delete(id: $productsOrderDeleteId) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_order_update($productsOrderUpdateId: ObjectID!, $order: Products_order_input!) {\n  order: products_order_update(id: $productsOrderUpdateId, order: $order) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\nmutation Products_order_update($productsOrderUpdateId: ObjectID!, $order: Products_order_input!) {\n  order: products_order_update(id: $productsOrderUpdateId, order: $order) {\n    _id\n    orderNumber\n    fio\n    tel\n    adress\n    status\n    products {\n      product_id\n      name\n      price\n      quantity\n    }\n    totalPrice\n    createdAt\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_eav_attribute_add($attr: Products_eav_attributeInput!) {\n  attribute:products_eav_attribute_add(attr: $attr) {\n    _id\n    attr_name\n    description {\n      en\n      ru\n    }\n    group\n    values {\n      description {\n        en\n        ru\n      }\n      value\n    }\n  }\n}\n"): (typeof documents)["\nmutation Products_eav_attribute_add($attr: Products_eav_attributeInput!) {\n  attribute:products_eav_attribute_add(attr: $attr) {\n    _id\n    attr_name\n    description {\n      en\n      ru\n    }\n    group\n    values {\n      description {\n        en\n        ru\n      }\n      value\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Products_eav_attribute_get($group: String!) {\n  attrs:products_eav_attribute_get(group: $group) {\n    _id\n    attr_name\n    description {\n      en\n      ru\n    }\n    group\n    values {\n      description {\n        en\n        ru\n      }\n      value\n    }\n  }\n}"): (typeof documents)["query Products_eav_attribute_get($group: String!) {\n  attrs:products_eav_attribute_get(group: $group) {\n    _id\n    attr_name\n    description {\n      en\n      ru\n    }\n    group\n    values {\n      description {\n        en\n        ru\n      }\n      value\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_eav_attribute_delete($productsEavAttributeDeleteId: ObjectID) {\n  delete:products_eav_attribute_delete(id: $productsEavAttributeDeleteId) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation Products_eav_attribute_delete($productsEavAttributeDeleteId: ObjectID) {\n  delete:products_eav_attribute_delete(id: $productsEavAttributeDeleteId) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_eav_attribute_update($productsEavAttributeUpdateId: ObjectID, $values: [Products_eav_attribute_valuesInput!]) {\n  attr:products_eav_attribute_update(id: $productsEavAttributeUpdateId, values: $values) {\n    _id\n    values {\n      description {\n        en\n        ru\n      }\n      value\n    }\n  }\n}\n"): (typeof documents)["\nmutation Products_eav_attribute_update($productsEavAttributeUpdateId: ObjectID, $values: [Products_eav_attribute_valuesInput!]) {\n  attr:products_eav_attribute_update(id: $productsEavAttributeUpdateId, values: $values) {\n    _id\n    values {\n      description {\n        en\n        ru\n      }\n      value\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Products_eav_entity_getByName($name: String!) {\n  products:products_eav_entity_getByName(name: $name) {\n    _id\n    description {\n      en\n      ru\n    }\n    discount {\n      active\n      oldPrice\n    }\n    group\n    img_urls\n    name {\n      en\n      ru\n    }\n    quantity\n    rating\n    searchTag\n  }\n}\n"): (typeof documents)["\nquery Products_eav_entity_getByName($name: String!) {\n  products:products_eav_entity_getByName(name: $name) {\n    _id\n    description {\n      en\n      ru\n    }\n    discount {\n      active\n      oldPrice\n    }\n    group\n    img_urls\n    name {\n      en\n      ru\n    }\n    quantity\n    rating\n    searchTag\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Products_eav_entity_getById($productsEavEntityGetByIdId: ObjectID!) {\n  product:products_eav_entity_getById(id: $productsEavEntityGetByIdId) {\n    price\n    product {\n      _id\n      description {\n        ru\n        en\n      }\n      discount {\n        active\n        oldPrice\n      }\n      group\n      img_urls\n      name {\n        en\n        ru\n      }\n      quantity\n      rating\n      searchTag\n    }\n  }\n}\n"): (typeof documents)["\nquery Products_eav_entity_getById($productsEavEntityGetByIdId: ObjectID!) {\n  product:products_eav_entity_getById(id: $productsEavEntityGetByIdId) {\n    price\n    product {\n      _id\n      description {\n        ru\n        en\n      }\n      discount {\n        active\n        oldPrice\n      }\n      group\n      img_urls\n      name {\n        en\n        ru\n      }\n      quantity\n      rating\n      searchTag\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_eav_entity_add($product: Products_eav_entity_input!) {\n  product:products_eav_entity_add(product: $product) {\n    _id\n    img_urls\n    name {\n      en\n      ru\n    }\n  }\n}\n"): (typeof documents)["\nmutation Products_eav_entity_add($product: Products_eav_entity_input!) {\n  product:products_eav_entity_add(product: $product) {\n    _id\n    img_urls\n    name {\n      en\n      ru\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_eav_entity_delete($productsEavEntityDeleteId: ObjectID!) {\n  products_eav_entity_delete(id: $productsEavEntityDeleteId) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation Products_eav_entity_delete($productsEavEntityDeleteId: ObjectID!) {\n  products_eav_entity_delete(id: $productsEavEntityDeleteId) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Products_eav_entity_update($product: Products_eav_entity_update_input!) {\n  product:products_eav_entity_update(product: $product) {\n    _id\n    description {\n      en\n      ru\n    }\n    discount {\n      active\n      oldPrice\n    }\n    group\n    img_urls\n    name {\n      en\n      ru\n    }\n    quantity\n    rating\n    searchTag\n  }\n}\n"): (typeof documents)["\nmutation Products_eav_entity_update($product: Products_eav_entity_update_input!) {\n  product:products_eav_entity_update(product: $product) {\n    _id\n    description {\n      en\n      ru\n    }\n    discount {\n      active\n      oldPrice\n    }\n    group\n    img_urls\n    name {\n      en\n      ru\n    }\n    quantity\n    rating\n    searchTag\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Products_eavValue_products_get($filters: Products_eavValue_productsInput!) {\n  allProducts:products_eavValue_products_get(filters: $filters) {\n    totalProducts\n    products {\n      _id\n      img_urls\n      discount {\n        active\n        oldPrice\n      }\n      price\n      name {\n        en\n        ru\n      }\n      rating\n      quantity\n    }\n  }\n}\n"): (typeof documents)["\nquery Products_eavValue_products_get($filters: Products_eavValue_productsInput!) {\n  allProducts:products_eavValue_products_get(filters: $filters) {\n    totalProducts\n    products {\n      _id\n      img_urls\n      discount {\n        active\n        oldPrice\n      }\n      price\n      name {\n        en\n        ru\n      }\n      rating\n      quantity\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Products_eavValue_filters_get($filters: Products_eavValue_filtersInput!) {\n  filtersGet:products_eavValue_filters_get(filters: $filters) {\n    price {\n      max\n      min\n    }\n    filters {\n      attr {\n        description {\n          en\n          ru\n        }\n        name\n      }\n      values {\n        count\n        attr_value {\n          description {\n            en\n            ru\n          }\n          value\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery Products_eavValue_filters_get($filters: Products_eavValue_filtersInput!) {\n  filtersGet:products_eavValue_filters_get(filters: $filters) {\n    price {\n      max\n      min\n    }\n    filters {\n      attr {\n        description {\n          en\n          ru\n        }\n        name\n      }\n      values {\n        count\n        attr_value {\n          description {\n            en\n            ru\n          }\n          value\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Products_eavValue_value_get($idProduct: ObjectID!) {\n  values:products_eavValue_value_get(idProduct: $idProduct) {\n    attr_description {\n      en\n      ru\n    }\n    attr_value {\n      description {\n        en\n        ru\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery Products_eavValue_value_get($idProduct: ObjectID!) {\n  values:products_eavValue_value_get(idProduct: $idProduct) {\n    attr_description {\n      en\n      ru\n    }\n    attr_value {\n      description {\n        en\n        ru\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery ExampleQuery($search: Products_eav_entity_searchProducts_input!) {\n  search:products_eav_entity_globalSearch(search: $search) {\n    groups {\n      description {\n        ru\n        en\n      }\n      type\n    }\n    products {\n      _id\n      discount {\n        active\n        oldPrice\n      }\n      img_urls\n      name {\n        en\n        ru\n      }\n      price\n      quantity\n      rating\n    }\n    totalProducts\n  }\n}\n\n"): (typeof documents)["\nquery ExampleQuery($search: Products_eav_entity_searchProducts_input!) {\n  search:products_eav_entity_globalSearch(search: $search) {\n    groups {\n      description {\n        ru\n        en\n      }\n      type\n    }\n    products {\n      _id\n      discount {\n        active\n        oldPrice\n      }\n      img_urls\n      name {\n        en\n        ru\n      }\n      price\n      quantity\n      rating\n    }\n    totalProducts\n  }\n}\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Auth_role_getAll {\n  roles:auth_role_getAll {\n    type\n  }\n}\n"): (typeof documents)["\nquery Auth_role_getAll {\n  roles:auth_role_getAll {\n    type\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Settings_fullTextSearch_get($searchText: String!) {\n results:settings_fullTextSearch_get(searchText: $searchText) {\n    groupes {\n      description {\n        en\n        ru\n      }\n      type\n    }\n    phrases\n  }\n}\n"): (typeof documents)["\nquery Settings_fullTextSearch_get($searchText: String!) {\n results:settings_fullTextSearch_get(searchText: $searchText) {\n    groupes {\n      description {\n        en\n        ru\n      }\n      type\n    }\n    phrases\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Settings_category_add($category: Settings_category_add!) {\n  category:settings_category_add(category: $category) {\n    _id\n    description {\n      en\n      ru\n    }\n    img_path\n    type\n  }\n}\n"): (typeof documents)["\nmutation Settings_category_add($category: Settings_category_add!) {\n  category:settings_category_add(category: $category) {\n    _id\n    description {\n      en\n      ru\n    }\n    img_path\n    type\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Settings_category_delete($settingsCategoryDeleteId: ObjectID!) {\n  res:settings_category_delete(id: $settingsCategoryDeleteId) {\n    id\n  }\n}\n\n"): (typeof documents)["\nmutation Settings_category_delete($settingsCategoryDeleteId: ObjectID!) {\n  res:settings_category_delete(id: $settingsCategoryDeleteId) {\n    id\n  }\n}\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Settings_category_getAll {\n  categories: settings_category_getAll {\n    _id\n    description {\n      en\n      ru\n    }\n    img_path\n    type\n  }\n}\n"): (typeof documents)["\nquery Settings_category_getAll {\n  categories: settings_category_getAll {\n    _id\n    description {\n      en\n      ru\n    }\n    img_path\n    type\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Settings_group_add($group: Settings_group_add!) {\n  group:settings_group_add(group: $group) {\n    _id\n    category\n    description {\n      en\n      ru\n    }\n    img_path\n    type\n  }\n}\n"): (typeof documents)["\nmutation Settings_group_add($group: Settings_group_add!) {\n  group:settings_group_add(group: $group) {\n    _id\n    category\n    description {\n      en\n      ru\n    }\n    img_path\n    type\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Settings_group_delete($settingsGroupDeleteId: ObjectID!) {\n  res:settings_group_delete(id: $settingsGroupDeleteId) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation Settings_group_delete($settingsGroupDeleteId: ObjectID!) {\n  res:settings_group_delete(id: $settingsGroupDeleteId) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Settings_group_get($category: String!) {\n  groups:settings_group_get(category: $category) {\n    _id\n    description {\n      en\n      ru\n    }\n    type\n    img_path\n  }\n}\n"): (typeof documents)["\nquery Settings_group_get($category: String!) {\n  groups:settings_group_get(category: $category) {\n    _id\n    description {\n      en\n      ru\n    }\n    type\n    img_path\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UploadFile_add($file: UploadFile_add!) {\n  uploadFile_add(file: $file) {\n    errorMessage\n    success\n  }\n}\n"): (typeof documents)["\nmutation UploadFile_add($file: UploadFile_add!) {\n  uploadFile_add(file: $file) {\n    errorMessage\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UploadFiles_add($files: [Upload!]!, $path: [String!]!) {\n  uploadFiles_add(files: $files, path: $path) {\n    errorMessage\n    success\n  }\n}\n"): (typeof documents)["\nmutation UploadFiles_add($files: [Upload!]!, $path: [String!]!) {\n  uploadFiles_add(files: $files, path: $path) {\n    errorMessage\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UploadFilesToGoogle($files: [Upload!]!, $path: SaveType!) {\n  uploadFilesToGoogle(files: $files, path: $path)\n}\n  "): (typeof documents)["\nmutation UploadFilesToGoogle($files: [Upload!]!, $path: SaveType!) {\n  uploadFilesToGoogle(files: $files, path: $path)\n}\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;