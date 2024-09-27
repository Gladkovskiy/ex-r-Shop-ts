/* eslint-disable react-hooks/exhaustive-deps */
import {debounce} from 'lodash'
import {ChangeEvent, FC, useCallback, useMemo, useState} from 'react'
import {
  useGQDeleteProduct,
  useGQGetByNameProducts,
} from '../../../../graphQL/hooks/products/products'
import AppBoxForm from '../../../Common/AppBoxForm'
import AppSkeleton from '../../../Common/AppSkeleton'
import SearchInput from '../../../Common/SearchInput'
import DeleteItems from './DeleteItems'
import AppAlertDialog from '../../../Common/AppAlertDialog'
import {useDisclosure} from '@chakra-ui/react'
import {Products_Eav_Entity} from '../../../../graphQL/__generated__/graphql'
import UpdateProduct from './UpdateProduct'
import {useTranslation} from 'react-i18next'
import {TKeyLang} from '../../../../types/common'

const DeleteProduct: FC = () => {
  const {t, i18n} = useTranslation('administration')
  const [text, setText] = useState('')
  const {isOpen, onClose, onOpen} = useDisclosure()
  const [delProduct, setDelProduct] = useState<Products_Eav_Entity | null>(null)
  const [changeProduct, setChangeProduct] = useState<string | null>(null)

  const [search, {data, loading}] = useGQGetByNameProducts()
  const [dProduct] = useGQDeleteProduct({id: delProduct?._id, searchText: text})

  const debounceHandler = useMemo(
    () =>
      debounce((value: string) => {
        search({variables: {name: value}})
      }, 500),
    []
  )

  const searchHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value)
      debounceHandler(e.target.value)
    },
    [debounceHandler]
  )

  const clearHandler = useCallback(() => {
    setText('')
    search({variables: {name: ''}})
  }, [])

  const chooseDelProduct = useCallback((product: Products_Eav_Entity) => {
    onOpen()
    setDelProduct(product)
  }, [])

  const chooseChangeProduct = useCallback((productId: string) => {
    setChangeProduct(productId)
  }, [])

  const deleteProduct = useCallback(() => {
    dProduct().then(() => {
      setDelProduct(null)
      onClose()
    })
  }, [])

  return (
    <AppBoxForm w={['100%', null, null, '60%']}>
      {!changeProduct ? (
        <>
          <SearchInput
            isLoading={loading}
            searchText={text}
            onChange={searchHandler}
            onTextClear={clearHandler}
            placeholder={t('Product.product name')}
          />

          {!loading ? (
            <DeleteItems
              products={data?.products || []}
              text={text}
              onDelete={chooseDelProduct}
              onChange={chooseChangeProduct}
            />
          ) : (
            <AppSkeleton repeat={3} />
          )}

          <AppAlertDialog
            cancelText={t('Product.Cancel')}
            confirmText={t('Product.Delete')}
            headerText={t('Product.Removing goods')}
            bodyText={`${t(
              'Product.You definitely want to delete the goods'
            )} - "${delProduct?.name[i18n.language as TKeyLang]}"?`}
            onClose={onClose}
            isOpen={isOpen}
            onConfirm={deleteProduct}
          />
        </>
      ) : (
        <UpdateProduct
          setChangeProduct={setChangeProduct}
          productId={changeProduct}
        />
      )}
    </AppBoxForm>
  )
}

export default DeleteProduct
