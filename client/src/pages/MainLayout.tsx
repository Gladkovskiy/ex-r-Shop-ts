import {Box, Container} from '@chakra-ui/react'
import React, {FC} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import Header from '../components/MainLayout/Header'
import Advertising from '../components/Main/SliderForAdvertising/Advertising'

const MainLayout: FC = () => {
  const {pathname} = useLocation()

  return (
    <Box>
      <Header />
      <Container maxW={1536}>
        {(pathname === '/' || pathname.match(/category/gi)) && <Advertising />}
        <Outlet />
      </Container>
    </Box>
  )
}

export default MainLayout
