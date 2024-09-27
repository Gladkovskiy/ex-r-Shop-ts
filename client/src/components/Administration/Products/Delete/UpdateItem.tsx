import {Box, Button, Checkbox, Text} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {inputsData} from '../../../../formik/inputs/updateProduct'
import {
  TKeyValues,
  validation,
} from '../../../../formik/validation/updateProduct'
import {useGQUpdateProduct} from '../../../../graphQL/hooks/products/products'
import {Products_Eav_Entity_Get} from '../../../../graphQL/__generated__/graphql'
import FormikInput from '../../../Common/FormikInput'

export interface IUpdateItem {
  data: Products_Eav_Entity_Get | undefined
  close: () => void
}

const UpdateItem: FC<IUpdateItem> = ({data, close}) => {
  const {i18n, t} = useTranslation('administration')
  const {initialValues, validationSchema} = validation(i18n.language)
  const formik = useFormik({
    initialValues: !data
      ? initialValues
      : {
          active: data.product.discount.active,
          newPrice: data.price,
          oldPrice: data.product.discount.oldPrice,
          quantity: 0,
        },
    validationSchema,
    onSubmit: values => {
      updateProduct({
        variables: {
          product: {
            id: data?.product._id,
            active: values.active,
            newPrice: values.newPrice.toString(),
            oldPrice: values.oldPrice.toString(),
            quantity: +values.quantity,
          },
        },
      })
    },
  })

  const [updateProduct, {loading: updateLoading}] = useGQUpdateProduct({
    onSuccess: close,
    id: data?.product._id,
    price: formik.values.newPrice,
  })

  if (!data) return <Text>{t('Product.Something went wrong...')}</Text>

  return (
    <Box
      p={2}
      borderWidth={'1px'}
      borderColor={'gray.200'}
      borderRadius={'5px'}
    >
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        {inputsData.map(({inputName, ...props}) => (
          <FormikInput
            key={inputName}
            error={formik.errors[inputName]}
            touched={formik.touched[inputName]}
            props={formik.getFieldProps(inputName)}
            {...props}
          />
        ))}

        <Text my={2}>
          {t('Product.Availability in warehouse:')} {data.product.quantity}
        </Text>

        <Checkbox
          onChange={e =>
            formik.setFieldValue('active' as TKeyValues, e.target.checked)
          }
          isChecked={formik.values.active}
          mt={2}
        >
          {t('Product.Activate discount')}
        </Checkbox>

        <Button
          width={'full'}
          mt={10}
          mb={2}
          onClick={() => {
            formik.resetForm()
          }}
        >
          {t('Product.Clear')}
        </Button>

        <Button
          width={'full'}
          isLoading={updateLoading}
          loadingText={t('Product.Change of goods')}
          type="submit"
        >
          {t('Product.Add')}
        </Button>
      </form>
    </Box>
  )
}

export default UpdateItem
