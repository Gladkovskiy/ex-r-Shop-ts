import {Box, Container, Flex} from '@chakra-ui/react'
import {FC} from 'react'
import LoginAndBuy from './LoginAndBuy/LoginAndBuy'
import ManuAndLogo from './MenuAndLogo/ManuAndLogo'
import SearchBar from './SearchBar/SearchBar'

const Header: FC = () => {
  return (
    <Box bgColor={'telegram.500'} boxShadow={['md', null, null, 'lg']}>
      <Container maxWidth={1546}>
        <Flex h={'7vh'} align={'center'} justifyContent={'space-between'}>
          <ManuAndLogo />
          <SearchBar />
          <LoginAndBuy />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
