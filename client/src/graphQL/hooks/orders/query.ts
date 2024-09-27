import {useQuery} from '@apollo/client'
import {ORDERS_COUNT, ORDERS_GET, ORDERS_GET_BY_ID} from '../../order.graphql'
import {Pagination_Input} from '../../__generated__/graphql'

export const useOrdersGet = (pagination: Pagination_Input) => {
  const query = useQuery(ORDERS_GET, {
    variables: {pagination},
  })

  return query
}

export const useOrdersCount = () => {
  const query = useQuery(ORDERS_COUNT)

  return query
}

export const useOrdersGetById = (orderNumber: number) => {
  const query = useQuery(ORDERS_GET_BY_ID, {
    variables: {orderNumber},
  })

  return query
}
