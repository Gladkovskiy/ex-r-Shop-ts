import {ArrowBackIcon} from '@chakra-ui/icons'
import {Button, IconButton} from '@chakra-ui/react'
import {FC, useState, useCallback} from 'react'
import {Products_Eav_Attribute} from '../../../../graphQL/__generated__/graphql'
import AddAttributeValue from '../createAttribute/AddAttributeValue'
import {IValue} from '../../../../formik/validation/createAttribute'
import {useGQUpdateAttribute} from '../../../../graphQL/hooks/products/attribute'

interface IUpdateAttribute {
  attr: Products_Eav_Attribute
  onClose: () => void
}

const UpdateAttribute: FC<IUpdateAttribute> = ({attr, onClose}) => {
  const [values, setValues] = useState(attr.values || [])
  const [updateAttr, {loading}] = useGQUpdateAttribute({
    id: attr._id,
    values: values.map(({description, value}) => ({
      value,
      description: {
        en: description.en,
        ru: description.ru,
      },
    })),
    onSuccess: onClose,
    group: attr.group,
  })

  const setValueHandler = useCallback(
    (value: IValue) => setValues(state => [...state, value]),
    [setValues]
  )
  const deleteValueHandler = useCallback(
    (delValue: string) =>
      setValues(state => state.filter(({value}) => value !== delValue)),

    [setValues]
  )

  return (
    <>
      <IconButton
        aria-label="back"
        icon={<ArrowBackIcon />}
        variant={'ghost'}
        onClick={onClose}
      />
      <AddAttributeValue
        values={values}
        setValues={setValueHandler}
        deleteValue={deleteValueHandler}
      />

      <Button
        width={'full'}
        mt={5}
        isDisabled={JSON.stringify(attr.values) === JSON.stringify(values)}
        isLoading={loading}
        loadingText={'Изменение атрибута...'}
        onClick={() => updateAttr()}
      >
        Изменить
      </Button>
    </>
  )
}

export default UpdateAttribute
