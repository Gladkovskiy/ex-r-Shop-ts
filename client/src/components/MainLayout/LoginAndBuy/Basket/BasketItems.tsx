import React, {FC} from 'react'
import {Divider, Image, Text, VStack} from '@chakra-ui/react'
import emptyBasket from '../../../../assets/img/empty-basket.svg'
import BasketItem from './BasketItem'
import {useAppSelector} from '../../../../hooks/useAppSelector'
import {useBasketAction} from '../../../../hooks/useAction'
import {useTranslation} from 'react-i18next'

const BasketItems: FC = () => {
  const {products} = useAppSelector(
    state => state.localStorageReducers.BasketReducer
  )
  const {delProduct, changeQuantity} = useBasketAction()
  const {t} = useTranslation('mainLayout')

  return (
    <>
      {products.length === 0 ? (
        <VStack mb={4}>
          <Image src={emptyBasket} textAlign={'center'} />
          <Text fontWeight={'semibold'}>{t('Basket.the basket is empty')}</Text>
          <Text>{t('Basket.but its never too late to fix it')}</Text>
        </VStack>
      ) : (
        <>
          <Divider my={3} />
          {products.map(
            ({imgUrl, maxQuantity, name, price, product_id, quantity}) => (
              <BasketItem
                key={product_id}
                imgUrl={imgUrl}
                maxQuantity={maxQuantity}
                name={name}
                price={price}
                quantity={quantity}
                deleteProduct={() => delProduct(product_id)}
                getQuantity={quan =>
                  changeQuantity({product_id, quantity: quan})
                }
              />
            )
          )}
        </>
      )}
    </>
  )
}

export default BasketItems
