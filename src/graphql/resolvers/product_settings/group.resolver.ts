import {Resolvers} from '../../generated-types'

const groupResolver: Resolvers = {
  Query: {
    settings_group_get: (_, {category}, {controllers: {groupController}}) =>
      groupController.settings_group_get(category),
  },
  Mutation: {
    settings_group_add: (_, {group}, {controllers: {groupController}}) =>
      groupController.settings_group_add(group),
    settings_group_delete: (_, {id}, {controllers: {groupController}}) =>
      groupController.settings_group_delete(id),
  },
}

export default groupResolver
