import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React, {FC} from 'react'
import {headerSize} from '../../styles/responsiveStyles'

interface IConfirmModal {
  isOpen: boolean
  onClose: () => void
  callback: () => void
  confirm: boolean
}

const ConfirmModal: FC<IConfirmModal> = ({
  callback,
  isOpen,
  onClose,
  confirm,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={['sm']}>
      <ModalOverlay
        bg="blackAlpha.500"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalCloseButton color={'white'} />
        <ModalHeader bg={'telegram.500'} color={'white'} fontSize={headerSize}>
          СОСТОЯНИЕ ЗАКАЗА
        </ModalHeader>

        <ModalBody>
          {confirm ? 'Подтвердить' : 'Отменить'} заказ, Вы уверены?
        </ModalBody>

        <ModalFooter>
          <Button
            variant={'outline'}
            onClick={() => {
              onClose()
            }}
          >
            ОТМЕНА
          </Button>
          <Button ml={2} onClick={callback}>
            ОК
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ConfirmModal
