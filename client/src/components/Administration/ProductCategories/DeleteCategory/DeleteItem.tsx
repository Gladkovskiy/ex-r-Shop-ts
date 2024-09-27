import {DeleteIcon} from '@chakra-ui/icons'
import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import {FC} from 'react'
import img80 from '../../../../assets/img/placeholder/80.png'
import img50 from '../../../../assets/img/placeholder/50.png'
import {useTranslation} from 'react-i18next'

interface IDeleteItem {
  img?: string
  type: string
  description: {
    en: string
    ru: string
  }
  onDelete: () => void
}

const DeleteItem: FC<IDeleteItem> = ({description, onDelete, img}) => {
  const imgPath = useBreakpointValue({
    base: img50,
    md: img80,
  })
  const imgSize = useBreakpointValue({
    base: '50px',
    md: '80px',
  })
  const {i18n} = useTranslation()
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
            <Image
              fallbackSrc={imgPath}
              boxSize={imgSize}
              src={process.env.REACT_APP_GOOGLE + img}
            />
            <Box>
              <Text>
                {description[i18n.language as keyof typeof description]}
              </Text>
            </Box>
          </HStack>
        </Box>

        <IconButton
          icon={<DeleteIcon />}
          aria-label="delete category"
          onClick={onDelete}
        />
      </Flex>
      <Divider />
    </Box>
  )
}

export default DeleteItem
