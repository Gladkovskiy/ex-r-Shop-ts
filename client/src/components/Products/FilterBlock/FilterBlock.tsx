import {Accordion, Box} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {
  DescriptionLang,
  Products_Eav_Value_Filter,
} from '../../../graphQL/__generated__/graphql'
import FilterItem from './FilterItem'

interface IFilterBlock {
  filters: Products_Eav_Value_Filter[]
}

const FilterBlock: FC<IFilterBlock> = ({filters}) => {
  const {i18n} = useTranslation()

  return (
    <Box borderWidth={'1px'} boxShadow={['md']} borderRadius={5} p={2} mt={3}>
      <Accordion allowMultiple defaultIndex={[0]}>
        {filters.map(({attr, values}) => {
          const sortValues = [...values]

          sortValues.sort((a, b) =>
            a.attr_value.description[
              i18n.language as keyof DescriptionLang
            ]!.localeCompare(
              b.attr_value.description[i18n.language as keyof DescriptionLang]!
            )
          )

          return (
            <FilterItem
              key={attr.name}
              filterDescription={
                attr.description[i18n.language as keyof DescriptionLang]!
              }
              filterName={attr.name}
              filtersValue={sortValues}
            />
          )
        })}
      </Accordion>
    </Box>
  )
}

export default FilterBlock
