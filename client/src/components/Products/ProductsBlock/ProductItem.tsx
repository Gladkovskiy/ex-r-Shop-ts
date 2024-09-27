import {
  Box,
  Center,
  Divider,
  Flex,
  IconButton,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import React, {FC, MouseEvent, ReactElement, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {BsBasket2, BsBasket2Fill} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import ReactStars from 'react-stars'
import {useBasketAction} from '../../../hooks/useAction'
import {RoutesForNav} from '../../../types/router'
import {image} from '../../../utils/string/chooseImage'
import DiscountPrice from './DiscountPrice'
import {useAppSelector} from '../../../hooks/useAppSelector'
// import fallback from '../../../assets/img/placeholder/imageNotLoad.png'

interface IProductItem {
  _id: string
  img_url: string[]
  name: {
    ru: string
    en: string
  }
  price: number
  discount: {
    active: boolean
    oldPrice: string
  }
  rating: number
  quantity: number
}

const ProductItem: FC<IProductItem> = ({
  discount,
  img_url,
  name,
  price,
  rating,
  quantity,
  _id,
}) => {
  const nav = useNavigate()
  const {t, i18n} = useTranslation('products')
  const [hover, setHover] = useState(false)
  const {addProduct} = useBasketAction()
  const {products} = useAppSelector(r => r.localStorageReducers.BasketReducer)

  const addToBasket = (e: MouseEvent) => {
    e.stopPropagation()

    const findProduct = products.find(product => product.product_id === _id)

    if (!findProduct)
      addProduct({
        imgUrl: img_url[0],
        maxQuantity: quantity,
        name: name.ru,
        price,
        product_id: _id || '',
        quantity: 1,
      })
  }

  const sellButton = (id: string): ReactElement => {
    const findProduct = products.find(product => product.product_id === id)

    return findProduct ? <BsBasket2Fill /> : <BsBasket2 />
  }

  return (
    <Tooltip
      label={name.ru}
      placement="top"
      openDelay={800}
      hasArrow
      bg={'gray.400'}
    >
      <Flex
        onClick={() => nav(RoutesForNav.PRODUCT + _id)}
        position={'relative'}
        flexDirection={'column'}
        p={3}
        bgColor={'white'}
        borderWidth={'1px'}
        borderColor={'gray.200'}
        borderRadius={'5px'}
        boxShadow={['md', null, null, 'lg']}
        _hover={{cursor: 'pointer', transform: 'scale(1.03)', zIndex: 10}}
        transitionDuration={'200ms'}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        {quantity === 0 && (
          <Box
            position={'absolute'}
            bgColor={'rgba(247, 242, 242, 0.5)'}
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={100}
          />
        )}
        <Box>
          <Center position={'relative'} p={2}>
            {discount.active && (
              <Text
                bgColor={'red.400'}
                position={'absolute'}
                top={'5%'}
                left={'2%'}
                color={'white'}
                p={2}
                borderRadius={'50%'}
              >
                {t('ProductItem.Stock')}
              </Text>
            )}
            <Image
              src={
                process.env.REACT_APP_GOOGLE + image(hover, img_url) + '#.jpeg'
              }
              boxSize={'150px'}
              objectFit={'contain'}
              w={'80%'}
              // fallbackSrc={fallback}
            />
          </Center>

          <Text mt={1} noOfLines={2}>
            {name[i18n.language as keyof typeof name]}
          </Text>

          <ReactStars
            count={5}
            size={24}
            value={rating}
            color2={'#ffd700'}
            half
            edit={false}
          />

          <Divider />
        </Box>

        <Flex
          justifyContent={'space-between'}
          alignItems={'flex-end'}
          mt={'auto'}
        >
          <DiscountPrice
            active={discount.active}
            price={price}
            oldPrice={discount.oldPrice}
          />

          {quantity !== 0 ? (
            <IconButton
              aria-label="putToBasket"
              icon={sellButton(_id)}
              colorScheme="green"
              fontSize={[25, 30]}
              variant={'ghost'}
              onClick={addToBasket}
              _hover={{transform: 'scale(1.03)'}}
            />
          ) : (
            <Text mb={2}>{t('ProductItem.Not available')}</Text>
          )}
        </Flex>
      </Flex>
    </Tooltip>
  )
}

export default ProductItem
