import {Resolvers} from '../../generated-types'

const eavAttributeResolver: Resolvers = {
  Query: {
    products_eav_attribute_get: (
      _,
      {group},
      {controllers: {eavAttributeController}}
    ) => eavAttributeController.products_eav_attribute_get(group),
  },
  Mutation: {
    products_eav_attribute_add: (
      _,
      {attr},
      {controllers: {eavAttributeController}}
    ) => eavAttributeController.products_eav_attribute_add(attr),

    products_eav_attribute_update: (
      _,
      {id, values},
      {controllers: {eavAttributeController}}
    ) => eavAttributeController.products_eav_attribute_update(id, values),

    products_eav_attribute_delete: (
      _,
      {id},
      {controllers: {eavAttributeController}}
    ) => eavAttributeController.products_eav_attribute_delete(id),
  },
}

export default eavAttributeResolver
