import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
} from '@chakra-ui/react'
import {FC} from 'react'
import BasketButton from '../../LoginAndBuy/Basket/BasketButton'
import LangChoose from '../../LoginAndBuy/LangChoose'
import Login from '../../LoginAndBuy/LoginAndRegistration/Login'
import Logo from '../Logo'
import Social from './Social'
import MenuItems from './MenuItems'
import DownloadApp from './DownloadApp'

interface IMenu {
  isOpen: boolean
  onClose: () => void
}

const Menu: FC<IMenu> = ({isOpen, onClose}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay
        bg="blackAlpha.500"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <DrawerContent>
        <DrawerCloseButton color={'white'} />
        <DrawerHeader bg={'telegram.500'}>
          <Logo onClick={onClose} />
          <HStack justifyContent={'space-between'}>
            <HStack>
              <Login />
              <BasketButton />
            </HStack>
            <LangChoose />
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <MenuItems onCloseMenu={onClose} />
        </DrawerBody>
        <DrawerFooter alignItems={'flex-start'} flexDir={'column'}>
          <DownloadApp />
          <Social />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Menu
