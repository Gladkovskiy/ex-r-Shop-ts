import {ObjectId} from 'mongoose'
import {
  Products_EavValue_FiltersInput,
  Products_EavValue_ProductsInput,
  Products_Eav_Value,
  Products_Eav_Value_FiltersResult,
  Products_Eav_Value_ProductsFinelResult,
} from '../../../graphql/generated-types'

export interface IEavValueController {
  products_eavValue_products_get?: (
    filters: Products_EavValue_ProductsInput
  ) => Promise<Products_Eav_Value_ProductsFinelResult>

  products_eavValue_filters_get?: (
    filters: Products_EavValue_FiltersInput
  ) => Promise<Products_Eav_Value_FiltersResult>

  products_eavValue_value_get?: (
    idProduct: ObjectId
  ) => Promise<Products_Eav_Value[]>
}
