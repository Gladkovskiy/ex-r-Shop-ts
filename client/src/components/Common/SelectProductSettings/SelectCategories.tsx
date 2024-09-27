import {FC, ChangeEvent} from 'react'
import FormikSelect from '../FormikSelect'
import {useGQGetCategories} from '../../../graphQL/hooks/settings/category'

interface ISelectCategories {
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectCategories: FC<ISelectCategories> = props => {
  const {data, loading} = useGQGetCategories()

  return (
    <FormikSelect
      data={data?.categories.map(({type}) => type) || []}
      placeholder="Выберите категорию товара"
      {...props}
      isDisabled={loading}
    />
  )
}

export default SelectCategories
