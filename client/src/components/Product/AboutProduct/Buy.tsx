import {Box, Button, Text} from '@chakra-ui/react'
import React, {FC} from 'react'
import ReactStars from 'react-stars'
import DiscountPrice from '../../Products/ProductsBlock/DiscountPrice'
import {useBasketAction} from '../../../hooks/useAction'
import {useAppSelector} from '../../../hooks/useAppSelector'
import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

interface IBuy {
  img_url: string
  rating: number
  name: {
    ru: string
    en: string
  }
  discount: boolean
  price: number
  oldPrice: string
  quantity: number
}

const Buy: FC<IBuy> = ({
  discount,
  name,
  oldPrice,
  price,
  quantity,
  rating,
  img_url,
}) => {
  const {id} = useParams<'id'>()
  const {addProduct} = useBasketAction()
  const {products} = useAppSelector(
    state => state.localStorageReducers.BasketReducer
  )
  const {t, i18n} = useTranslation('product')

  const addToBasket = () => {
    addProduct({
      imgUrl: img_url,
      maxQuantity: quantity,
      name: name.ru,
      price,
      product_id: id || '',
      quantity: 1,
    })
  }

  return (
    <Box
      p={4}
      borderWidth={'1px'}
      borderColor={'gray.200'}
      borderRadius={'5px'}
      boxShadow={['md', null, null, 'lg']}
      display={'flex'}
      flexDir={'column'}
    >
      <Box flex={1}>
        <ReactStars
          count={5}
          size={24}
          value={rating}
          color2={'#ffd700'}
          half
          edit={false}
        />
        <Text fontWeight={'bold'}>
          {name[i18n.language as keyof typeof name]}
        </Text>
      </Box>

      <Box>
        <DiscountPrice active={discount} price={price} oldPrice={oldPrice} />
        {quantity > 0 ? (
          <Button
            w={'full'}
            mt={5}
            onClick={addToBasket}
            isDisabled={!!products.find(product => product.product_id === id)}
          >
            {!products.find(product => product.product_id === id)
              ? t('Buy.Add to Basket')
              : t('Buy.This product is already in the basket')}
          </Button>
        ) : (
          <Text>{t('Buy.The goods have been legal')}</Text>
        )}
      </Box>
    </Box>
  )
}

export default Buy
