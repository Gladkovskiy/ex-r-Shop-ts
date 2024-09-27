import {Button} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {inputsData} from '../../../formik/inputs/createGroup'
import {TKeyValues} from '../../../formik/validation/createGroup'
import {useGQGetCategories} from '../../../graphQL/hooks/settings/category'
import {useGQAddGroup} from '../../../graphQL/hooks/settings/group'
import AppBoxForm from '../../Common/AppBoxForm'
import AppSpinner from '../../Common/AppSpinner'
import FormikInput from '../../Common/FormikInput'
import FormikSelect from '../../Common/FormikSelect'
import MutationResponse from '../../Common/MutationResponse'
import UploadFile from '../../Common/UploadFile'
import {validation, IForm} from '../../../formik/validation/createGroup'
import {useGQUploadFilesToGoogle} from '../../../graphQL/hooks/uploadFile/uploadFile'
import {SaveType} from '../../../graphQL/__generated__/graphql'

const CreateGroup: FC = () => {
  const {i18n, t} = useTranslation('administration')
  const {initialValues, validationSchema} = validation(i18n.language)

  const onSubmit = (values: IForm) => {
    uploadFile({
      variables: {
        files: values.img,
        path: SaveType.Group,
      },
    }).then(({data}) => {
      const img_path = data?.uploadFilesToGoogle[0]
      if (img_path)
        addGroup({
          variables: {
            group: {
              description: {
                ru: values.ru,
                en: values.en,
              },
              category: values.category,
              type: values.type,
              img_path,
            },
          },
        })
      resetForm()
    })
  }

  const {
    handleSubmit,
    touched,
    errors,
    getFieldProps,
    setFieldValue,
    setFieldTouched,
    values,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  const {data: categoriesData, loading} = useGQGetCategories()
  const [uploadFile, {loading: uploadLoading}] = useGQUploadFilesToGoogle()
  const [
    addGroup,
    {loading: loadingAddGroup, reset, data: groupData, error: groupError},
  ] = useGQAddGroup(values.category)

  if (loading) return <AppSpinner h="35vh" />

  return (
    <AppBoxForm>
      <form onSubmit={handleSubmit} onFocus={reset}>
        <FormikSelect
          data={categoriesData?.categories.map(({type}) => type) || []}
          value={values.category}
          onChange={e =>
            setFieldValue('category' as TKeyValues, e.target.value)
          }
          touched={touched.category}
          error={errors.category}
          placeholder={t('Group.Select the product category')}
        />

        {inputsData.map(({inputName, ...props}) => (
          <FormikInput
            key={inputName}
            error={errors[inputName]}
            touched={touched[inputName]}
            props={getFieldProps(inputName)}
            {...props}
          />
        ))}

        <UploadFile
          error={errors.img}
          touched={touched.img}
          onTouched={() => setFieldTouched('img' as TKeyValues, true)}
          onChange={e => setFieldValue('img' as TKeyValues, e.target.files)}
          language={i18n.language}
        />

        <MutationResponse
          error={groupError?.message}
          success={groupData?.group.type}
          successText={t('Group.Added group -')}
        />

        <Button width={'full'} mt={10} mb={2} onClick={() => resetForm()}>
          {t('Group.Clear')}
        </Button>

        <Button
          width={'full'}
          isLoading={loadingAddGroup || uploadLoading}
          loadingText={t('Group.Add group')}
          type="submit"
        >
          {t('Group.Add')}
        </Button>
      </form>
    </AppBoxForm>
  )
}

export default CreateGroup
