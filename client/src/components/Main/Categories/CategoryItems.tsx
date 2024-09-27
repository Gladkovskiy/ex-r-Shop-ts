import {Grid} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {Settings_Category} from '../../../graphQL/__generated__/graphql'
import {useGQGetCategories} from '../../../graphQL/hooks/settings/category'
import {TKeyLang} from '../../../types/common'
import {RoutesForNav} from '../../../types/router'
import AppClickCard from '../../Common/AppClickCard'
import Error from '../../Common/Error'

const CategoryItems: FC = () => {
  const {data, loading, error} = useGQGetCategories()
  const navigate = useNavigate()
  const {i18n} = useTranslation()

  if (loading) return null
  if (error) return <Error />

  const sortCategory = (arr: Settings_Category[], lang: TKeyLang) => {
    const tempArr = [...arr]
    return tempArr.sort((a, b) =>
      a.description[lang].localeCompare(b.description[lang])
    )
  }

  return (
    <Grid
      gridTemplateColumns={[
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        null,
        'repeat(5, 1fr)',
      ]}
      gap={[2, 3, 4, 5]}
      my={10}
    >
      {sortCategory(data?.categories || [], i18n.language as TKeyLang).map(
        ({description, _id, img_path, type}) => (
          <AppClickCard
            key={_id}
            imgPath={img_path}
            description={
              description[i18n.language as keyof typeof description]!
            }
            onClick={() =>
              navigate(
                RoutesForNav.CATEGORY +
                  `${type}-${description.en}-${description.ru}`
              )
            }
          />
        )
      )}
    </Grid>
  )
}

export default CategoryItems
