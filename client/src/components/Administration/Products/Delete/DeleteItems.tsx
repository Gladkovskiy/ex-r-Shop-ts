import {DeleteIcon, RepeatIcon} from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import img100 from '../../../../assets/img/placeholder/100.png'
import img80 from '../../../../assets/img/placeholder/80.png'
import {Products_Eav_Entity} from '../../../../graphQL/__generated__/graphql'
import {TKeyLang} from '../../../../types/common'
import {boldPhrase} from '../../../../utils/string/boldPhrase'

interface IDeleteItems {
  products: Products_Eav_Entity[]
  text: string
  onDelete: (product: Products_Eav_Entity) => void
  onChange: (productId: string) => void
}

const DeleteItems: FC<IDeleteItems> = ({
  products,
  text,
  onDelete,
  onChange,
}) => {
  const {i18n} = useTranslation()
  const imgPath = useBreakpointValue({
    base: img80,
    md: img100,
  })
  const imgSize = useBreakpointValue({
    base: '80px',
    md: '100px',
  })

  if (products.length === 0 && text !== '')
    return <Text mt={4}>Ничего не найдено...</Text>

  return (
    <>
      {products.map(product => (
        <Flex
          alignItems={'center'}
          key={product?._id}
          m={2}
          p={2}
          borderWidth={'1px'}
          borderColor={'gray.200'}
          borderRadius={'5px'}
          boxShadow={['md', null, null, 'lg']}
        >
          <Box flex={1}>
            <Flex
              justifyContent={['center', null, 'left', null]}
              alignItems={[null, null, 'center', null]}
              flexDir={['column', null, 'row', null]}
            >
              <Image
                fallbackSrc={imgPath}
                boxSize={imgSize}
                // src={process.env.REACT_APP_SERVER + product.img_urls[0]}
              />
              <Box p={1}>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: boldPhrase(
                      text,
                      product.name[i18n.language as TKeyLang]
                    ),
                  }}
                />
              </Box>
            </Flex>
          </Box>

          <Flex
            m={2}
            flexDirection={['column', null, 'row', null]}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <IconButton
              m={1}
              icon={<RepeatIcon />}
              aria-label="update product"
              onClick={() => onChange(product._id)}
            />

            <IconButton
              m={1}
              icon={<DeleteIcon />}
              aria-label="delete product"
              onClick={() => onDelete(product)}
            />
          </Flex>
        </Flex>
      ))}
    </>
  )
}

export default DeleteItems
