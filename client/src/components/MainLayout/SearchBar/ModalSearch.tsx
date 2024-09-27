import {SearchIcon} from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import {FC, createContext, useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDebounceSearch} from '../../../hooks/useDebounceSearch'
import {modalSize} from '../../../styles/responsiveStyles'
import SearchResult from './SearchResult/SearchResult'

interface IModalSearch {
  isOpen: boolean
  onClose: () => void
}

export const ModalContext = createContext<IModalSearch>({} as IModalSearch)

const ModalSearch: FC<IModalSearch> = ({isOpen, onClose}) => {
  const [phrase, setPhrase] = useState('')
  const search = useDebounceSearch({setText: setPhrase})
  const {t} = useTranslation('mainLayout')

  useEffect(() => {
    if (isOpen) setPhrase('')
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
      <ModalOverlay
        bg="blackAlpha.500"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent p={[0, 4]}>
        <ModalBody position={'relative'}>
          <InputGroup>
            <InputLeftElement pointerEvents={'none'}>
              <SearchIcon color={'telegram.700'} />
            </InputLeftElement>

            <Input
              type="text"
              placeholder={t('searchBar.looking for')}
              _placeholder={{color: 'white', fontSize: ['sm', 'md']}}
              onChange={search}
            />
          </InputGroup>

          <ModalContext.Provider value={{isOpen, onClose}}>
            <SearchResult phrase={phrase} />
          </ModalContext.Provider>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalSearch
