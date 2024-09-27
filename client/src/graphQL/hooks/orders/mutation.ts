import {useMutation} from '@apollo/client'
import {
  ORDERS_ADD,
  ORDERS_CANCEL,
  ORDERS_COMPLETE,
  ORDERS_CONFIRM,
  ORDERS_COUNT,
  ORDERS_DELET,
  ORDERS_GET,
  ORDERS_UPDATE,
} from '../../order.graphql'
import {Products_Order_Input} from '../../__generated__/graphql'

export const useOrdersAdd = () => {
  const mutation = useMutation(ORDERS_ADD)

  return mutation
}

export const useOrdersCancel = (productsOrderCancelId: string) => {
  const mutation = useMutation(ORDERS_CANCEL, {
    variables: {productsOrderCancelId},
    update: (cache, {data}) => {
      const oldData = cache.readQuery({query: ORDERS_COUNT})

      if (oldData?.orderCount && data?.order)
        cache.writeQuery({
          query: ORDERS_COUNT,
          data: {
            orderCount: {
              count: oldData.orderCount.count - 1,
            },
          },
        })
    },
    refetchQueries: [ORDERS_GET],
  })

  return mutation
}

export const useOredersComplete = (productsOrderComleteId: string) => {
  const mutation = useMutation(ORDERS_COMPLETE, {
    variables: {productsOrderComleteId},
  })

  return mutation
}

export const useOrdersConfirm = (productsOrderConfirmId: string) => {
  const mutation = useMutation(ORDERS_CONFIRM, {
    variables: {productsOrderConfirmId},
    update: (cache, {data}) => {
      const oldData = cache.readQuery({query: ORDERS_COUNT})

      if (oldData?.orderCount && data?.order)
        cache.writeQuery({
          query: ORDERS_COUNT,
          data: {
            orderCount: {
              count: oldData.orderCount.count - 1,
            },
          },
        })
    },
    refetchQueries: [ORDERS_GET],
  })

  return mutation
}

export const useOrdersDelete = (productsOrderDeleteId: string) => {
  const mutation = useMutation(ORDERS_DELET, {
    variables: {productsOrderDeleteId},
  })

  return mutation
}

interface IOrdersUpdate {
  productsOrderUpdateId: string
  order: Products_Order_Input
}
export const useOrdersUpdate = (updateInfo: IOrdersUpdate) => {
  const mutation = useMutation(ORDERS_UPDATE, {variables: {...updateInfo}})

  return mutation
}
