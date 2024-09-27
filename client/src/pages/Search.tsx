import React from 'react'
import {useParams} from 'react-router-dom'
import SettingBar from '../components/Search/SettingBar'
import {useGQGetGlobalSearch} from '../graphQL/hooks/products/products'
import {useAppSelector} from '../hooks/useAppSelector'
import ProductsBlock from '../components/Search/ProductsBlock'
import {useSearchAction} from '../hooks/useAction'
import {useScrollPagination} from '../hooks/useScrollPagination'

const Search = () => {
  const {id} = useParams<'id'>()
  const {limit, page, sort, count} = useAppSelector(r => r.SearchReducer)
  const {setPage} = useSearchAction()
  const {loading} = useGQGetGlobalSearch({
    limit,
    page,
    sort,
    searchText: id || '',
  })

  useScrollPagination({loading, limit, page, setPage, totalCount: count})

  return (
    <>
      <SettingBar />
      <ProductsBlock />
    </>
  )
}

export default Search
