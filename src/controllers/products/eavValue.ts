import {
  Products_Eav_Value_Filter,
  Products_Eav_Value_Price,
  Products_Eav_Value_ProductsFinelResult,
} from '../../graphql/generated-types'
import {commonFilters} from '../../mongoDB/aggregation/commonFilters/commonFilters'
import {filterData} from '../../mongoDB/aggregation/commonFilters/filtersNameandVakues'
import {getActiveFilterPipeline} from '../../mongoDB/aggregation/getActiveFilter/getActiveFilter'
import {getPassiveFiltersPipeline} from '../../mongoDB/aggregation/getPassiveFilters/getPassiveFilters'
import {getPriceFilterPipeline} from '../../mongoDB/aggregation/getPriceFilter/getPriceFilter'
import {getProductsPipeline} from '../../mongoDB/aggregation/getProducts/getProducts'
import {productsModels} from '../../mongoDB/model/products'
import {IEavValueController} from '../../types/controllers/products/eav_value'

const {eavValueModel} = productsModels

export const eavValueController: IEavValueController = {
  products_eavValue_products_get: async ({filters, group, price, ...sort}) => {
    const activeFiltersData = filterData(filters)

    const commonFiltersPipeline = commonFilters(group, price)
    const productsPipeline = getProductsPipeline({
      ...activeFiltersData,
      ...sort,
    })

    const resProducts =
      await eavValueModel.aggregate<Products_Eav_Value_ProductsFinelResult>([
        ...commonFiltersPipeline,
        ...productsPipeline,
      ])
    const {products, totalProducts} = resProducts[0]

    return {
      products,
      totalProducts,
    }
  },

  products_eavValue_filters_get: async ({filters, group, price}) => {
    const activeFiltersData = filterData(filters)

    const commonFiltersPipeline = commonFilters(group, price)

    const passiveFilterPipeline = getPassiveFiltersPipeline(activeFiltersData)
    const passiveFilters: Products_Eav_Value_Filter[] =
      await eavValueModel.aggregate([
        ...commonFiltersPipeline,
        ...passiveFilterPipeline,
      ])

    const priceFilterPipeline = getPriceFilterPipeline(activeFiltersData)
    const priceFilter: Products_Eav_Value_Price[] =
      await eavValueModel.aggregate([
        ...commonFiltersPipeline,
        ...priceFilterPipeline,
      ])

    let activeFilters: Products_Eav_Value_Filter[] = []

    if (activeFiltersData.isFilters) {
      activeFilters = await Promise.all(
        activeFiltersData.activeFiltersName.map(async activeFilterName => {
          const filtersName = activeFiltersData.activeFiltersName.filter(
            name => name !== activeFilterName
          )
          const filtersValue = activeFiltersData.aggrFilters.filter(
            value => value.attr_name !== activeFilterName
          )

          const activeFilterPipeline = getActiveFilterPipeline({
            activeFilterName,
            activeFiltersName: filtersName,
            aggrFilters: filtersValue,
            isFilters: filtersValue.length !== 0,
          })
          const activeFilter = await eavValueModel.aggregate([
            ...commonFiltersPipeline,
            ...activeFilterPipeline,
          ])

          return activeFilter[0]
        })
      )
    }

    const filtersResult = [...activeFilters, ...passiveFilters].sort((a, b) =>
      a.attr.name.localeCompare(b.attr.name)
    )

    return {
      filters: filtersResult,
      price: priceFilter[0],
    }
  },

  products_eavValue_value_get: async idProduct => {
    let values = await eavValueModel.find({product_id: idProduct})
    values = values.filter(value => value.attr_description.en !== 'Price')

    return values
  },
}
