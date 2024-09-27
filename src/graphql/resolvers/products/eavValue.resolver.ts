import {Resolvers} from '../../generated-types'

const eavValueResolver: Resolvers = {
  Query: {
    products_eavValue_products_get: (
      _,
      {filters},
      {controllers: {eavValueController}}
    ) => eavValueController.products_eavValue_products_get(filters),

    products_eavValue_filters_get: (
      _,
      {filters},
      {controllers: {eavValueController}}
    ) => eavValueController.products_eavValue_filters_get(filters),

    products_eavValue_value_get: (
      _,
      {idProduct},
      {controllers: {eavValueController}}
    ) => eavValueController.products_eavValue_value_get(idProduct),
  },
}

export default eavValueResolver
