import {Box, Text} from '@chakra-ui/react'
import React, {FC} from 'react'

interface IAppTextError {
  isError: boolean
  text: string
}

const AppTextError: FC<IAppTextError> = ({isError, text}) => {
  return (
    <Box h={6} mt={2}>
      {isError && <Text color={'red.400'}>{text}</Text>}
    </Box>
  )
}

export default AppTextError
