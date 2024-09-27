import {Resolvers} from '../../generated-types'

const fullTextSearchResolver: Resolvers = {
  Query: {
    settings_fullTextSearch_get: (
      _,
      {searchText},
      {controllers: {fullTextSearchController}}
    ) => fullTextSearchController.settings_fullTextSearch_get(searchText),
  },
  Mutation: {
    settings_fullTextSearch_add: (
      _,
      {text},
      {controllers: {fullTextSearchController}}
    ) => fullTextSearchController.settings_fullTextSearch_add(text),
    settings_fullTextSearch_delete: (
      _,
      {text},
      {controllers: {fullTextSearchController}}
    ) => fullTextSearchController.settings_fullTextSearch_delete(text),
  },
}

export default fullTextSearchResolver
