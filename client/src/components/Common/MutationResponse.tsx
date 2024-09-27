import {Box, Text} from '@chakra-ui/react'
import React, {FC} from 'react'

interface IMutationResponse {
  error: string | undefined
  success: string | undefined
  successText: string
}

const MutationResponse: FC<IMutationResponse> = ({
  error,
  success,
  successText,
}) => {
  return (
    <Box h={'20px'}>
      <Text color={'red.400'}>{error}</Text>
      {success && (
        <Text color={'green.400'}>{`${successText} ${success}`}</Text>
      )}
    </Box>
  )
}

export default MutationResponse
