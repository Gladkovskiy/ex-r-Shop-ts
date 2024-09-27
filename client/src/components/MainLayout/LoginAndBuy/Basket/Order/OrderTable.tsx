import {Button, Text} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

interface IOrderTable {
  orderNumber: number
  closeModal: () => void
}

const OrderTable: FC<IOrderTable> = ({orderNumber, closeModal}) => {
  const nav = useNavigate()
  const {t} = useTranslation('mainLayout')

  const clickHandler = () => {
    nav('/')
    closeModal()
  }

  return (
    <>
      <Text textAlign={'center'} fontWeight={'semibold'} mb={3}>
        {t('Order.Thanks for your order')} № {orderNumber}
      </Text>
      <Text>
        {t('Order.Our operator will contact you to confirm the order')}{' '}
      </Text>

      <Button mt={5} w={'full'} onClick={clickHandler}>
        {t('Order.Continue purchases')}
      </Button>
    </>
  )
}

export default OrderTable
