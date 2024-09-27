import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Stack,
  Text,
} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {
  DescriptionLang,
  Products_Eav_Value_FilterData,
  Products_FiltersInput,
} from '../../../graphQL/__generated__/graphql'
import {useFiltersAction} from '../../../hooks/useAction'
import {useAppSelector} from '../../../hooks/useAppSelector'
import {compareObj} from '../../../utils/object/compareObj'

interface IFilterItem {
  filterDescription: string
  filterName: string
  filtersValue: Products_Eav_Value_FilterData[]
}

const FilterItem: FC<IFilterItem> = ({
  filterName,
  filtersValue,
  filterDescription,
}) => {
  const {addFilters, delFilters} = useFiltersAction()
  const {filters} = useAppSelector(r => r.FiltersReducer)
  const {i18n} = useTranslation()

  const chooseFilters = (cheked: boolean, filter: Products_FiltersInput) =>
    cheked ? addFilters(filter) : delFilters(filter)

  const chekedFilter = (filter: Products_FiltersInput) => {
    const findFilterValue = filters.find(f => compareObj(f, filter))

    return !!findFilterValue
  }

  return (
    <AccordionItem>
      <AccordionButton>
        <Text flex={1} textAlign={'left'} fontWeight={'semibold'}>
          {filterDescription}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <Stack>
          {filtersValue.map(({attr_value, count}) => (
            <Box key={attr_value.value}>
              <Checkbox
                value={attr_value.value}
                onChange={e =>
                  chooseFilters(e.target.checked, {
                    attr_name: filterName,
                    attr_value: attr_value.value,
                  })
                }
                isChecked={chekedFilter({
                  attr_name: filterName,
                  attr_value: attr_value.value,
                })}
              >
                <Box>
                  {
                    attr_value.description[
                      i18n.language as keyof DescriptionLang
                    ]
                  }
                  <Box
                    pos={'absolute'}
                    top={'-20%'}
                    left={'102%'}
                    fontWeight={'semibold'}
                    color={'gray.400'}
                    fontSize={11}
                  >
                    {count}
                  </Box>
                </Box>
              </Checkbox>
            </Box>
          ))}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default FilterItem
