import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'

import en_mainLayout from '../i18n/en/mainLayout.json'
import ru_mainLayout from '../i18n/ru/mainLayout.json'

import en_menu from '../i18n/en/menu.json'
import ru_menu from '../i18n/ru/menu.json'

import en_products from '../i18n/en/products.json'
import ru_products from '../i18n/ru/products.json'

import en_product from '../i18n/en/product.json'
import ru_product from '../i18n/ru/product.json'

import en_administration from '../i18n/en/administration.json'
import ru_administration from '../i18n/ru/administration.json'

import en_common from './en/common.json'
import ru_common from './ru/common.json'

const resources = {
  en: {
    mainLayout: en_mainLayout,
    menu: en_menu,
    products: en_products,
    product: en_product,
    administration: en_administration,
    common: en_common,
  },
  ru: {
    mainLayout: ru_mainLayout,
    menu: ru_menu,
    products: ru_products,
    product: ru_product,
    administration: ru_administration,
    common: ru_common,
  },
}

i18next.use(initReactI18next).init({
  lng: 'ru',
  debug: true,
  resources,
})
