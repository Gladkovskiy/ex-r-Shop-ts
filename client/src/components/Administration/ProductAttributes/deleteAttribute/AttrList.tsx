/* eslint-disable react-hooks/exhaustive-deps */
import {Box, useDisclosure} from '@chakra-ui/react'
import {FC, useState} from 'react'
import {
  useGQDeleteAttribute,
  useGQGetAttributes,
} from '../../../../graphQL/hooks/products/attribute'
import AppSkeleton from '../../../Common/AppSkeleton'
import DeleteItem from './DeleteItem'
import AppAlertDialog from '../../../Common/AppAlertDialog'
import {Products_Eav_Attribute} from '../../../../graphQL/__generated__/graphql'

interface IAttrList {
  group: string
  changeAttr: (attr: Products_Eav_Attribute) => void
}

const AttrList: FC<IAttrList> = ({group, changeAttr}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [delAttr, setDelAttr] = useState({
    _id: '',
    attr_name: '',
  })
  const {data, loading} = useGQGetAttributes(group)
  const [deleteAttribute, {loading: loadingDelete}] = useGQDeleteAttribute({
    id: delAttr._id,
    group,
  })

  if (loading) return <AppSkeleton repeat={3} />

  return (
    <Box>
      {data?.attrs.map(attr => (
        <DeleteItem
          key={attr.attr_name}
          description={attr.description}
          onDelete={() => {
            setDelAttr({_id: attr._id, attr_name: attr.attr_name})
            onOpen()
          }}
          onChange={() => changeAttr(attr)}
        />
      ))}

      <AppAlertDialog
        isOpen={isOpen}
        onClose={onClose}
        cancelText={'Отмена'}
        confirmText={'Удалить'}
        bodyText={`Удалить атрибут "${delAttr.attr_name}"`}
        headerText={'Удаление атрибута'}
        onConfirm={() => {
          deleteAttribute()
          onClose()
        }}
        isLoading={loadingDelete}
        loadingText={'Удаление атрибута'}
      />
    </Box>
  )
}

export default AttrList
