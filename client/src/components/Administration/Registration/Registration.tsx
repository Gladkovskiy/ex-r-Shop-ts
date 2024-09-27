import {FC} from 'react'
import {regTabs} from '../../../settings/administration'
import AppTabs from '../../Common/AppTabs'

const Registration: FC = () => {
  return <AppTabs operations={regTabs} />
}

export default Registration
