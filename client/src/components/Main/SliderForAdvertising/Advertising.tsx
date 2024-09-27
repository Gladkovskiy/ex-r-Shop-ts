import React, {FC} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'
import {Box} from '@chakra-ui/react'

import img1 from '../../../assets/temp/descount1.jpg'
import img2 from '../../../assets/temp/descount2.jpg'
import img3 from '../../../assets/temp/descount3.jpg'
import img4 from '../../../assets/temp/descount4.jpg'
import img5 from '../../../assets/temp/descount5.jpg'
import img6 from '../../../assets/temp/descount6.jpg'
import {useNavigate} from 'react-router-dom'
import {RoutesForNav} from '../../../types/router'

const images = [img1, img2, img3, img4, img5, img6]

const Advertising: FC = () => {
  const navigate = useNavigate()

  return (
    <Box w={['100%', null, null, '70%']} mx={'auto'} my={5}>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={5000}
        dynamicHeight
      >
        {images.map((image, i) => (
          <div
            key={image}
            style={{cursor: 'pointer'}}
            onClick={() => {
              navigate(RoutesForNav.DISCOUNT + i)
            }}
          >
            <img src={image} alt={image} />
          </div>
        ))}
      </Carousel>
    </Box>
  )
}

export default Advertising
