import {Box, Text} from '@chakra-ui/react'
import {FC} from 'react'

interface IDiscount {
  active: boolean
  price: number
  oldPrice: string
}

const DiscountPrice: FC<IDiscount> = ({active, oldPrice, price}) => {
  return (
    <Box fontWeight={'semibold'} p={2}>
      {!active ? (
        <Text fontSize={20}>{price} у.е.</Text>
      ) : (
        <>
          <Text textDecor={'line-through'} color={'gray.400'} fontSize={20}>
            {price} у.е.
          </Text>
          <Text color={'red.300'} fontSize={20}>
            {oldPrice} у.е.
          </Text>
        </>
      )}
    </Box>
  )
}

export default DiscountPrice
