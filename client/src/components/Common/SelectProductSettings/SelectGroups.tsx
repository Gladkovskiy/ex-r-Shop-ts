/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, ChangeEvent, useEffect} from 'react'
import FormikSelect from '../FormikSelect'
import {useGQGetGroups} from '../../../graphQL/hooks/settings/group'

interface ISelectGroups {
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  category: string
}

const SelectGroups: FC<ISelectGroups> = ({category, ...props}) => {
  const [getGroups, {data, loading}] = useGQGetGroups()

  useEffect(() => {
    if (category) getGroups({variables: {category}})
  }, [category])

  return (
    <FormikSelect
      data={data?.groups.map(({type}) => type) || []}
      placeholder="Выберите категорию товара"
      {...props}
      isDisabled={!!!category || loading}
    />
  )
}

export default SelectGroups
