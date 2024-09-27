import {Box, BoxProps} from '@chakra-ui/react'
import React, {FC, PropsWithChildren} from 'react'

const AppBoxForm: FC<PropsWithChildren<BoxProps>> = ({children, ...props}) => {
  return (
    <Box
      w={{base: '100%', sm: '90%', md: '70%', xl: '40%'}}
      p={2}
      mx={'auto'}
      borderWidth={'1px'}
      borderColor={'gray.200'}
      borderRadius={'5px'}
      bgColor={'white'}
      boxShadow={['md', null, null, 'lg']}
      {...props}
    >
      {children}
    </Box>
  )
}

export default AppBoxForm
