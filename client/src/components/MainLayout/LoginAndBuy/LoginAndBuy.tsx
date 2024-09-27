import {Divider, Flex, Hide} from '@chakra-ui/react'
import {FC} from 'react'
import BasketButton from './Basket/BasketButton'
import LangChoose from './LangChoose'
import Login from './LoginAndRegistration/Login'

const LoginAndBuy: FC = () => {
  return (
    <>
      <Flex align={'center'}>
        <Hide below="md">
          <LangChoose />
          <Divider orientation="vertical" h={8} m={'4'} />
        </Hide>
        <BasketButton />
        <Login />
      </Flex>
    </>
  )
}

export default LoginAndBuy
