/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import {FC, useEffect, useRef, useState} from 'react'
import {MdFilterAltOff} from 'react-icons/md'
import {Navigate} from 'react-router-dom'
import {useGQGetFilters} from '../../../graphQL/hooks/products/products'
import {useFiltersAction} from '../../../hooks/useAction'
import {useAppSelector} from '../../../hooks/useAppSelector'
import {Routes} from '../../../types/router'
import AppSkeleton from '../../Common/AppSkeleton'
import PriceSlider from './PriceSlider'
import FilterBlock from './FilterBlock'
import {useTranslation} from 'react-i18next'
import CurrentFilters from './CurrentFilters'

interface IFilterDrawer {
  isOpen: boolean
  onClose: () => void
  id: string
}

const FilterDrawer: FC<IFilterDrawer> = ({id, ...props}) => {
  const {resetAllFilters} = useFiltersAction()
  const {price, filters} = useAppSelector(r => r.FiltersReducer)
  const [defaultPrice, setDefaultPrice] = useState({min: 0, max: 0})
  const firstTime = useRef<boolean>(false)
  const {data, loading, error, previousData} = useGQGetFilters({
    filters,
    group: id || '',
    price,
  })
  const {t} = useTranslation('products')

  useEffect(() => {
    if (!loading && !error && !firstTime.current) {
      setDefaultPrice({
        min: data?.filtersGet.price?.min!,
        max: data?.filtersGet.price?.max!,
      })
      firstTime.current = true
    }
  }, [loading, error])

  if (error) return <Navigate to={Routes.ERROR} />

  return (
    <Drawer {...props} placement="left">
      <DrawerOverlay
        bg="blackAlpha.500"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <DrawerContent>
        <DrawerCloseButton color={'white'} />
        <DrawerHeader bgColor={'telegram.400'} color={'white'}>
          {t('FilterBlock.Select the filter')}
        </DrawerHeader>
        <DrawerBody>
          {loading ? (
            <AppSkeleton />
          ) : (
            <PriceSlider
              price={data?.filtersGet.price!}
              defaultPrice={defaultPrice}
            />
          )}

          {!loading && (
            <CurrentFilters allFilters={data?.filtersGet.filters!} />
          )}

          {filters.length !== 0 && (
            <Button
              leftIcon={<MdFilterAltOff />}
              colorScheme={'red'}
              size={['sm']}
              onClick={() => resetAllFilters()}
              mt={2}
            >
              {t('FilterBlock.Subtract filters')}
            </Button>
          )}

          {(!loading || previousData) && (
            <FilterBlock
              filters={
                data?.filtersGet.filters! || previousData?.filtersGet.filters!
              }
            />
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default FilterDrawer
