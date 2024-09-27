import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useAppSelector} from '../../../../hooks/useAppSelector'
import {buttonSize, headerSize} from '../../../../styles/responsiveStyles'
import BasketItems from './BasketItems'

interface IBasket {
  isOpen: boolean
  onClose: () => void
  openOrder: () => void
}

const Basket: FC<IBasket> = ({isOpen, onClose, openOrder}) => {
  const {total, products} = useAppSelector(
    state => state.localStorageReducers.BasketReducer
  )
  const {t} = useTranslation('mainLayout')

  const submit = () => {
    openOrder()
    onClose()
  }

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
          {t('Basket.Basket').toUpperCase()}
        </ModalHeader>

        <ModalBody>
          <BasketItems />
        </ModalBody>

        {products.length !== 0 && (
          <ModalFooter>
            <VStack>
              <Text alignSelf={'flex-end'} fontSize={'xl'}>
                {t('Basket.Total')}: {total}
              </Text>
              <Button size={buttonSize} onClick={submit}>
                {t('Basket.Checkout')}
              </Button>
            </VStack>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
}

export default Basket
