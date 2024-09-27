import {gql} from './__generated__'

export const ADD_ATTRIBUTE = gql(`
mutation Products_eav_attribute_add($attr: Products_eav_attributeInput!) {
  attribute:products_eav_attribute_add(attr: $attr) {
    _id
    attr_name
    description {
      en
      ru
    }
    group
    values {
      description {
        en
        ru
      }
      value
    }
  }
}
`)

export const GET_ATTRIBUTES =
  gql(`query Products_eav_attribute_get($group: String!) {
  attrs:products_eav_attribute_get(group: $group) {
    _id
    attr_name
    description {
      en
      ru
    }
    group
    values {
      description {
        en
        ru
      }
      value
    }
  }
}`)

export const DELET_ATTRIBUTE = gql(`
mutation Products_eav_attribute_delete($productsEavAttributeDeleteId: ObjectID) {
  delete:products_eav_attribute_delete(id: $productsEavAttributeDeleteId) {
    id
  }
}
`)

export const UPDATE_ATTRIBUTE = gql(`
mutation Products_eav_attribute_update($productsEavAttributeUpdateId: ObjectID, $values: [Products_eav_attribute_valuesInput!]) {
  attr:products_eav_attribute_update(id: $productsEavAttributeUpdateId, values: $values) {
    _id
    values {
      description {
        en
        ru
      }
      value
    }
  }
}
`)

export const GET_BY_NAME_PRODUCTS = gql(`
query Products_eav_entity_getByName($name: String!) {
  products:products_eav_entity_getByName(name: $name) {
    _id
    description {
      en
      ru
    }
    discount {
      active
      oldPrice
    }
    group
    img_urls
    name {
      en
      ru
    }
    quantity
    rating
    searchTag
  }
}
`)

export const GET_BY_ID_PRODUCT = gql(`
query Products_eav_entity_getById($productsEavEntityGetByIdId: ObjectID!) {
  product:products_eav_entity_getById(id: $productsEavEntityGetByIdId) {
    price
    product {
      _id
      description {
        ru
        en
      }
      discount {
        active
        oldPrice
      }
      group
      img_urls
      name {
        en
        ru
      }
      quantity
      rating
      searchTag
    }
  }
}
`)

export const ADD_PRODUCT = gql(`
mutation Products_eav_entity_add($product: Products_eav_entity_input!) {
  product:products_eav_entity_add(product: $product) {
    _id
    img_urls
    name {
      en
      ru
    }
  }
}
`)

export const DELETE_PRODUCT = gql(`
mutation Products_eav_entity_delete($productsEavEntityDeleteId: ObjectID!) {
  products_eav_entity_delete(id: $productsEavEntityDeleteId) {
    id
  }
}
`)

export const UPDATE_PRODUCT = gql(`
mutation Products_eav_entity_update($product: Products_eav_entity_update_input!) {
  product:products_eav_entity_update(product: $product) {
    _id
    description {
      en
      ru
    }
    discount {
      active
      oldPrice
    }
    group
    img_urls
    name {
      en
      ru
    }
    quantity
    rating
    searchTag
  }
}
`)

export const GET_PRODUCTS = gql(`
query Products_eavValue_products_get($filters: Products_eavValue_productsInput!) {
  allProducts:products_eavValue_products_get(filters: $filters) {
    totalProducts
    products {
      _id
      img_urls
      discount {
        active
        oldPrice
      }
      price
      name {
        en
        ru
      }
      rating
      quantity
    }
  }
}
`)

export const GET_FILTERS = gql(`
query Products_eavValue_filters_get($filters: Products_eavValue_filtersInput!) {
  filtersGet:products_eavValue_filters_get(filters: $filters) {
    price {
      max
      min
    }
    filters {
      attr {
        description {
          en
          ru
        }
        name
      }
      values {
        count
        attr_value {
          description {
            en
            ru
          }
          value
        }
      }
    }
  }
}
`)

export const GET_VALUES = gql(`
query Products_eavValue_value_get($idProduct: ObjectID!) {
  values:products_eavValue_value_get(idProduct: $idProduct) {
    attr_description {
      en
      ru
    }
    attr_value {
      description {
        en
        ru
      }
    }
  }
}
`)

export const GET_GLOBAL_SEARCH = gql(`
query ExampleQuery($search: Products_eav_entity_searchProducts_input!) {
  search:products_eav_entity_globalSearch(search: $search) {
    groups {
      description {
        ru
        en
      }
      type
    }
    products {
      _id
      discount {
        active
        oldPrice
      }
      img_urls
      name {
        en
        ru
      }
      price
      quantity
      rating
    }
    totalProducts
  }
}

`)
