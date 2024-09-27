import {Text, useDisclosure} from '@chakra-ui/react'
import {debounce} from 'lodash'
import {ChangeEvent, FC, useMemo, useState} from 'react'
import {useGQUserDelete} from '../../../../graphQL/hooks/auth/userDelete'
import {useGQUserSearch} from '../../../../graphQL/hooks/auth/userSearch'
import AppAlertDialog from '../../../Common/AppAlertDialog'
import AppBoxForm from '../../../Common/AppBoxForm'
import DeleteItem from './DeleteItem'
import SearchInput from '../../../Common/SearchInput'
import {useTranslation} from 'react-i18next'

const DeleteUser: FC = () => {
  const [text, setText] = useState('')
  const [user, setUser] = useState({
    id: '',
    fullname: '',
  })
  const [search, {data: dataSearch, loading: loadingSearch}] = useGQUserSearch()
  const [deleteUser] = useGQUserDelete(text)
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure()

  const {t} = useTranslation('administration')

  const searchHandler = (value: string) => {
    search({variables: {text: value}})
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandle = useMemo(() => debounce(searchHandler, 500), [])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    debounceHandle(e.target.value)
  }

  const handleSelect = (user: {id: string; fullname: string}) => {
    setUser(user)
    onOpenAlert()
  }

  const handleDelete = () => {
    deleteUser({variables: {authUserDeleteId: user.id}}).then(() =>
      onCloseAlert()
    )
  }

  const handleTextClear = () => {
    setText('')
    search({variables: {text: ''}})
  }
  return (
    <AppBoxForm>
      <SearchInput
        isLoading={loadingSearch}
        onChange={handleSearch}
        searchText={text}
        onTextClear={handleTextClear}
        placeholder={t('Registration.phone number or mail address')}
      />

      {dataSearch?.users.map(user => (
        <DeleteItem
          key={user.tel}
          {...user}
          onClick={() => handleSelect({id: user._id, fullname: user.fullname})}
        />
      ))}

      {dataSearch?.users.length === 0 && (
        <Text mt={2} px={2}>
          {t('Registration.Nothing found...')}
        </Text>
      )}
      <AppAlertDialog
        isOpen={isOpenAlert}
        onClose={onCloseAlert}
        headerText={t('Registration.User removal')}
        bodyText={`${t('Registration.Delete the user')}: ${user.fullname}?`}
        cancelText={t('Registration.Cancel')}
        confirmText={t('Registration.Delete')}
        onConfirm={handleDelete}
        loadingText={t('Registration.Removal')}
      />
    </AppBoxForm>
  )
}

export default DeleteUser
