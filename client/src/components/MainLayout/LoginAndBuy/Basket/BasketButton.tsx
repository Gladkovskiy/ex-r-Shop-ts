import {Box, Flex, IconButton, Text, useDisclosure} from '@chakra-ui/react'
import {FC} from 'react'
import {SlBasket} from 'react-icons/sl'
import {useAppSelector} from '../../../../hooks/useAppSelector'
import Basket from './Basket'
import Order from './Order/Order'

const BasketButton: FC = () => {
  const {
    isOpen: isOpenBasket,
    onClose: onCloseBasket,
    onOpen: onOpenBasket,
  } = useDisclosure()

  const {
    isOpen: isOpenOrder,
    onClose: onCloseOrder,
    onOpen: onOpenOrder,
  } = useDisclosure()

  const {products} = useAppSelector(s => s.localStorageReducers.BasketReducer)
  return (
    <>
      <Box position={'relative'}>
        <IconButton
          aria-label="basket"
          icon={<SlBasket />}
          fontSize={[25, 30]}
          onClick={onOpenBasket}
          size={'md'}
        />

        {products.length !== 0 && (
          <Flex
            borderRadius={'50%'}
            h={['15px', '20px']}
            w={['15px', '20px']}
            position={'absolute'}
            bg={'green.500'}
            color={'white'}
            justifyContent={'center'}
            alignItems={'center'}
            top={'5%'}
            left={'60%'}
          >
            <Text>{products.length}</Text>
          </Flex>
        )}
      </Box>

      <Basket
        isOpen={isOpenBasket}
        onClose={onCloseBasket}
        openOrder={onOpenOrder}
      />

      <Order
        isOpen={isOpenOrder}
        onClose={onCloseOrder}
        openBasket={onOpenBasket}
      />
    </>
  )
}

export default BasketButton
