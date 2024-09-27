import {FC} from 'react'
import {categoryTabs} from '../../../settings/administration'
import AppTabs from '../../Common/AppTabs'

const ProductCategories: FC = () => {
  return <AppTabs operations={categoryTabs} />
}

export default ProductCategories
