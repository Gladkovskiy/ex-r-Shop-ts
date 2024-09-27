import {FC} from 'react'
import {Button} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import {Routes} from '../../../types/router'

interface ILogo {
  onClick?: () => void
}

const Logo: FC<ILogo> = ({onClick}) => {
  return (
    <Button
      as={RouterLink}
      to={Routes.MAIN}
      fontWeight={'bold'}
      fontSize={[20, 23, 30]}
      size={['xs', 'sm', 'md', 'lg']}
      onClick={onClick}
    >
      SHOP
    </Button>
  )
}

export default Logo
