import {Box, Button, Text} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {FC, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {inputsData} from '../../../../formik/inputs/createAttributeValue'
import {validation} from '../../../../formik/validation/addAttributeValue'
import {IValue} from '../../../../formik/validation/createAttribute'
import AppTextError from '../../../Common/AppTextError'
import FormikInput from '../../../Common/FormikInput'
import AttributeValue from './AttributeValue'

interface IAddAttrValue {
  values: IValue[]
  setValues: (value: IValue) => void
  deleteValue: (value: string) => void
}

const AddAttributeValue: FC<IAddAttrValue> = ({
  setValues,
  values,
  deleteValue,
}) => {
  const {i18n, t} = useTranslation('administration')
  const {initialValues, validationSchema} = validation(i18n.language)
  const [uniqueErr, setUniqueErr] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({en, ru, value}) => {
      const notUnique = values.find(item => item.value === value)

      if (notUnique) {
        setUniqueErr(true)
      } else {
        setValues({
          value,
          description: {
            ru,
            en,
          },
        })
      }
    },
  })

  return (
    <Box>
      <Box
        p={2}
        borderWidth={'1px'}
        borderColor={'gray.200'}
        borderRadius={'5px'}
        bgColor={'white'}
      >
        <Text
          fontWeight={'semibold'}
          textAlign={'center'}
          mb={2}
          textDecor={'underline'}
        >
          {t('Attribute.Attribute values')}
        </Text>

        <Box>
          <form
            onSubmit={formik.handleSubmit}
            onReset={() => formik.resetForm()}
            onFocus={() => setUniqueErr(false)}
          >
            {inputsData.map(({inputName, ...props}) => (
              <FormikInput
                key={inputName}
                error={formik.errors[inputName]}
                touched={formik.touched[inputName]}
                props={formik.getFieldProps(inputName)}
                {...props}
              />
            ))}

            <AppTextError
              isError={uniqueErr}
              text={t('Attribute.Such a value is already present')}
            />

            <Button width={'full'} mt={5} type="reset">
              {t('Attribute.Clear')}
            </Button>
            <Button width={'full'} type="submit" mt={2}>
              {t('Attribute.Add')}
            </Button>
          </form>
        </Box>

        {values.length !== 0 && (
          <Box mt={3}>
            <Text color={'gray.400'}>{t('Attribute.Meanings')}:</Text>
            {values.map(value => (
              <AttributeValue
                key={value.value}
                value={value}
                delValue={() => deleteValue(value.value)}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default AddAttributeValue
