import {Box, CloseButton, Flex, Text} from '@chakra-ui/react'
import React, {FC} from 'react'
import {IValue} from '../../../../formik/validation/createAttribute'

interface IAttrValue {
  value: IValue
  delValue: () => void
}

const AttributeValue: FC<IAttrValue> = ({delValue, value}) => {
  return (
    <Flex
      position={'relative'}
      alignItems={'center'}
      p={2}
      my={1}
      borderWidth={'1px'}
      borderColor={'gray.200'}
      borderRadius={'5px'}
      boxShadow={'md'}
    >
      <Box flex={1}>
        <Text textDecor={'underline'} fontWeight={'semibold'}>
          Значание
        </Text>
        <Text>{value.value}</Text>
      </Box>
      <Box flex={1}>
        <Text textDecor={'underline'} fontWeight={'semibold'}>
          Описание
        </Text>
        <Text>ru: {value.description.ru}</Text>
        <Text>en: {value.description.en}</Text>
      </Box>
      <CloseButton
        position={'absolute'}
        top={'2%'}
        right={'1%'}
        onClick={delValue}
      />
    </Flex>
  )
}

export default AttributeValue
