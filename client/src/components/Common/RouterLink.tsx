import {Link as ChakraLink} from '@chakra-ui/react'
import {FC} from 'react'
import {Link as RLink} from 'react-router-dom'

interface IRouterLink {
  path: string
  title: string
  onClick?: () => void
}

const RouterLink: FC<IRouterLink> = ({path, title, onClick}) => {
  return (
    <ChakraLink
      as={RLink}
      to={path}
      onClick={onClick}
      _hover={{textDecor: 'none', bgColor: 'gray.100'}}
      display={'block'}
      p={2}
      // textAlign={'center'}
      fontWeight={'semibold'}
    >
      {title}
    </ChakraLink>
  )
}

export default RouterLink
