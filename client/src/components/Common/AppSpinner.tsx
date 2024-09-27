import {Flex, Spinner} from '@chakra-ui/react'
import {FC} from 'react'

interface IAppSpinner {
  h: string
}

const AppSpinner: FC<IAppSpinner> = ({h}) => {
  return (
    <Flex h={h} justifyContent={'center'} alignItems={'center'}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size={['md', 'lg']}
      />
    </Flex>
  )
}

export default AppSpinner
