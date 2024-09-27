import {Box, useDisclosure} from '@chakra-ui/react'
import {FC} from 'react'
import {useParams} from 'react-router-dom'
import FilterDrawer from '../components/Products/FilterBlock/FilterDrawer'
import ProductsBlock from '../components/Products/ProductsBlock/ProductsBlock'
import SettingBar from '../components/Products/SettingBar/SettingBar'

const Products: FC = () => {
  const {params} = useParams<'params'>()
  const [id] = params?.split('-')!
  const {isOpen, onClose, onOpen} = useDisclosure()

  return (
    <Box>
      <SettingBar filterOpen={onOpen} />

      <ProductsBlock params={params || ''} />

      <FilterDrawer isOpen={isOpen} onClose={onClose} id={id || ''} />
    </Box>
  )
}

export default Products
