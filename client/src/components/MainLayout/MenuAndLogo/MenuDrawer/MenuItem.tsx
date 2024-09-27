import {Link as ChakraLink, Text, VStack} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Link as ReactRouterLink} from 'react-router-dom'

interface IMenuItem {
  title: string
  items: {
    name: {
      ru: string
      en: string
    }
    path: string
  }[]
}

const MenuItem: FC<IMenuItem> = ({items, title}) => {
  const {i18n} = useTranslation()

  return (
    <>
      <Text fontWeight={'semibold'} color={'gray.500'}>
        {title}
      </Text>
      <VStack alignItems={'flex-start'} spacing={0}>
        {items.map(({name, path}) => (
          <ChakraLink as={ReactRouterLink} to={path} key={name.ru}>
            {name[i18n.language as keyof typeof name]}
          </ChakraLink>
        ))}
      </VStack>
    </>
  )
}

export default MenuItem
