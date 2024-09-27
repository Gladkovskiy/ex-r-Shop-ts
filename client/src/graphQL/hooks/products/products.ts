import {useLazyQuery, useMutation, useQuery} from '@apollo/client'
import {useFiltersAction, useSearchAction} from '../../../hooks/useAction'
import {
  Products_EavValue_FiltersInput,
  Products_EavValue_ProductsInput,
  Products_Eav_Entity_SearchProducts_Input,
} from '../../__generated__/graphql'
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_BY_ID_PRODUCT,
  GET_BY_NAME_PRODUCTS,
  GET_FILTERS,
  GET_GLOBAL_SEARCH,
  GET_PRODUCTS,
  GET_VALUES,
  UPDATE_PRODUCT,
} from '../../products.graphql'

export const useGQGetByNameProducts = () => {
  const query = useLazyQuery(GET_BY_NAME_PRODUCTS, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  })

  return query
}

export const useGQGetByIdProduct = (id: string) => {
  const query = useQuery(GET_BY_ID_PRODUCT, {
    variables: {
      productsEavEntityGetByIdId: id,
    },
  })

  return query
}

export const useQGAddProduct = () => {
  const mutation = useMutation(ADD_PRODUCT)

  return mutation
}

export const useGQDeleteProduct = ({
  id,
  searchText,
}: {
  id: string
  searchText: string
}) => {
  const mutation = useMutation(DELETE_PRODUCT, {
    variables: {
      productsEavEntityDeleteId: id,
    },
    update: (cache, {data}) => {
      const oldData = cache.readQuery({
        query: GET_BY_NAME_PRODUCTS,
        variables: {
          name: searchText,
        },
      })

      if (oldData?.products && data?.products_eav_entity_delete) {
        const newData = oldData.products.filter(
          ({_id}) => _id !== data.products_eav_entity_delete?.id
        )
        cache.writeQuery({
          query: GET_BY_NAME_PRODUCTS,
          variables: {
            name: searchText,
          },
          data: {
            products: newData,
          },
        })
      }
    },
  })

  return mutation
}

interface IUpdateProduct {
  onSuccess: () => void
  id: string
  price: number
}
export const useGQUpdateProduct = ({onSuccess, id, price}: IUpdateProduct) => {
  const mutation = useMutation(UPDATE_PRODUCT, {
    onCompleted: () => onSuccess(),
    onError: ({message}) => console.error(message),
    update: (cache, {data}) => {
      const oldData = cache.readQuery({
        query: GET_BY_ID_PRODUCT,
        variables: {
          productsEavEntityGetByIdId: id,
        },
      })

      if (oldData?.product && data?.product)
        cache.writeQuery({
          query: GET_BY_ID_PRODUCT,
          variables: {
            productsEavEntityGetByIdId: id,
          },
          data: {
            product: {
              price,
              product: data.product,
            },
          },
        })
    },
  })

  return mutation
}

export const useGQGetProducts = (filters: Products_EavValue_ProductsInput) => {
  const {addProducts, addTotalCount} = useFiltersAction()
  const query = useQuery(GET_PRODUCTS, {
    variables: {
      filters,
    },
    fetchPolicy: 'network-only',
    onCompleted: ({allProducts}) => {
      addProducts(allProducts.products)
      addTotalCount(allProducts.totalProducts)
    },
  })

  return query
}

export const useGQGetFilters = (filters: Products_EavValue_FiltersInput) => {
  const query = useQuery(GET_FILTERS, {
    variables: {
      filters,
    },
  })

  return query
}

export const useGQGetValues = (idProduct: string) => {
  const query = useQuery(GET_VALUES, {
    variables: {
      idProduct,
    },
  })

  return query
}

export const useGQGetGlobalSearch = (
  search: Products_Eav_Entity_SearchProducts_Input
) => {
  const {addProducts, setCount, setGroups} = useSearchAction()

  const query = useQuery(GET_GLOBAL_SEARCH, {
    variables: {
      search,
    },
    fetchPolicy: 'network-only',
    onCompleted: ({search}) => {
      addProducts(search.products)
      setCount(search.totalProducts)
      setGroups(search.groups)
    },
  })

  return query
}
