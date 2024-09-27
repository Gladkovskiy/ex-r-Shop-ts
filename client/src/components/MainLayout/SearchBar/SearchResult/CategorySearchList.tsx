import {FC, useContext} from 'react'
import {List, ListItem} from '@chakra-ui/react'
import {Settings_FullTextSearch_GroupesResult} from '../../../../graphQL/__generated__/graphql'
import {useLocation, useNavigate} from 'react-router-dom'
import {RoutesForNav} from '../../../../types/router'
import {ModalContext} from '../ModalSearch'
import {useFiltersAction} from '../../../../hooks/useAction'
import {useTranslation} from 'react-i18next'
import {TKeyLang} from '../../../../types/common'

interface ICategorySearchList {
  categories: Settings_FullTextSearch_GroupesResult[]
}

const CategorySearchList: FC<ICategorySearchList> = ({categories}) => {
  const nav = useNavigate()
  const {pathname} = useLocation()
  const {onClose} = useContext(ModalContext)
  const {resetProducts} = useFiltersAction()
  const {i18n} = useTranslation()
  const {resetAllFilters} = useFiltersAction()

  const clickHandler = (type: string) => {
    const to = RoutesForNav.PRODUCTS + type
    if (pathname !== to) {
      resetAllFilters()
      resetProducts()
      nav(to)
    }
    onClose()
  }

  return (
    <List spacing={1} color={'gray.600'}>
      {categories.map(({type, description}) => (
        //перевод как появится надо будет привязать
        <ListItem
          key={type}
          cursor={'pointer'}
          _hover={{bg: 'gray.100'}}
          p={1}
          pl={3}
          onClick={() => clickHandler(type)}
        >
          {description[i18n.language as TKeyLang]}
        </ListItem>
      ))}
    </List>
  )
}

export default CategorySearchList
