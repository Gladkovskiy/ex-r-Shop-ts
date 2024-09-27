import {DeleteIcon} from '@chakra-ui/icons'
import {
  Box,
  Divider,
  HStack,
  IconButton,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import NumberInput from '../../../Common/NumberInput'

interface IBasketItem {
  name: string
  price: number
  quantity: number
  maxQuantity: number
  imgUrl: string
  getQuantity: (quan: number) => void
  deleteProduct: () => void
}

const BasketItem: FC<IBasketItem> = ({
  imgUrl,
  maxQuantity,
  name,
  price,
  quantity,
  deleteProduct,
  getQuantity,
}) => {
  const {t} = useTranslation('mainLayout')

  return (
    <>
      <HStack justifyContent={'space-between'}>
        <HStack>
          <Image
            src={process.env.REACT_APP_GOOGLE + imgUrl + '#.jpeg'}
            fallbackSrc="https://via.placeholder.com/70"
            boxSize={'100px'}
            objectFit={'contain'}
          />

          <Text fontSize={'sm'}>{name}</Text>
        </HStack>

        <Tooltip label={t('Basket.delete product')} placement="top">
          <IconButton
            aria-label="delete product"
            icon={<DeleteIcon />}
            onClick={deleteProduct}
          />
        </Tooltip>
      </HStack>

      <HStack justifyContent={'flex-end'} mt={3}>
        <Box>
          <NumberInput
            getValue={val => getQuantity(val)}
            max={maxQuantity}
            defaultValue={quantity}
          />
        </Box>

        <Box ml={3}>
          <Text fontSize={'md'}>
            {t('Basket.Price')}: {quantity * price} уе
          </Text>
        </Box>
      </HStack>
      <Divider my={2} />
    </>
  )
}

export default BasketItem
