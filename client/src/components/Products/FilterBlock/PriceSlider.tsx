/* eslint-disable jsx-a11y/aria-proptypes */
import {
  Box,
  Button,
  Flex,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react'
import {FC, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useFiltersAction} from '../../../hooks/useAction'

interface IPriceSlider {
  price: {
    min: number
    max: number
  }
  defaultPrice: {
    min: number
    max: number
  }
}

const PriceSlider: FC<IPriceSlider> = ({price, defaultPrice}) => {
  const [value, setValue] = useState([price.min, price.max])
  const {setPrice, resetPriceFilter} = useFiltersAction()
  const {t} = useTranslation('products')

  return (
    <Box borderWidth={'1px'} boxShadow={['md']} borderRadius={5} p={2}>
      <Text fontWeight={'semibold'}>{t('FilterBlock.Price')}:</Text>
      <Flex alignItems={'center'} mt={2}>
        <Text
          bgColor={'telegram.300'}
          mr={3}
          px={1}
          color={'white'}
          borderRadius={5}
        >
          {value[0]}
        </Text>
        <RangeSlider
          aria-label={['minPrice', 'maxPrice']}
          value={value}
          onChange={val => setValue(val)}
          min={price.min}
          max={price.max}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb bgColor={'telegram.200'} index={0} />
          <RangeSliderThumb index={1} bgColor={'telegram.200'} />
        </RangeSlider>

        <Text
          bgColor={'telegram.300'}
          ml={3}
          px={1}
          color={'white'}
          borderRadius={5}
        >
          {value[1]}
        </Text>
      </Flex>
      <HStack justifyContent={'flex-end'}>
        <Button
          size={'sm'}
          mt={2}
          onClick={() => {
            resetPriceFilter()
            setValue([defaultPrice.min, defaultPrice.max])
          }}
        >
          {t('FilterBlock.Cancel')}
        </Button>
        <Button
          size={'sm'}
          mt={2}
          onClick={() =>
            setPrice({
              min: value[0],
              max: value[1],
            })
          }
        >
          OK
        </Button>
      </HStack>
    </Box>
  )
}

export default PriceSlider
