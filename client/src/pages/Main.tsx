import {Box} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import SEO from '../components/Common/SEO'
import CategoryItems from '../components/Main/Categories/CategoryItems'

const Main: FC = () => {
  const {t} = useTranslation('common')

  return (
    <Box>
      <SEO
        title={`${t('SEO.main')} SHOP`}
        description="Продажа разнообразных товаров. Sale of various goods."
      />
      <CategoryItems />
    </Box>
  )
}

export default Main
