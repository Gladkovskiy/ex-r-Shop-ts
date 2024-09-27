import {Flex, Select, SelectProps, Text} from '@chakra-ui/react'
import React, {FC} from 'react'

interface IFormikSelect extends SelectProps {
  data: string[]
  label?: string
  placeholder?: string
  error?: string | undefined
  touched?: boolean | undefined
}

const FormikSelect: FC<IFormikSelect> = ({
  data,
  placeholder = '',
  touched,
  error,
  label = '',
  ...props
}) => {
  return (
    <>
      <Text color={'gray.400'}>{label}</Text>
      <Flex justifyContent={'flex-start'}>
        <Select
          variant={'filled'}
          w={['100%']}
          placeholder={placeholder}
          size={['xs', 'sm', 'md', 'lg']}
          pos={'relative'}
          {...props}
        >
          {data.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </Flex>
      {touched && error && <Text color={'red.400'}>{error}</Text>}
    </>
  )
}

export default FormikSelect
