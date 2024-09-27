import {Button} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {inputsData} from '../../../../formik/inputs/createUser'
import {TKeyValues, validation} from '../../../../formik/validation/createUser'
import {useGQAdmReg} from '../../../../graphQL/hooks/auth/adminRegistration'
import {useGQGetRoles} from '../../../../graphQL/hooks/role/getRoles'
import AppBoxForm from '../../../Common/AppBoxForm'
import AppSpinner from '../../../Common/AppSpinner'
import FormikInput from '../../../Common/FormikInput'
import FormikRadio from '../../../Common/FormikRadio'
import MutationResponse from '../../../Common/MutationResponse'

const CreateUser: FC = () => {
  const {data, loading} = useGQGetRoles()
  const {t, i18n} = useTranslation('administration')
  const {initialValues, validationSchema} = validation(i18n.language)

  const {
    handleSubmit,
    touched,
    errors,
    getFieldProps,
    setFieldValue,
    values,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      adminRegistration()
    },
  })

  const [
    adminRegistration,
    {error: regError, data: regData, loading: regLoading, reset: regReset},
  ] = useGQAdmReg({
    onSuccess: resetForm,
    user: values,
  })

  if (loading) return <AppSpinner h="35vh" />

  return (
    <AppBoxForm>
      <form onSubmit={handleSubmit} onFocus={regReset}>
        {inputsData.map(({inputName, ...props}) => (
          <FormikInput
            key={inputName}
            error={errors[inputName]}
            touched={touched[inputName]}
            props={getFieldProps(inputName)}
            {...props}
          />
        ))}

        <FormikRadio
          value={values.role}
          onChange={role => setFieldValue('role' as TKeyValues, role)}
          data={data?.roles.map(({type}) => type)}
        />

        <MutationResponse
          error={regError?.message}
          success={regData?.name?.fullname}
          successText={t('Registration.Added')}
        />

        <Button
          width={'full'}
          isLoading={regLoading}
          loadingText={t('Registration.User registration')}
          type="submit"
          mt={10}
        >
          {t('Registration.Add')}
        </Button>
      </form>
    </AppBoxForm>
  )
}

export default CreateUser
