import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {useGQLogout} from '../../../../graphQL/hooks/auth/logout'
import {useAppSelector} from '../../../../hooks/useAppSelector'
import {headerSize} from '../../../../styles/responsiveStyles'
import {Routes} from '../../../../types/router'

interface IUserModal {
  isOpen: boolean
  onClose: () => void
}

const links = [
  {
    title: {
      ru: 'Личные данные',
      en: 'Personal data',
    },
    path: Routes.PERSONAL_DATA,
    access: ['USER'],
  },
  {
    title: {
      ru: 'Мои заказы',
      en: 'My orders',
    },
    path: Routes.MY_ORDERS,
    access: ['USER'],
  },
  {
    title: {
      ru: 'Администрирование',
      en: 'Administration',
    },
    path: Routes.ADMIN,
    access: ['ADMIN'],
  },
  {
    title: {
      ru: 'Оператор',
      en: 'Operator',
    },
    path: Routes.OPERATOR,
    access: ['OPERATOR', 'ADMIN'],
  },
]

const UserModal: FC<IUserModal> = ({isOpen, onClose}) => {
  const {
    user: {role},
  } = useAppSelector(s => s.AuthReducer)
  const [logout] = useGQLogout()
  const nav = useNavigate()
  const {t, i18n} = useTranslation('mainLayout')

  const exit = () => {
    logout()
    onClose()
    nav(Routes.MAIN)
  }

  const chooseHandler = (path: string) => {
    onClose()
    nav(path)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xs'}>
      <ModalOverlay
        bg="blackAlpha.500"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />

      <ModalContent>
        <ModalCloseButton color={'white'} />
        <ModalHeader
          bg={'telegram.500'}
          color={'white'}
          fontSize={headerSize}
          textTransform={'uppercase'}
        >
          {t('userModal.Personal Area')}
        </ModalHeader>
        <ModalBody p={0}>
          {links.map(({access, path, title}) => (
            <Box key={path}>
              {access.includes(role) && (
                <Button
                  variant={'ghost'}
                  w={'full'}
                  onClick={() => chooseHandler(path)}
                >
                  {title[i18n.language as keyof typeof title]}
                </Button>
              )}
            </Box>
          ))}
        </ModalBody>
        <Button variant={'ghost'} onClick={exit}>
          {t('userModal.Exit')}
        </Button>
      </ModalContent>
    </Modal>
  )
}

export default UserModal
