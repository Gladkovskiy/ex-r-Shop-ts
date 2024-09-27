import {useDisclosure} from '@chakra-ui/react'
import {FC, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {
  useGQDeleteCategory,
  useGQGetCategories,
} from '../../../../graphQL/hooks/settings/category'
import AppAlertDialog from '../../../Common/AppAlertDialog'
import AppBoxForm from '../../../Common/AppBoxForm'
import AppSpinner from '../../../Common/AppSpinner'
import DeleteItem from './DeleteItem'

const DeleteCategory: FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [chooseCat, setChooseCat] = useState({id: '', type: ''})
  const {data: categoriesData, loading: loadCategories} = useGQGetCategories()
  const [deleteCategory] = useGQDeleteCategory({
    categoryId: chooseCat.id,
    onSuccess: onClose,
  })
  const {t} = useTranslation('administration')

  if (loadCategories) return <AppSpinner h="35vh" />

  return (
    <>
      <AppBoxForm>
        {categoriesData?.categories.map(
          ({_id, type, description, img_path}) => (
            <DeleteItem
              key={type}
              type={type}
              img={img_path}
              description={description}
              onDelete={() => {
                setChooseCat({
                  id: _id,
                  type,
                })
                onOpen()
              }}
            />
          )
        )}
      </AppBoxForm>
      <AppAlertDialog
        bodyText={`${t(
          'Category.You definitely want to delete the category'
        )} "${chooseCat.type}"? ${t(
          'Category.All groups and goods of the category will be lost!'
        )}`}
        cancelText={t('Registration.Cancel')}
        confirmText={t('Registration.Delete')}
        headerText={t('Category.Removing category')}
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={deleteCategory}
      />
    </>
  )
}

export default DeleteCategory
