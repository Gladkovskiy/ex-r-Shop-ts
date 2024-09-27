import React from 'react'
import AppTabs from '../components/Common/AppTabs'
import {Box} from '@chakra-ui/react'
import {productTabs} from '../settings/product'

const Product = () => {
  return (
    <Box mt={2}>
      <AppTabs operations={productTabs} />
    </Box>
  )
}

export default Product
