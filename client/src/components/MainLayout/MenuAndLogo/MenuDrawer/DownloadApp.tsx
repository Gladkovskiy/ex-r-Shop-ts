import {Box, Divider, Image, Link, Text} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'
import googlePlay from '../../../../assets/img/button-google-play-ru.svg'
const DownloadApp: FC = () => {
  const {t} = useTranslation('menu')

  return (
    <Box mb={4} w={'100%'}>
      <Divider />
      <Text fontWeight={'semibold'} color={'gray.400'} mb={2}>
        {t('Download our application')}
      </Text>
      <Link href="#" download>
        <Image src={googlePlay} />
      </Link>
    </Box>
  )
}

export default DownloadApp
