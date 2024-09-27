import {Box, Divider} from '@chakra-ui/react'
import {FC} from 'react'
import MenuItem from './MenuItem'
import CategoryButton from './CategoryButton'
import {useTranslation} from 'react-i18next'

interface IItems {
  path: string
  name: {
    ru: string
    en: string
  }
}

const infItems: IItems[] = [
  {
    name: {
      ru: 'О нас',
      en: 'About Us',
    },
    path: '',
  },
  {
    name: {
      ru: 'Условия использования сайта',
      en: 'The conditions for using the site',
    },
    path: '',
  },
  {
    name: {
      ru: 'Контакты',
      en: 'Contacts',
    },
    path: '',
  },
]

const helpItems: IItems[] = [
  {
    name: {
      ru: 'Доставка и оплата',
      en: 'Shipping and payment',
    },
    path: '',
  },
  {
    name: {
      ru: 'Кредит',
      en: 'Loan',
    },
    path: '',
  },
  {
    name: {
      ru: 'Гарантия',
      en: 'Guarantee',
    },
    path: '',
  },
  {
    name: {
      ru: 'Возврат товара',
      en: 'Purchase returns',
    },
    path: '',
  },
]

interface IMenuItems {
  onCloseMenu: () => void
}

const MenuItems: FC<IMenuItems> = ({onCloseMenu}) => {
  const {t} = useTranslation('menu')

  return (
    <Box pt={4}>
      <CategoryButton onCloseMenu={onCloseMenu} />
      <MenuItem items={infItems} title={t('Information about the company')} />
      <Divider my={3} />
      <MenuItem items={helpItems} title={t('Help')} />
    </Box>
  )
}

export default MenuItems
