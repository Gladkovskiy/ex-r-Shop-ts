/* eslint-disable react-hooks/exhaustive-deps */
import {Box, Button, Grid} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {ChangeEvent, FC, useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {inputsData} from '../../../../formik/inputs/createAttribute'
import {
  IValue,
  TKeyValues,
  validation,
} from '../../../../formik/validation/createAttribute'
import {useGQAddAttribute} from '../../../../graphQL/hooks/products/attribute'
import {useGQGetCategories} from '../../../../graphQL/hooks/settings/category'
import {useGQGetGroups} from '../../../../graphQL/hooks/settings/group'
import AppSpinner from '../../../Common/AppSpinner'
import FormikInput from '../../../Common/FormikInput'
import FormikSelect from '../../../Common/FormikSelect'
import MutationResponse from '../../../Common/MutationResponse'
import AddAttributeValue from './AddAttributeValue'

const CreateAttribute: FC = () => {
  const {i18n, t} = useTranslation('administration')
  const {validationSchema, initialValues} = validation(i18n.language)
  const [selectCategory, setSelectCategory] = useState('')
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({attr_name, en, group, ru, values}) => {
      addAttribute({
        variables: {
          attr: {
            attr_name,
            description: {
              en,
              ru,
            },
            group,
            values,
          },
        },
      })
    },
  })

  const {data: categoriesData, loading: loadingCategory} = useGQGetCategories()

  const [getGroups, {data: groupData, loading: loadingGroups}] =
    useGQGetGroups()

  const [
    addAttribute,
    {loading: loadingAttr, error: errAttr, data: dataAttr, reset},
  ] = useGQAddAttribute({
    onSuccess: () => {
      formik.resetForm()
      setSelectCategory('')
    },
  })

  const selectCategoryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectCategory(e.target.value)
    formik.setFieldValue('group' as TKeyValues, '')
    getGroups({variables: {category: e.target.value}})
  }
  const selectGroupHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    formik.setFieldValue('group' as TKeyValues, e.target.value)
  }
  const deleteValueHandler = useCallback(
    (delValue: string) => {
      if (formik.values.values)
        formik.setFieldValue(
          'values' as TKeyValues,
          formik.values.values.filter(({value}) => value !== delValue)
        )
    },
    [formik.values.values]
  )
  const setValueHandler = useCallback(
    (value: IValue) =>
      formik.setFieldValue('values' as TKeyValues, [
        ...(formik.values.values || []),
        value,
      ]),
    [formik.values.values]
  )

  if (loadingCategory) return <AppSpinner h="35vh" />

  return (
    <Grid gridTemplateColumns={{base: '1fr', md: '1fr 1fr'}} gap={4}>
      <Box
        p={2}
        borderWidth={'1px'}
        borderColor={'gray.200'}
        borderRadius={'5px'}
        bgColor={'white'}
      >
        <form onSubmit={formik.handleSubmit} onFocus={reset}>
          <FormikSelect
            data={categoriesData?.categories.map(({type}) => type) || []}
            value={selectCategory}
            onChange={selectCategoryHandler}
            placeholder={t('Attribute.Choose the category of goods')}
          />

          <FormikSelect
            data={groupData?.groups.map(({type}) => type) || []}
            value={formik.values.group}
            onChange={selectGroupHandler}
            touched={formik.touched.group}
            error={formik.errors.group}
            placeholder={t('Attribute.Choose a group of goods')}
            isDisabled={!!!selectCategory || loadingGroups}
            mt={4}
          />

          {inputsData.map(({inputName, ...props}) => (
            <FormikInput
              key={inputName}
              error={formik.errors[inputName]}
              touched={formik.touched[inputName]}
              props={formik.getFieldProps(inputName)}
              {...props}
            />
          ))}

          <MutationResponse
            error={errAttr?.message}
            success={dataAttr?.attribute.attr_name}
            successText="Добавлен атрибут -"
          />

          <Button
            width={'full'}
            mt={10}
            mb={2}
            onClick={() => {
              setSelectCategory('')
              formik.resetForm()
            }}
          >
            {t('Attribute.Clear')}
          </Button>

          <Button
            width={'full'}
            isLoading={loadingAttr}
            loadingText={t('Attribute.Add attribute')}
            type="submit"
          >
            {t('Attribute.Add')}
          </Button>
        </form>
      </Box>

      <AddAttributeValue
        values={formik.values.values || []}
        setValues={setValueHandler}
        deleteValue={deleteValueHandler}
      />
    </Grid>
  )
}

export default CreateAttribute
