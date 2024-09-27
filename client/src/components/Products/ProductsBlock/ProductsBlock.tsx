import {Box, Grid} from '@chakra-ui/react'
import {FC, useEffect, useState} from 'react'
import {useGQGetProducts} from '../../../graphQL/hooks/products/products'
import {useFiltersAction} from '../../../hooks/useAction'
import {useAppSelector} from '../../../hooks/useAppSelector'
import {useScrollPagination} from '../../../hooks/useScrollPagination'
import Error from '../../Common/Error'
import ProductItem from './ProductItem'
import SEO from '../../Common/SEO'
import {useTranslation} from 'react-i18next'

interface IProductsBlock {
  params: string
}

const ProductsBlock: FC<IProductsBlock> = ({params}) => {
  const [id, en, ru] = params.split('-')
  const {sort, price, filters, products, totalCount, page} = useAppSelector(
    r => r.FiltersReducer
  )

  const {i18n} = useTranslation()

  const {setPage} = useFiltersAction()
  const [limit] = useState(15)
  const {resetProducts} = useFiltersAction()
  const {loading, error} = useGQGetProducts({
    group: id || '',
    filters,
    limit,
    page,
    sort,
    price,
  })

  useScrollPagination({loading, limit, page, setPage, totalCount})

  useEffect(() => {
    return () => {
      resetProducts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) return <Error />

  return (
    <>
      <SEO
        description={`Категрия ${ru}. Category ${en}.`}
        title={i18n.language === 'ru' ? ru : en}
      />

      <Box mt={1}>
        <Grid
          gridTemplateColumns={[
            'repeat(2, 1fr)',
            null,
            'repeat(3, 1fr)',
            'repeat(5, 1fr)',
          ]}
          gridGap={2}
        >
          {products.map(({img_urls, ...product}) => (
            <ProductItem key={product._id} img_url={img_urls} {...product} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default ProductsBlock
