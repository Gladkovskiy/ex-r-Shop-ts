import {Grid} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate, useParams} from 'react-router-dom'
import {Settings_Group} from '../../graphQL/__generated__/graphql'
import {useGQAutoGetGroups} from '../../graphQL/hooks/settings/group'
import {useFiltersAction} from '../../hooks/useAction'
import {TKeyLang} from '../../types/common'
import {RoutesForNav} from '../../types/router'
import AppClickCard from '../Common/AppClickCard'
import Error from '../Common/Error'
import SEO from '../Common/SEO'

const GroupItems: FC = () => {
  const navigate = useNavigate()
  const {params} = useParams<'params'>()
  const [id, en, ru] = params?.split('-')!
  const {data, loading, error} = useGQAutoGetGroups(id || '')
  const {i18n} = useTranslation()
  const {resetAllFilters} = useFiltersAction()

  if (loading) return null
  if (error) return <Error />

  const sortGroup = (
    arr: Omit<Settings_Group, 'category'>[],
    lang: TKeyLang
  ) => {
    const tempArr = [...arr]
    return tempArr.sort((a, b) =>
      a.description[lang].localeCompare(b.description[lang])
    )
  }

  return (
    <>
      <SEO
        description={`Группы товаров категрии ${ru}. Category product groups ${en}.`}
        title={i18n.language === 'ru' ? ru : en}
      />

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
        {sortGroup(data?.groups || [], i18n.language as TKeyLang).map(
          ({description, _id, img_path, type}) => (
            <AppClickCard
              key={_id}
              imgPath={img_path}
              description={
                description[i18n.language as keyof typeof description]!
              }
              onClick={() => {
                resetAllFilters()
                navigate(
                  RoutesForNav.PRODUCTS +
                    `${type}-${description.en}-${description.ru}`
                )
              }}
            />
          )
        )}
      </Grid>
    </>
  )
}

export default GroupItems
