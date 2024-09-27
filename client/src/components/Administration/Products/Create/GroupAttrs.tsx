import {Box, Flex, Heading, Radio, RadioGroup, Stack} from '@chakra-ui/react'
import {FC} from 'react'
import {Products_Eav_Attribute} from '../../../../graphQL/__generated__/graphql'
import {IFilter} from '../../../../formik/validation/createProduct'
import {useTranslation} from 'react-i18next'
import {TKeyLang} from '../../../../types/common'

interface IGroupsAttrs {
  filters: IFilter[]
  setFilters: (values: IFilter[]) => void
  data: Products_Eav_Attribute[]
}

const GroupAttrs: FC<IGroupsAttrs> = ({filters, setFilters, data}) => {
  const {i18n} = useTranslation()

  const onChangeHandler = (value: string, attr: Products_Eav_Attribute) => {
    const findValue = attr.values?.find(item => item.value === value)!
    const findAttr = filters.find(filter => filter.attr_name === attr.attr_name)

    if (findAttr) {
      const newFilters = filters.map(filter => {
        if (filter.attr_name === findAttr.attr_name)
          return {
            ...findAttr,
            attr_value: {
              description: {
                en: findValue.description.en,
                ru: findValue.description.ru,
              },
              value: findValue.value,
            },
          }
        return filter
      })

      setFilters(newFilters)
    }
  }

  return (
    <Box my={2}>
      <Flex wrap={'wrap'} flexDirection={'column'}>
        {data.map(attr => {
          if (attr.attr_name === 'Цена') return null
          return (
            <Box
              key={attr._id}
              borderWidth={'1px'}
              borderColor={'gray.200'}
              borderRadius={'5px'}
              boxShadow={['md', null, null, 'lg']}
              p={2}
              m={2}
            >
              <RadioGroup
                onChange={value => onChangeHandler(value, attr)}
                value={
                  filters.find(filter => filter.attr_name === attr.attr_name)
                    ?.attr_value.value
                }
              >
                <Heading fontWeight={'semibold'} mb={2}>
                  {attr.description[i18n.language as TKeyLang]}
                </Heading>
                <Stack direction={'column'}>
                  {attr.values?.map(({description, value}) => (
                    <Radio
                      key={value}
                      value={value}
                      colorScheme={'telegram'}
                      size={['sm', 'md', 'lg']}
                      ml={2}
                    >
                      {description[i18n.language as TKeyLang]}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}

export default GroupAttrs
