import {Box, Text} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'

const Error: FC = () => {
  const {t} = useTranslation('common')

  return (
    <Box
      h={'25vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text fontWeight={'semibold'} fontSize={['sm', 'xl']}>
        {t('Error.message')}
      </Text>
    </Box>
  )
}

export default Error
