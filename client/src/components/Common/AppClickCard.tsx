import React, {FC} from 'react'
import {Flex, Image, Text} from '@chakra-ui/react'
import fallback from '../../assets/img/placeholder/imageNotLoad.png'

interface IAppClickCard {
  imgPath: string
  description: string
  onClick: () => void
}

const AppClickCard: FC<IAppClickCard> = ({description, imgPath, onClick}) => {
  return (
    <Flex
      onClick={onClick}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      p={3}
      bgColor={'white'}
      borderWidth={'1px'}
      borderColor={'gray.200'}
      borderRadius={'5px'}
      boxShadow={['md', null, null, 'lg']}
      _hover={{cursor: 'pointer', transform: 'scale(1.2)'}}
      transition={'ease-in'}
      transitionDuration={'200ms'}
    >
      <Image
        src={process.env.REACT_APP_GOOGLE + imgPath + '#.jpeg'}
        boxSize={['100px', '150px', '150px', '200px']}
        objectFit={'cover'}
        fallbackSrc={fallback}
      />
      <Text mt={4}>{description}</Text>
    </Flex>
  )
}

export default AppClickCard
