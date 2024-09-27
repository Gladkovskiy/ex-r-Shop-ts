import {FC, useState} from 'react'
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import {FieldInputProps} from 'formik'
import {BiShow, BiHide} from 'react-icons/bi'
import {useTranslation} from 'react-i18next'

interface IFormokInput {
  touched: boolean | undefined | any[]
  error: string | undefined | any[]
  props: FieldInputProps<any>
  label:
    | string
    | {
        ru: string
        en: string
      }
  leftAddon?: string | undefined
  password?: boolean | undefined
}

const FormikInput: FC<IFormokInput> = ({
  error,
  props,
  touched,
  label,
  leftAddon = '',
  password = false,
}) => {
  const [showPass, setShowPass] = useState(!password)
  const {i18n} = useTranslation()

  return (
    <FormControl mt={2}>
      <Text color={'gray.400'}>
        {typeof label === 'string'
          ? label
          : label[i18n.language as keyof typeof label]}
      </Text>
      <InputGroup>
        {leftAddon && <InputLeftAddon children={leftAddon} pr={0} />}

        <Input
          {...props}
          isInvalid={!!touched && !!error}
          type={showPass ? 'text' : 'password'}
        />

        {password && (
          <InputRightElement>
            <Box>
              <IconButton
                size={['xs', 'sm', 'md']}
                aria-label="password"
                icon={showPass ? <BiHide /> : <BiShow />}
                onClick={() => setShowPass(state => !state)}
              />
            </Box>
          </InputRightElement>
        )}
      </InputGroup>
      {touched && error && <Text color={'red.400'}>{error}</Text>}
    </FormControl>
  )
}

export default FormikInput
