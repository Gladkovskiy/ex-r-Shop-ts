import {useEffect} from 'react'

interface IPagination {
  loading: boolean
  setPage: (page: number) => void
  page: number
  limit: number
  totalCount: number
}

export const useScrollPagination = ({
  loading,
  limit,
  page,
  setPage,
  totalCount,
}: IPagination) => {
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (window.innerHeight + document.documentElement.scrollTop) <
        100 &&
      !loading &&
      limit * (page + 1) < totalCount
    ) {
      setPage(page + 1)
    }
  }
}
