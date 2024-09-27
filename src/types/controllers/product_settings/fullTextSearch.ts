import {
  Complete,
  IdResponse,
  Settings_FullTextSearch_Result,
} from '../../../graphql/generated-types'

export interface IFullTextSearchController {
  settings_fullTextSearch_get?: (
    searchText: string
  ) => Promise<Settings_FullTextSearch_Result>
  settings_fullTextSearch_add?: (text: string) => Promise<IdResponse>
  settings_fullTextSearch_delete?: (text: string) => Promise<Complete>
}
