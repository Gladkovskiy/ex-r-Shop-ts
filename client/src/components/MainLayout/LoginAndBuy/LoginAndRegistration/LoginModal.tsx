import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import {FC, useState} from 'react'
import {useAuthAction} from '../../../../hooks/useAction'
import {headerSize} from '../../../../styles/responsiveStyles'
import LoginContent from './LoginContent'
import RegContent from './RegContent'

interface ILoginModal {
  isOpen: boolean
  onClose: () => void
}

const LoginModal: FC<ILoginModal> = ({isOpen, onClose}) => {
  const [isReg, setReg] = useState(false)
  const {setError} = useAuthAction()

  const toggle = () => setReg(state => !state)
  const close = () => {
    onClose()
    setReg(false)
    setError('')
  }

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <ModalOverlay
        bg="blackAlpha.500"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalCloseButton color={'white'} />

        <ModalHeader bg={'telegram.500'} color={'white'} fontSize={headerSize}>
          {isReg ? 'РЕГИСТРАЦИЯ' : 'ВХОД'}
        </ModalHeader>

        {isReg ? (
          <RegContent toggle={toggle} onClose={onClose} />
        ) : (
          <LoginContent toggle={toggle} onClose={onClose} />
        )}
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
