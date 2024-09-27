import {List, ListItem} from '@chakra-ui/react'
import React, {FC, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {RoutesForNav} from '../../../../types/router'
import {ModalContext} from '../ModalSearch'
import {useSearchAction} from '../../../../hooks/useAction'

interface IPhrasesSearchList {
  phrases: string[]
}

const PhrasesSearchList: FC<IPhrasesSearchList> = ({phrases}) => {
  const nav = useNavigate()
  const {onClose} = useContext(ModalContext)
  const {resetProducts} = useSearchAction()

  const clickHandler = (phrase: string) => {
    resetProducts()
    nav(RoutesForNav.SEARCH + phrase)
    onClose()
  }

  return (
    <List spacing={1} color={'gray.600'}>
      {phrases.map(phrase => (
        <ListItem
          key={phrase}
          cursor={'pointer'}
          _hover={{bg: 'gray.100'}}
          p={1}
          pl={3}
          onClick={() => {
            clickHandler(phrase)
          }}
        >
          {phrase}
        </ListItem>
      ))}
    </List>
  )
}

export default PhrasesSearchList
