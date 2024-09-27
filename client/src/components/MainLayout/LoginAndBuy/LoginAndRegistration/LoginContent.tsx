import {
  Box,
  Button,
  ModalBody,
  ModalFooter,
  Stack,
  Text,
} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {FC, useMemo} from 'react'
import {useGQLogin} from '../../../../graphQL/hooks/auth/login'
import {useAppSelector} from '../../../../hooks/useAppSelector'
import {buttonSize, textSize} from '../../../../styles/responsiveStyles'
import {IInputData} from '../../../../types/formik/input'
import FormikInput from '../../../Common/FormikInput'
import {TKeyValues, initialValues, validationSchema} from './validation/login'

interface ILoginContent {
  toggle: () => void
  onClose: () => void
}

const LoginContent: FC<ILoginContent> = ({toggle, onClose}) => {
  const {error} = useAppSelector(s => s.AuthReducer)
  const [fetch] = useGQLogin()

  const {handleSubmit, touched, errors, getFieldProps} = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      fetch({variables: {...values}}).then(({data}) => {
        if (data) onClose()
      })
    },
  })

  const inputsData: IInputData<TKeyValues>[] = useMemo(
    () => [
      {label: 'Эл. почта или телефон', inputName: 'login'},
      {label: 'Пароль', inputName: 'pass', password: true},
    ],
    []
  )

  return (
    <form onSubmit={handleSubmit}>
      <ModalBody>
        <Stack spacing={3}>
          {inputsData.map(({inputName, ...props}) => (
            <FormikInput
              key={inputName}
              error={errors[inputName]}
              touched={touched[inputName]}
              props={getFieldProps(inputName)}
              {...props}
            />
          ))}

          <Box>
            <Button variant={'link'} onClick={toggle} fontSize={textSize}>
              Зарегистрироваться
            </Button>
          </Box>
        </Stack>
      </ModalBody>

      <ModalFooter>
        <Text flex={1} color={'red.500'}>
          {error}
        </Text>
        <Button size={buttonSize} type="submit">
          Войти
        </Button>
      </ModalFooter>
    </form>
  )
}

export default LoginContent
