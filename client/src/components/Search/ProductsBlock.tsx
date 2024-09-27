/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import {useAppSelector} from '../../hooks/useAppSelector'
import {Box, Grid} from '@chakra-ui/react'
import ProductItem from '../Products/ProductsBlock/ProductItem'
import {useSearchAction} from '../../hooks/useAction'

const ProductsBlock = () => {
  const {products} = useAppSelector(r => r.SearchReducer)
  const {resetProducts} = useSearchAction()

  useEffect(() => {
    resetProducts()
  }, [])

  return (
    <Box mt={1}>
      <Grid
        gridTemplateColumns={[
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          null,
          'repeat(5, 1fr)',
        ]}
        gridGap={2}
      >
        {products.map(({img_urls, ...product}) => (
          <ProductItem key={product._id} img_url={img_urls} {...product} />
        ))}
      </Grid>
    </Box>
  )
}

export default ProductsBlock
