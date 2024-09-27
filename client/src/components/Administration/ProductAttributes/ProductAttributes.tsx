import {FC} from 'react'
import {attributeTabs} from '../../../settings/administration'
import AppTabs from '../../Common/AppTabs'

const ProductAttributes: FC = () => {
  return <AppTabs operations={attributeTabs} />
}

export default ProductAttributes
