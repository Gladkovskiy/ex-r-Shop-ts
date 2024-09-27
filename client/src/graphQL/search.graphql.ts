import {gql} from './__generated__'

export const GET_SEARCH = gql(`
query Settings_fullTextSearch_get($searchText: String!) {
 results:settings_fullTextSearch_get(searchText: $searchText) {
    groupes {
      description {
        en
        ru
      }
      type
    }
    phrases
  }
}
`)
