import {HamburgerIcon} from '@chakra-ui/icons'
import {Flex, IconButton, useDisclosure} from '@chakra-ui/react'
import Logo from './Logo'
import Menu from './MenuDrawer/Menu'

const ManuAndLogo = () => {
  const {
    isOpen: isMenuOpen,
    onClose: onMenuClose,
    onOpen: onMenuOpen,
  } = useDisclosure()

  return (
    <>
      <Flex align={'center'}>
        <IconButton
          aria-label="menu"
          icon={<HamburgerIcon />}
          fontWeight={'bold'}
          fontSize={[20, 25, 30]}
          onClick={onMenuOpen}
        />
        <Logo />
      </Flex>

      <Menu isOpen={isMenuOpen} onClose={onMenuClose} />
    </>
  )
}

export default ManuAndLogo
