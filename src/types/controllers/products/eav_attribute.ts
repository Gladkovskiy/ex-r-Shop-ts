import {ObjectId} from 'mongoose'
import {
  IdResponse,
  Products_Eav_Attribute,
  Products_Eav_AttributeInput,
  Products_Eav_Attribute_ValuesInput,
} from '../../../graphql/generated-types'

export interface IEavAttributeController {
  products_eav_attribute_get?: (
    group: string
  ) => Promise<Products_Eav_Attribute[]>

  products_eav_attribute_add?: (
    attr: Products_Eav_AttributeInput
  ) => Promise<Products_Eav_Attribute>

  products_eav_attribute_update?: (
    id: ObjectId,
    values: Products_Eav_Attribute_ValuesInput[]
  ) => Promise<Products_Eav_Attribute>

  products_eav_attribute_delete?: (id: ObjectId) => Promise<IdResponse>
}
