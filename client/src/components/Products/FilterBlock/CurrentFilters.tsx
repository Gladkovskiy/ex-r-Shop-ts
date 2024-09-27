import React, {FC} from 'react'
import {useAppSelector} from '../../../hooks/useAppSelector'
import {Box} from '@chakra-ui/react'
import {useFiltersAction} from '../../../hooks/useAction'
import {
  Products_Eav_Value_Filter,
  Products_FiltersInput,
} from '../../../graphQL/__generated__/graphql'
import {useTranslation} from 'react-i18next'
import {TKeyLang} from '../../../types/common'

interface ICurrentFilters {
  allFilters: Products_Eav_Value_Filter[]
}

const CurrentFilters: FC<ICurrentFilters> = ({allFilters}) => {
  const {filters} = useAppSelector(r => r.FiltersReducer)
  const {delFilters} = useFiltersAction()
  const {i18n} = useTranslation()

  const findValueName = (
    filter: Products_FiltersInput,
    lang: TKeyLang
  ): string => {
    const findFilter = allFilters.find(f => f.attr.name === filter.attr_name)

    if (findFilter) {
      const findValue = findFilter.values.find(
        value => value.attr_value.value === filter.attr_value
      )

      if (findValue) return findValue.attr_value.description[lang as TKeyLang]
    }

    return ''
  }

  if (filters.length === 0) return null

  return (
    <Box
      borderWidth={'1px'}
      boxShadow={['md']}
      borderRadius={5}
      p={2}
      mt={3}
      display={'flex'}
      flexWrap={'wrap'}
    >
      {filters.map(filter => (
        <Box
          key={filter.attr_value}
          p={2}
          bgColor={'gray.100'}
          borderRadius={5}
          border={'1px solid transparent'}
          _hover={{
            cursor: 'pointer',
            bgColor: 'gray.200',
          }}
          m={1}
          onClick={() => {
            delFilters(filter)
          }}
        >
          {findValueName(filter, i18n.language as TKeyLang)}
        </Box>
      ))}
    </Box>
  )
}

export default CurrentFilters
