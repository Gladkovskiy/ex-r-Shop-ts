import {Grid, Text} from '@chakra-ui/react'
import React, {FC} from 'react'

interface IOrderItem {
  orderNumber: number
  fio: string
  tel: string
  onClick: () => void
}

const OrderItem: FC<IOrderItem> = ({fio, tel, orderNumber, onClick}) => {
  return (
    <Grid
      gridTemplateColumns={'2fr 5fr 5fr'}
      gridGap={'1px'}
      bgColor={'white'}
      mt={2}
      transitionDuration={'0.2s'}
      _hover={{cursor: 'pointer', transform: 'scale(1.02)'}}
      onClick={onClick}
    >
      <Text bgColor={'telegram.200'} p={1}>
        {orderNumber}
      </Text>
      <Text bgColor={'telegram.200'} p={1}>
        {fio}
      </Text>
      <Text bgColor={'telegram.200'} p={1}>
        {tel}
      </Text>
    </Grid>
  )
}

export default OrderItem
