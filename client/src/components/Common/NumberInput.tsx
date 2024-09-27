import {Button, HStack, Input, useNumberInput} from '@chakra-ui/react'
import {FC} from 'react'

interface INumberInput {
  getValue: (value: number) => void
  max: number
  defaultValue: number
}

const NumberInput: FC<INumberInput> = ({getValue, max, defaultValue}) => {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber,
  } = useNumberInput({
    step: 1,
    defaultValue,
    min: 1,
    max,
    precision: 0,
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW={'150px'}>
      <Button {...inc} onClick={() => getValue(valueAsNumber)}>
        +
      </Button>
      <Input
        {...input}
        disabled
        _disabled={{color: 'black'}}
        textAlign={'center'}
      />
      <Button {...dec} onClick={() => getValue(valueAsNumber)}>
        -
      </Button>
    </HStack>
  )
}

export default NumberInput
