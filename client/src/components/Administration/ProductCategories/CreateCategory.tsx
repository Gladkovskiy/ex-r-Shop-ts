import {Button} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {inputsData} from '../../../formik/inputs/createCategory'
import {
  TKeyValues,
  validation,
  IForm,
} from '../../../formik/validation/createCategory'
import {useGQAddCategory} from '../../../graphQL/hooks/settings/category'
import AppBoxForm from '../../Common/AppBoxForm'
import FormikInput from '../../Common/FormikInput'
import MutationResponse from '../../Common/MutationResponse'
import UploadFile from '../../Common/UploadFile'
import {useGQUploadFilesToGoogle} from '../../../graphQL/hooks/uploadFile/uploadFile'
import {SaveType} from '../../../graphQL/__generated__/graphql'

const CreateCategory: FC = () => {
  const {i18n, t} = useTranslation('administration')
  const {initialValues, validationSchema} = validation(i18n.language)

  const onSubmit = (values: IForm) => {
    uploadFiles({
      variables: {
        files: values.img,
        path: SaveType.Category,
      },
    }).then(({data}) => {
      const img_path = data?.uploadFilesToGoogle[0]
      if (img_path)
        addCategory({
          variables: {
            category: {
              description: {
                en: values.en,
                ru: values.ru,
              },
              type: values.type,
              img_path,
            },
          },
        }).then(() => {
          resetForm()
        })
    })
  }

  const {
    handleSubmit,
    touched,
    errors,
    getFieldProps,
    setFieldValue,
    setFieldTouched,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  const [uploadFiles, {loading: fileLoading}] = useGQUploadFilesToGoogle()
  const [
    addCategory,
    {loading: categoryLoading, reset, data: categoryData, error: categoryError},
  ] = useGQAddCategory()

  return (
    <AppBoxForm>
      <form onSubmit={handleSubmit} onFocus={reset}>
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
          onChange={e => setFieldValue('img' as TKeyValues, e.target.files!)}
          language={i18n.language}
        />

        <MutationResponse
          error={categoryError?.message}
          success={categoryData?.category.type}
          successText={`${t('Category.Added category')} -`}
        />

        <Button width={'full'} mt={10} mb={2} onClick={() => resetForm()}>
          {t('Category.Clear')}
        </Button>

        <Button
          width={'full'}
          isLoading={categoryLoading || fileLoading}
          loadingText={`${t('Category.Adding category')}...`}
          type="submit"
        >
          {t('Category.Add')}
        </Button>
      </form>
    </AppBoxForm>
  )
}

export default CreateCategory
