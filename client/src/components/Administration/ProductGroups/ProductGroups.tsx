import {FC} from 'react'
import {groupTabs} from '../../../settings/administration'
import AppTabs from '../../Common/AppTabs'

const ProductGroups: FC = () => {
  return <AppTabs operations={groupTabs} />
}

export default ProductGroups
