import {Resolvers} from '../../generated-types'

const eavEntityResolver: Resolvers = {
  Query: {
    products_eav_entity_getById: (
      _,
      {id},
      {controllers: {eavEntityController}}
    ) => eavEntityController.products_eav_entity_getById(id),

    products_eav_entity_getByName: (
      _,
      {name},
      {controllers: {eavEntityController}}
    ) => eavEntityController.products_eav_entity_getByName(name),

    products_eav_entity_globalSearch: (
      _,
      {search},
      {controllers: {eavEntityController}}
    ) => eavEntityController.products_eav_entity_globalSearch(search),
  },

  Mutation: {
    products_eav_entity_add: (
      _,
      {product},
      {controllers: {eavEntityController}}
    ) => eavEntityController.products_eav_entity_add(product),

    products_eav_entity_delete: (
      _,
      {id},
      {controllers: {eavEntityController}}
    ) => eavEntityController.products_eav_entity_delete(id),

    products_eav_entity_update: (
      _,
      {product},
      {controllers: {eavEntityController}}
    ) => eavEntityController.products_eav_entity_update(product),
  },
}

export default eavEntityResolver
