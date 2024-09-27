import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {headerSize} from '../../../../../styles/responsiveStyles'
import OrderForm from './OrderForm'

interface IOrder {
  isOpen: boolean
  onClose: () => void
  openBasket: () => void
}

const Order: FC<IOrder> = ({isOpen, onClose, openBasket}) => {
  const backToBasket = () => {
    onClose()
    openBasket()
  }
  const {t} = useTranslation('mainLayout')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={['md', 'xl', '2xl', '3xl', '4xl']}
    >
      <ModalOverlay
        bg="blackAlpha.500"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalCloseButton color={'white'} />
        <ModalHeader bg={'telegram.500'} color={'white'} fontSize={headerSize}>
          {t('Order.Ordering of the order').toUpperCase()}
        </ModalHeader>

        <ModalBody>
          <OrderForm backToBasket={backToBasket} closeModal={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default Order
