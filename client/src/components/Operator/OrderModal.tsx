import {
  Box,
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import React, {FC} from 'react'
import {Products_Order} from '../../graphQL/__generated__/graphql'
import {headerSize} from '../../styles/responsiveStyles'

interface IOrderModal {
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  onClose: () => void
  openConfirm: () => void
  order: Products_Order
}

const OrderModal: FC<IOrderModal> = ({
  isOpen,
  onClose,
  order,
  openConfirm,
  setConfirm,
}) => {
  const ok = () => {
    setConfirm(true)
    openConfirm()
  }

  const cancel = () => {
    setConfirm(false)
    openConfirm()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={['md', 'xl', '2xl', '3xl', '4xl']}
    >
      <ModalOverlay
        bg="blackAlpha.500"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalCloseButton color={'white'} />
        <ModalHeader bg={'telegram.500'} color={'white'} fontSize={headerSize}>
          ОБРАБОТКА ЗАКАЗА
        </ModalHeader>

        <ModalBody>
          <Text>
            Номер заказа: <b>{order.orderNumber}</b>
          </Text>
          <Text>
            ФИО: <b>{order.fio}</b>
          </Text>
          <Text>
            Телефон: <b>{order.tel}</b>
          </Text>
          <Text>Товары: </Text>
          <Box>
            {order.products.map((product, i) => (
              <Grid
                key={product.product_id}
                gridTemplateColumns={'6fr 2fr 2fr 2fr'}
                alignItems="center"
                gap="1px"
                bgColor="gray.200"
                mb={'1px'}
              >
                <Text bgColor={'telegram.300'} p={1}>
                  {i + 1}. {product.name}
                </Text>
                <Text bgColor={'telegram.300'} p={1}>
                  {product.price} y.e.
                </Text>
                <Text bgColor={'telegram.300'} p={1}>
                  {product.quantity} шт.
                </Text>
                <Text bgColor={'telegram.300'} p={1}>
                  {product.price * product.quantity} y.e.
                </Text>
              </Grid>
            ))}
          </Box>
          <Text align={'right'}>
            Итого: <b>{order.totalPrice}</b> y.e.
          </Text>
          <Text>
            Адрес доставки: <b>{order.adress}</b>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variant={'outline'} onClick={cancel}>
            Отменить заказ
          </Button>
          <Button ml={2} onClick={ok}>
            Подтвердить заказ
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default OrderModal
