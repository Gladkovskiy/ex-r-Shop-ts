import {Resolvers} from '../../generated-types'

const categoryResolver: Resolvers = {
  Query: {
    settings_category_getAll: (_, __, {controllers: {categoryController}}) =>
      categoryController.settings_category_getAll(),
  },
  Mutation: {
    settings_category_add: (
      _,
      {category},
      {controllers: {categoryController}}
    ) => categoryController.settings_category_add(category),
    settings_category_delete: (_, {id}, {controllers: {categoryController}}) =>
      categoryController.settings_category_delete(id),
  },
}

export default categoryResolver
