import {ObjectId} from 'mongoose'
import {
  IdResponse,
  Products_Eav_Entity,
  Products_Eav_Entity_Get,
  Products_Eav_Entity_GlobalSearchResult,
  Products_Eav_Entity_Input,
  Products_Eav_Entity_SearchProducts_Input,
  Products_Eav_Entity_Update_Input,
} from '../../../graphql/generated-types'

export interface IEavEntityController {
  products_eav_entity_add?: (
    product: Products_Eav_Entity_Input
  ) => Promise<Products_Eav_Entity>

  products_eav_entity_delete?: (id: ObjectId) => Promise<IdResponse>

  products_eav_entity_update?: (
    product: Products_Eav_Entity_Update_Input
  ) => Promise<Products_Eav_Entity>

  products_eav_entity_getByName?: (
    name: string
  ) => Promise<Products_Eav_Entity[]>

  products_eav_entity_getById?: (
    id: ObjectId
  ) => Promise<Products_Eav_Entity_Get>

  products_eav_entity_globalSearch?: (
    search: Products_Eav_Entity_SearchProducts_Input
  ) => Promise<Products_Eav_Entity_GlobalSearchResult>
}
