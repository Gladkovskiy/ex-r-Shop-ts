import React, {FC, ChangeEvent} from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react'
import {CloseIcon} from '@chakra-ui/icons'

interface ISearchInput {
  searchText: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  isLoading: boolean
  onTextClear: () => void
  placeholder: string
}

const SearchInput: FC<ISearchInput> = ({
  onChange,
  searchText,
  isLoading,
  onTextClear,
  placeholder,
}) => {
  return (
    <InputGroup>
      <Input value={searchText} onChange={onChange} placeholder={placeholder} />
      <InputRightElement>
        {isLoading ? (
          <Spinner
            size={'sm'}
            emptyColor="gray.200"
            color="blue.500"
            speed="0.65s"
          />
        ) : (
          searchText && (
            <IconButton
              aria-label="clear text"
              icon={<CloseIcon />}
              bgColor={'transparent'}
              color={'gray.400'}
              _hover={{bgColor: 'transparent'}}
              size={'xs'}
              onClick={onTextClear}
            />
          )
        )}
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchInput
