import {Box, Divider, Text} from '@chakra-ui/react'
import {FC} from 'react'
import {useGQGetSearch} from '../../../../graphQL/hooks/search/search'
import CategorySearchList from './CategorySearchList'
import PhrasesSearchList from './PhrasesSearchList'
import AppSkeleton from '../../../Common/AppSkeleton'
import {useTranslation} from 'react-i18next'

interface ISearchResult {
  phrase: string
}

const SearchResult: FC<ISearchResult> = ({phrase}) => {
  const {data, loading} = useGQGetSearch(phrase)
  const {t} = useTranslation('mainLayout')

  if (loading) return <AppSkeleton />
  if (!data) return null

  const isPhrases = data?.results.phrases.length !== 0
  const isCategory = data?.results.groupes.length !== 0
  const isResult = isPhrases || isCategory

  return (
    <Box
      pos={'absolute'}
      bg={'white'}
      w={'80%'}
      p={2}
      top={'85%'}
      color={'gray.400'}
    >
      {!isResult && phrase && (
        <Text fontWeight={'semibold'}>{t('searchBar.Nothing found...')}</Text>
      )}

      {isPhrases && (
        <Box>
          <Text fontWeight={'semibold'}>
            {t('searchBar.Search for products by the word')}
          </Text>
          <PhrasesSearchList phrases={data?.results.phrases} />
        </Box>
      )}

      <Divider />

      {isCategory && (
        <Box>
          <Text fontWeight={'semibold'}>{t('searchBar.Categories')}</Text>
          <CategorySearchList categories={data?.results.groupes} />
        </Box>
      )}
    </Box>
  )
}

export default SearchResult
