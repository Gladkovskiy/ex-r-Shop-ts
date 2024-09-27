import {Box, Text} from '@chakra-ui/react'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router-dom'
import {useGQGetValues} from '../../graphQL/hooks/products/products'
import Error from '../Common/Error'

const Settings = () => {
  const {id} = useParams<'id'>()
  const {data, loading, error} = useGQGetValues(id || '')
  const {i18n} = useTranslation()

  if (loading) return null
  if (error) return <Error />

  return (
    <Box>
      {data?.values &&
        [...data.values]
          .sort((a, b) =>
            a.attr_description.ru.localeCompare(b.attr_description.ru)
          )
          .map((value, i) => (
            <Box
              key={value.attr_description.en}
              display={'grid'}
              gridTemplateColumns={'1fr 1fr'}
              p={2}
              bgColor={i % 2 === 0 ? 'telegram.400' : 'telegram.200'}
            >
              <Text>
                {
                  value.attr_description[
                    i18n.language as keyof typeof value.attr_description
                  ]
                }
              </Text>
              <Text color={'white'}>
                {
                  value.attr_value.description[
                    i18n.language as keyof typeof value.attr_value.description
                  ]
                }
              </Text>
            </Box>
          ))}
    </Box>
  )
}

export default Settings
