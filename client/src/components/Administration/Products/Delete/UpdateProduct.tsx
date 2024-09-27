import {ArrowBackIcon} from '@chakra-ui/icons'
import {IconButton} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useGQGetByIdProduct} from '../../../../graphQL/hooks/products/products'
import {withErrorAndLoading} from '../../../../hoc/withErrorAndLoading'
import UpdateItem, {IUpdateItem} from './UpdateItem'

const NewUpdateComponent = withErrorAndLoading<IUpdateItem>(UpdateItem)

interface IUpdateProduct {
  setChangeProduct: React.Dispatch<React.SetStateAction<string | null>>
  productId: string
}

const UpdateProduct: FC<IUpdateProduct> = ({setChangeProduct, productId}) => {
  const {data, loading, error} = useGQGetByIdProduct(productId)

  const closeUpdate = () => setChangeProduct(null)

  return (
    <>
      <IconButton
        aria-label="back"
        icon={<ArrowBackIcon />}
        variant={'ghost'}
        onClick={closeUpdate}
      />

      <NewUpdateComponent
        error={error}
        loading={loading}
        data={data?.product}
        close={closeUpdate}
      />
    </>
  )
}

export default UpdateProduct
