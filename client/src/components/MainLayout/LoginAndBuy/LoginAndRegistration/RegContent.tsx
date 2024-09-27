import {FC, useMemo} from 'react'
import {Box, Button, ModalBody, ModalFooter, Stack} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {buttonSize, textSize} from '../../../../styles/responsiveStyles'
import {IInputData} from '../../../../types/formik/input'
import FormikInput from '../../../Common/FormikInput'
import {
  TKeyValues,
  initialValues,
  validationSchema,
} from './validation/registration'

interface IRegContent {
  toggle: () => void
  onClose: () => void
}

const RegContent: FC<IRegContent> = ({toggle, onClose}) => {
  const {handleSubmit, touched, errors, getFieldProps} = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      // onClose()
    },
  })

  const inputsData: IInputData<TKeyValues>[] = useMemo(
    () => [
      {inputName: 'name', label: 'Имя'},
      {inputName: 'surname', label: 'Фамилия'},
      {inputName: 'tel', label: 'Телефон', leftAddon: '+380'},
      {inputName: 'mail', label: 'Почта'},
      {inputName: 'password', label: 'Пароль', password: true},
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
              touched={touched[inputName]}
              error={errors[inputName]}
              props={getFieldProps(inputName)}
              {...props}
            />
          ))}

          <Box>
            <Button variant={'link'} onClick={toggle} fontSize={textSize}>
              Я уже зарегестрирован
            </Button>
          </Box>
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button size={buttonSize} type="submit">
          Зарегестрироваться
        </Button>
      </ModalFooter>
    </form>
  )
}

export default RegContent
