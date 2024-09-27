import {SearchIcon} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Hide,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Show,
  useDisclosure,
} from '@chakra-ui/react'
import {FC, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import ModalSearch from './ModalSearch'

const SearchBar: FC = () => {
  const {isOpen, onClose, onOpen} = useDisclosure()
  const refInput = useRef<HTMLInputElement>(null)
  const {t} = useTranslation('mainLayout')

  return (
    <>
      <Hide below="md">
        <Flex w={[null, null, null, '35%']} p={4}>
          <InputGroup>
            <InputLeftElement pointerEvents={'none'}>
              <SearchIcon color={'white'} />
            </InputLeftElement>

            <Input
              type="text"
              variant={'outline'}
              size={'md'}
              placeholder={t('searchBar.looking for')}
              color={'white'}
              _placeholder={{color: 'white', fontSize: ['sm', 'md']}}
              ref={refInput}
              onClick={() => {
                onOpen()
                refInput.current?.blur()
              }}
            />
            <InputRightElement w={'5rem'} pointerEvents={'none'}>
              <Button size={['xs', 'sm']} fontSize={['xs', 'sm', 'md', 'lg']}>
                {t('searchBar.search')}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Hide>

      <Show below="md">
        <Box flex={1} display={'flex'} justifyContent={'flex-end'}>
          <IconButton
            aria-label="search"
            fontSize={[20, 25]}
            size={'md'}
            icon={<SearchIcon />}
            onClick={onOpen}
          />
        </Box>
      </Show>

      <ModalSearch isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default SearchBar
