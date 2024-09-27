import {ITabs} from '../components/Common/AppTabs'
import AboutProduct from '../components/Product/AboutProduct/AboutProduct'
import Comments from '../components/Product/Comments/Comments'
import Settings from '../components/Product/Settings'
import {IoMdSettings} from 'react-icons/io'
import {FaComments} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'

export const productTabs: ITabs[] = [
  {
    title: {
      ru: 'Всё о товаре',
      en: 'All about the product',
    },
    icon: <FaInfoCircle />,
    component: <AboutProduct />,
  },

  {
    title: {
      ru: 'Характеристики',
      en: 'Characteristics',
    },
    icon: <IoMdSettings />,
    component: <Settings />,
  },
  {
    title: {
      ru: 'Комментарии',
      en: 'Comments',
    },
    icon: <FaComments />,
    component: <Comments />,
  },
]
