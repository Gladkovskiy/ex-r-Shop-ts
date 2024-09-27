import {Box, Center, Text} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'

interface IInfo {
  info: {
    ru: string
    en: string
  }
  name: {
    ru: string
    en: string
  }
}

const Info: FC<IInfo> = ({info, name}) => {
  const {i18n} = useTranslation()

  return (
    <Box mt={5}>
      <Center fontWeight={'bold'}>
        {name[i18n.language as keyof typeof name]}
      </Center>
      <Text>{info[i18n.language as keyof typeof info]}</Text>
    </Box>
  )
}

export default Info
