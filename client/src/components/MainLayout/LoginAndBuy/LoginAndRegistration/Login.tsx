import React, {FC} from 'react'
import {IconButton, Tooltip, useDisclosure} from '@chakra-ui/react'
import {AiOutlineUser} from 'react-icons/ai'
import {ImEnter} from 'react-icons/im'
import LoginModal from './LoginModal'
import {useAppSelector} from '../../../../hooks/useAppSelector'
import UserModal from './UserModal'

const Login: FC = () => {
  const {
    isOpen: isOpenLogin,
    onClose: onCloseLogin,
    onOpen: onOpenLogin,
  } = useDisclosure()
  const {
    isOpen: isOpenUser,
    onClose: onCloseUser,
    onOpen: onOpenUser,
  } = useDisclosure()
  const {
    isAuth,
    user: {login},
  } = useAppSelector(s => s.AuthReducer)

  return (
    <>
      {!isAuth ? (
        <Tooltip label="Авторизация">
          <IconButton
            aria-label="Auth"
            icon={<ImEnter />}
            fontSize={[25, 30]}
            ml={[0, 2]}
            onClick={onOpenLogin}
            size={'md'}
          />
        </Tooltip>
      ) : (
        <Tooltip label={login}>
          <IconButton
            aria-label="user"
            icon={<AiOutlineUser />}
            fontSize={[25, 30]}
            ml={[0, 2]}
            onClick={onOpenUser}
            size={'md'}
          />
        </Tooltip>
      )}

      <LoginModal isOpen={isOpenLogin} onClose={onCloseLogin} />
      <UserModal isOpen={isOpenUser} onClose={onCloseUser} />
    </>
  )
}

export default Login
