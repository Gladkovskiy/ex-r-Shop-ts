import {useDisclosure} from '@chakra-ui/react'
import {ChangeEvent, FC, useState} from 'react'
import {useGQGetCategories} from '../../../graphQL/hooks/settings/category'
import {
  useGQDeleteGroup,
  useGQGetGroups,
} from '../../../graphQL/hooks/settings/group'
import AppAlertDialog from '../../Common/AppAlertDialog'
import AppBoxForm from '../../Common/AppBoxForm'
import AppSpinner from '../../Common/AppSpinner'
import FormikSelect from '../../Common/FormikSelect'
import DeleteItem from '../ProductCategories/DeleteCategory/DeleteItem'
import AppSkeleton from '../../Common/AppSkeleton'
import {useTranslation} from 'react-i18next'

const DeleteGroup: FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [chooseGroup, setChooseGroup] = useState({
    id: '',
    type: '',
    category: '',
  })
  const {data: categoriesData, loading: loadingCategories} =
    useGQGetCategories()
  const [getGroups, {data: groupData, loading}] = useGQGetGroups()
  const [deleteGroup] = useGQDeleteGroup({
    id: chooseGroup.id,
    category: chooseGroup.category,
    onSuccess: onClose,
  })
  const {t} = useTranslation('administration')

  if (loadingCategories) return <AppSpinner h="35vh" />

  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    getGroups({variables: {category: e.target.value}})
    setChooseGroup(state => ({...state, category: e.target.value}))
  }

  const deleteHandler = (id: string, type: string) => () => {
    setChooseGroup(state => ({...state, id, type}))
    onOpen()
  }

  return (
    <>
      <AppBoxForm>
        <FormikSelect
          data={categoriesData?.categories.map(({type}) => type) || []}
          onChange={selectHandler}
          placeholder={t('Group.Choose the category of goods')}
          mb={chooseGroup.category && 4}
        />

        {!loading ? (
          groupData?.groups.map(({_id, description, img_path, type}) => (
            <DeleteItem
              key={type}
              description={description}
              img={img_path}
              type={type}
              onDelete={deleteHandler(_id, type)}
            />
          ))
        ) : (
          <AppSkeleton repeat={3} />
        )}
      </AppBoxForm>

      <AppAlertDialog
        bodyText={`${t('Group.You definitely want to delete the group')} "${
          chooseGroup.type
        }"? ${t('Group.All groups of the group will be lost!')}`}
        cancelText={t('Group.Cancel')}
        confirmText={t('Group.Delete')}
        headerText={t('Group.Add group')}
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={deleteGroup}
      />
    </>
  )
}

export default DeleteGroup
