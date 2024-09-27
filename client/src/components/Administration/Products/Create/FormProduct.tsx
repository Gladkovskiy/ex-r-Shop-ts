import {Button, Grid, GridItem} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {inputsData} from '../../../../formik/inputs/createProduct'
import {
  IFilter,
  IForm,
  TKeyValues,
  validation,
} from '../../../../formik/validation/createProduct'
import {
  Products_Eav_Attribute,
  SaveType,
} from '../../../../graphQL/__generated__/graphql'
import {useQGAddProduct} from '../../../../graphQL/hooks/products/products'
import {useGQUploadFilesToGoogle} from '../../../../graphQL/hooks/uploadFile/uploadFile'
import {TKeyLang} from '../../../../types/common'
import AppBoxForm from '../../../Common/AppBoxForm'
import FormikInput from '../../../Common/FormikInput'
import MutationResponse from '../../../Common/MutationResponse'
import UploadFile from '../../../Common/UploadFile'
import ChooseFilters from './ChooseFilters'
import GroupAttrs from './GroupAttrs'
interface IFormProduct {
  data: Products_Eav_Attribute[]
  group: string
}

const FormProduct: FC<IFormProduct> = ({data, group}) => {
  const {i18n, t} = useTranslation('administration')
  const {initialValues, validationSchema} = validation(i18n.language)

  const onSubmit = (values: IForm) => {
    const files = values.imgs
    if (files)
      uploadFiles({
        variables: {
          files,
          path: SaveType.Product,
        },
      }).then(({data}) => {
        addProduct({
          variables: {
            product: {
              description: {
                en: values.descriptionEn,
                ru: values.descriptionRu,
              },
              filters: [
                ...values.filters!,
                {
                  attr_name: 'Цена',
                  attr_value: {
                    value: values.price.toString(),
                    description: null,
                  },
                  attr_description: {
                    ru: 'Цена',
                    en: 'Price',
                  },
                },
              ],
              group: values.group,
              name: {
                en: values.nameEn,
                ru: values.nameRu,
              },
              img_urls: data?.uploadFilesToGoogle,
              searchTag: values.searchTag,
              quantity: +values.quantity,
            },
          },
        })
        formik.resetForm()
      })
  }

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      group,
      filters: data.reduce((filters: IFilter[], filter) => {
        if (filter.attr_name !== 'Цена' && filter.values)
          return [
            ...filters,
            {
              attr_name: filter.attr_name,
              // attr_description: filter.description,
              attr_description: {
                en: filter.description.en,
                ru: filter.description.ru,
              },
              // attr_value: filter.values[0],
              attr_value: {
                value: filter.values[0].value,
                description: {
                  ru: filter.values[0].description.ru,
                  en: filter.values[0].description.en,
                },
              },
            },
          ]
        return filters
      }, []),
    },
    validationSchema,
    onSubmit,
  })

  const [addProduct, addProductData] = useQGAddProduct()

  const [uploadFiles, {loading: uploadLoading}] = useGQUploadFilesToGoogle()

  const filtersHandler = useCallback(
    (values: IFilter[]) => {
      formik.setFieldValue('filters' as TKeyValues, values)
    },
    [formik]
  )

  return (
    <Grid gridTemplateColumns={{base: '1fr', sm: '1fr 4fr'}} mt={4}>
      <GridItem>
        {data && (
          <GroupAttrs
            filters={formik.values.filters || []}
            setFilters={filtersHandler}
            data={data}
          />
        )}
      </GridItem>

      <GridItem>
        <AppBoxForm w={{base: '100%', sm: '80%', md: '70%'}}>
          <form onSubmit={formik.handleSubmit}>
            {inputsData.map(({inputName, ...props}) => (
              <FormikInput
                key={inputName}
                error={formik.errors[inputName]}
                touched={formik.touched[inputName]}
                props={formik.getFieldProps(inputName)}
                {...props}
              />
            ))}

            <UploadFile
              error={formik.errors.imgs}
              touched={formik.touched.imgs}
              onTouched={() =>
                formik.setFieldTouched('imgs' as TKeyValues, true)
              }
              onChange={e =>
                formik.setFieldValue('imgs' as TKeyValues, e.target.files)
              }
              multiple
              language={i18n.language}
            />

            <ChooseFilters filters={formik.values.filters} />

            <MutationResponse
              error={addProductData.error?.message}
              success={
                addProductData.data?.product.name[i18n.language as TKeyLang]
              }
              successText={t('Product.Added goods -')}
            />

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
              isLoading={addProductData.loading || uploadLoading}
              loadingText={t('Product.Adding goods')}
              type="submit"
            >
              {t('Product.Add')}
            </Button>
          </form>
        </AppBoxForm>
      </GridItem>
    </Grid>
  )
}

export default FormProduct
