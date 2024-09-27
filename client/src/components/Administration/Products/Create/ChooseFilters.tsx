import {Box, Flex, Text} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {IFilter} from '../../../../formik/validation/createProduct'
import {TKeyLang} from '../../../../types/common'

interface IChooseFilters {
  filters: IFilter[]
}

const ChooseFilters: FC<IChooseFilters> = ({filters}) => {
  const {i18n} = useTranslation()

  return (
    <Flex wrap={'wrap'}>
      {filters.map(filter => (
        <Box
          key={filter.attr_name}
          m={2}
          p={2}
          borderWidth={'1px'}
          borderColor={'gray.200'}
          borderRadius={'5px'}
          boxShadow={['md', null, null, 'lg']}
        >
          <Text fontWeight={'semibold'}>
            {filter.attr_description[i18n.language as TKeyLang]}
          </Text>
          <Text>
            {filter.attr_value.description[i18n.language as TKeyLang]}
          </Text>
        </Box>
      ))}
    </Flex>
  )
}

export default ChooseFilters
