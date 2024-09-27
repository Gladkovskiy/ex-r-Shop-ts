import {FC} from 'react'
import {productTabs} from '../../../settings/administration'
import AppTabs from '../../Common/AppTabs'

const Products: FC = () => {
  return <AppTabs operations={productTabs} />
}

export default Products
