import {ObjectId} from 'mongoose'
import {
  IdResponse,
  Settings_Group,
  Settings_Group_Add,
} from '../../../graphql/generated-types'

export interface IGropuController {
  settings_group_get?: (subcategory: string) => Promise<Settings_Group[]>
  settings_group_add?: (group: Settings_Group_Add) => Promise<Settings_Group>
  settings_group_delete?: (id: ObjectId) => Promise<IdResponse>
}
