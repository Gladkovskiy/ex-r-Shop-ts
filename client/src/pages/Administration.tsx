import {Box} from '@chakra-ui/react'
import {FC} from 'react'
import AppTabs from '../components/Common/AppTabs'
import {adminTabs} from '../settings/administration'
import SEO from '../components/Common/SEO'
import {useTranslation} from 'react-i18next'

const Administration: FC = () => {
  const {t} = useTranslation('common')

  return (
    <Box mt={2}>
      <SEO
        title={`${t('SEO.main')} SHOP`}
        description="Продажа разнообразных товаров. Sale of various goods."
      />

      <AppTabs operations={adminTabs} />
    </Box>
  )
}

export default Administration
