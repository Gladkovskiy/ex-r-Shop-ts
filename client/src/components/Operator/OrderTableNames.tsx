import {Grid, Text} from '@chakra-ui/react'
import React, {FC} from 'react'

const OrderTableNames: FC = () => {
  return (
    <Grid gridTemplateColumns={'2fr 5fr 5fr'} gridGap={'1px'} bgColor={'white'}>
      <Text bgColor={'telegram.300'} p={1}>
        {'Номер заказа'}
      </Text>
      <Text bgColor={'telegram.300'} p={1}>
        {'Фамилия Имя Отчество'}
      </Text>
      <Text bgColor={'telegram.300'} p={1}>
        {'Номер телефона'}
      </Text>
    </Grid>
  )
}

export default OrderTableNames
