export enum Routes {
  MAIN = '/',
  CATEGORY = 'category/:params',
  PRODUCT = 'product/:id',
  PRODUCTS = 'group/:params',
  SEARCH = 'search/:id',
  ADMIN = 'administrator',
  OPERATOR = 'operator',
  MY_ORDERS = 'my_orders',
  PERSONAL_DATA = 'personal_data',
  ERROR = 'error',
  DISCOUNT = 'discount/:id',
}

export enum RoutesForNav {
  CATEGORY = 'category/',
  DISCOUNT = 'discount/',
  PRODUCTS = '/group/',
  PRODUCT = '/product/',
  SEARCH = '/search/',
}
