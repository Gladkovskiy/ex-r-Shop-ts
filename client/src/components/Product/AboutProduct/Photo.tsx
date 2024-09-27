import {Box, Image, Text} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Carousel} from 'react-responsive-carousel'

interface IPhoto {
  arrImage: string[]
  discount: boolean
}

const Photo: FC<IPhoto> = ({arrImage, discount}) => {
  const {t} = useTranslation('product')

  return (
    <Box
      w={['90%', null, null, '70%']}
      mx={'auto'}
      pos={'relative'}
      userSelect={'none'}
    >
      {discount && (
        <Text
          bgColor={'red.400'}
          position={'absolute'}
          top={'5%'}
          left={'2%'}
          color={'white'}
          p={2}
          borderRadius={'50%'}
          zIndex={5}
        >
          {t('Photo.Stock')}
        </Text>
      )}

      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        swipeable
        infiniteLoop
        dynamicHeight
        emulateTouch
      >
        {arrImage.map((image, i) => (
          <Box key={i} bgColor={'white'}>
            <Image
              p={5}
              pb={10}
              src={process.env.REACT_APP_GOOGLE + image + '#.jpeg'}
              alt={image}
              boxSize={['300px', '500px']}
              objectFit={'contain'}
              fallbackSrc="https://via.placeholder.com/150"
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Photo
