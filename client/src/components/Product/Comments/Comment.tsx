import {Box, Text} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import ReactStars from 'react-stars'

export interface IComment {
  name: string
  date: string
  text: string
  advantages?: string
  flaws?: string
  rating: number
}

const Comment: FC<IComment> = ({
  advantages,
  date,
  flaws,
  name,
  text,
  rating,
}) => {
  const {t} = useTranslation('product')

  return (
    <Box
      my={5}
      border={'1px solid black'}
      borderColor={'gray.400'}
      borderRadius={5}
      p={2}
      bgColor={'telegram.100'}
    >
      <Box display={'flex'} justifyContent={'space-between'}>
        <Text fontWeight={'semibold'} mb={4}>
          {name}
        </Text>
        <Text color={'gray.400'}>{date}</Text>
      </Box>

      <Box mb={3}>
        <ReactStars
          count={5}
          size={24}
          value={rating}
          color2={'#ffd700'}
          half
          edit={false}
        />
      </Box>

      <Text>{text}</Text>

      {advantages && (
        <Text my={2}>
          <b>{t('Comments.Advantages')}:</b> {advantages}
        </Text>
      )}

      {flaws && (
        <Text>
          <b>{t('Comments.Flaws')}:</b> {flaws}
        </Text>
      )}
    </Box>
  )
}

export default Comment
