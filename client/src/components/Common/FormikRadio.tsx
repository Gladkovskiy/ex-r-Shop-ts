import {FormControl, Radio, RadioGroup, Stack, Text} from '@chakra-ui/react'
import {FC} from 'react'

interface IFormikRadio {
  value: string
  onChange: (value: string) => void
  data: string[] | undefined
}

const FormikRadio: FC<IFormikRadio> = ({data, ...props}) => {
  return (
    <FormControl mb={5}>
      <RadioGroup {...props}>
        <Text color={'gray.400'}>Роль</Text>
        <Stack direction={'row'} spacing={[3, 5]}>
          {data?.map(value => (
            <Radio
              key={value}
              value={value}
              colorScheme={'telegram'}
              size={['sm', 'md', 'lg']}
            >
              <Text>{value}</Text>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default FormikRadio
