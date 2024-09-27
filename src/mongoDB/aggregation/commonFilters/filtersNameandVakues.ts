import {Products_FiltersInput} from '../../../graphql/generated-types'

export interface IFilterData {
  activeFiltersName: string[]
  aggrFilters: {
    attr_name: string
    'attr_value.value': string
  }[]
  isFilters: boolean
}

export const filterData = (filters: Products_FiltersInput[]): IFilterData => {
  const isFilters = filters.length !== 0

  const activeFiltersName = filters.reduce((arr: string[], {attr_name}) => {
    if (!arr.includes(attr_name)) return [...arr, attr_name]

    return arr
  }, [])

  const aggrFilters = filters.map(({attr_name, attr_value}) => ({
    attr_name,
    ['attr_value.value']: attr_value,
  }))

  return {
    activeFiltersName,
    aggrFilters,
    isFilters,
  }
}
