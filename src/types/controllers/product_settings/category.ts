import {ObjectId} from 'mongoose'
import {
  IdResponse,
  Settings_Category,
  Settings_Category_Add,
} from '../../../graphql/generated-types'

export interface ICategoryController {
  settings_category_getAll?: () => Promise<Settings_Category[]>
  settings_category_add?: (
    category: Settings_Category_Add
  ) => Promise<Settings_Category>
  settings_category_delete?: (id: ObjectId) => Promise<IdResponse>
}
