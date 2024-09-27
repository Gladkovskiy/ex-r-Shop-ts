import {Box, Divider, Flex, Grid, Text} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'

interface IProducts {
  products: {
    name: string
    quantity: number
    price: number
  }[]
}

const Products: FC<IProducts> = ({products}) => {
  const {t} = useTranslation('mainLayout')

  return (
    <Box>
      {products.map(product => (
        <Grid
          key={product.name}
          gridTemplateColumns={'6fr 3fr 3fr'}
          mb={products.length > 1 ? 4 : 0}
        >
          <Text bgColor={'telegram.200'} p={1}>
            {product.name}
          </Text>
          <Text p={1} justifySelf={'center'} alignSelf={'center'}>
            {product.quantity}
          </Text>
          <Flex
            bgColor={'telegram.200'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text p={1}>{product.price} у.е.</Text>
          </Flex>
        </Grid>
      ))}

      <Divider mt={5} />

      <Flex justifyContent={'end'} p={1}>
        <Text fontWeight={'bold'}>
          {t('Basket.Total')}:{' '}
          {products.reduce((sum, product) => sum + product.price, 0)} у.е.
        </Text>
      </Flex>
    </Box>
  )
}

export default Products
