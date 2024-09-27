import {Box, Flex, Text, useDisclosure} from '@chakra-ui/react'
import React, {FC, useCallback, useState} from 'react'
import OrderItem from './OrderItem'
import OrderTableNames from './OrderTableNames'
import ReactPaginate from 'react-paginate'
import classes from './style/order.module.sass'
import OrderModal from './OrderModal'
import {Products_Order, OrderStatus} from '../../graphQL/__generated__/graphql'
import ConfirmModal from './ConfirmModal'
import {useOrdersCount, useOrdersGet} from '../../graphQL/hooks/orders/query'
import {
  useOrdersCancel,
  useOrdersConfirm,
} from '../../graphQL/hooks/orders/mutation'

const mokOrder: Products_Order = {
  _id: '',
  adress: 'novaya pochta',
  createdAt: '10.06.54 30:34',
  fio: 'Pupkin',
  orderNumber: 11111,
  products: [
    {name: 'Mixer', price: 234, product_id: '', quantity: 2},
    {name: 'Mixer', price: 234, product_id: '', quantity: 2},
  ],
  status: OrderStatus.New,
  tel: '45454354354',
  totalPrice: 2999,
  updatedAt: '10.06.54 30:34',
}

const Orders: FC = () => {
  const [page, setPage] = useState(0)
  const [limit] = useState(15)

  const {onClose, isOpen, onOpen} = useDisclosure()
  const {
    onClose: closeConfirm,
    isOpen: isConfirm,
    onOpen: openConfirm,
  } = useDisclosure()

  const [confirm, setConfirm] = useState(false)
  const [selectOrder, setSelectOrder] = useState<Products_Order>(mokOrder)

  const {data: orders, loading: loadOrders} = useOrdersGet({limit, page})
  const {data: count, loading: loadCount} = useOrdersCount()
  const [cancelOrder] = useOrdersCancel(selectOrder._id)
  const [confirmOrder] = useOrdersConfirm(selectOrder._id)

  const itemClick = (order: Products_Order) => {
    setSelectOrder(order)
    onOpen()
  }

  const orderStatus = useCallback(() => {
    const close = () => {
      closeConfirm()
      onClose()
    }

    confirm ? confirmOrder().then(close) : cancelOrder().then(close)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirm])

  if (loadOrders || loadCount) return null

  return (
    <Box>
      <Text mb={2} fontWeight={'semibold'}>
        Необработанных заказов: {count?.orderCount.count}
      </Text>

      <OrderTableNames />

      {orders?.orders.map(order => (
        <OrderItem
          {...order}
          onClick={() => {
            itemClick(order)
          }}
        />
      ))}

      {count?.orderCount.count! > limit && (
        <Flex justifyContent={'center'}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="вперед"
            onPageChange={event => {
              setPage(event.selected)
            }}
            pageRangeDisplayed={2}
            pageCount={Math.ceil(count?.orderCount.count! / limit)}
            previousLabel="назад"
            renderOnZeroPageCount={null}
            pageClassName={classes.page}
            pageLinkClassName={classes.page_link}
            containerClassName={classes.container}
            breakClassName={classes.break}
            previousClassName={classes.previous}
            nextClassName={classes.next}
            activeClassName={classes.active}
          />
        </Flex>
      )}

      <OrderModal
        isOpen={isOpen}
        onClose={onClose}
        order={selectOrder}
        openConfirm={openConfirm}
        setConfirm={setConfirm}
      />

      <ConfirmModal
        isOpen={isConfirm}
        onClose={closeConfirm}
        callback={orderStatus}
        confirm={confirm}
      />
    </Box>
  )
}

export default Orders
