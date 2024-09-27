import {DeleteIcon, RepeatIcon} from '@chakra-ui/icons'
import {Box, Divider, Flex, HStack, IconButton, Text} from '@chakra-ui/react'
import {FC} from 'react'

interface IDeleteItem {
  description: {
    ru: string
    en: string
  }
  onDelete: () => void
  onChange: () => void
}

const DeleteItem: FC<IDeleteItem> = ({description, onDelete, onChange}) => {
  return (
    <Box
      _hover={{bg: 'gray.100'}}
      p={2}
      boxShadow={['md', null, null, 'lg']}
      mb={2}
    >
      <Flex alignItems={'center'} my={2}>
        <Box flex={1}>
          <HStack>
            <Box>
              <Text>ru: {description.ru}</Text>
              <Text>en: {description.en}</Text>
            </Box>
          </HStack>
        </Box>

        <IconButton
          icon={<RepeatIcon />}
          aria-label="update attribute"
          onClick={onChange}
        />

        <IconButton
          ml={2}
          icon={<DeleteIcon />}
          aria-label="delete attribute"
          onClick={onDelete}
        />
      </Flex>
      <Divider />
    </Box>
  )
}

export default DeleteItem
