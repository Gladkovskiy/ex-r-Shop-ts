import {Box} from '@chakra-ui/react'
import {useParams} from 'react-router-dom'
import {useGQGetByIdProduct} from '../../../graphQL/hooks/products/products'
import Buy from './Buy'
import Photo from './Photo'
import Info from './Info'
import Error from '../../Common/Error'
import SEO from '../../Common/SEO'
import {useTranslation} from 'react-i18next'

const AboutProduct = () => {
  const {id} = useParams<'id'>()
  const {data, loading, error} = useGQGetByIdProduct(id!)
  const {i18n} = useTranslation()

  if (loading) return null
  if (error) return <Error />

  return (
    <>
      <SEO
        description={`Товар ${data?.product.product.name.ru}. Product ${data?.product.product.name.en}.`}
        title={
          i18n.language === 'ru'
            ? data?.product.product.name.ru!
            : data?.product.product.name.en!
        }
      />

      <Box display={['block', 'grid']} gridTemplateColumns={'1fr 1fr'} mt={5}>
        {data?.product && (
          <>
            <Photo
              arrImage={data.product.product.img_urls}
              discount={data.product.product.discount.active}
            />

            <Buy
              discount={data.product.product.discount.active}
              name={data.product.product.name}
              oldPrice={data.product.product.discount.oldPrice}
              price={data.product.price}
              quantity={data?.product.product.quantity}
              rating={data?.product.product.rating}
              img_url={data.product.product.img_urls[0]}
            />
          </>
        )}
      </Box>

      <Info
        info={data?.product.product.description!}
        name={data?.product.product.name!}
      />
    </>
  )
}

export default AboutProduct
