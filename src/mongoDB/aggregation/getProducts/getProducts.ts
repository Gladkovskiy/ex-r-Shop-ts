import {Expression, PipelineStage} from 'mongoose'
import {IFilterData} from '../commonFilters/filtersNameandVakues'

interface IFilterSortData extends IFilterData {
  sort: string
  page: number
  limit: number
}

export const sortProducts = (
  a: string
): Record<string, 1 | -1 | Expression.Meta> => {
  switch (a) {
    case 'upPrice':
      return {price: 1, _id: 1}
    case 'downPrice':
      return {price: -1, _id: 1}
    case 'rating':
      return {rating: -1, _id: 1}
    case 'discount':
      return {['discount.active']: -1, _id: 1}
    default:
      return {rating: -1, _id: 1}
  }
}

export const getProductsPipeline = ({
  activeFiltersName,
  aggrFilters,
  isFilters,
  sort,
  page,
  limit,
}: IFilterSortData): PipelineStage[] => {
  const pipeline: PipelineStage[] = []

  if (isFilters)
    pipeline.push({
      $match: {
        $or: aggrFilters,
      },
    })

  pipeline.push({
    $group: {
      _id: '$product_id',
      attr: {
        $push: '$attr_name',
      },
    },
  })

  if (isFilters) {
    pipeline.push({
      $match: {
        attr: {
          $all: activeFiltersName,
        },
      },
    })
  }

  pipeline.push(
    {
      $lookup: {
        from: 'eav_entities',
        localField: '_id',
        foreignField: '_id',
        as: 'product',
      },
    },
    {
      $unwind: {
        path: '$product',
      },
    },
    {
      $replaceRoot: {
        newRoot: '$product',
      },
    },
    {
      $lookup: {
        from: 'eav_values',
        localField: '_id',
        foreignField: 'product_id',
        as: 'attr',
      },
    },
    {
      $unwind: {
        path: '$attr',
      },
    },
    {
      $match: {
        'attr.attr_name': 'Цена',
      },
    },
    {
      $project: {
        group: '$group',
        name: '$name',
        description: '$description',
        img_urls: '$img_urls',
        quantity: '$quantity',
        price: '$attr.attr_value.value',
        rating: '$rating',
        discount: '$discount',
      },
    },
    {
      $facet: {
        yes: [
          {
            $match: {
              quantity: {
                $gte: 1,
              },
            },
          },
          {
            $sort: sortProducts(sort),
          },
        ],
        no: [
          {
            $match: {
              quantity: {
                $lte: 0,
              },
            },
          },
        ],
      },
    },
    {
      $project: {
        a: {
          $concatArrays: ['$yes', '$no'],
        },
      },
    },
    {
      $unwind: {
        path: '$a',
      },
    },
    {
      $replaceRoot: {
        newRoot: '$a',
      },
    },
    {
      $facet: {
        products: [
          {
            $skip: page * limit,
          },
          {
            $limit: limit,
          },
        ],
        totalProducts: [
          {
            $count: 'count',
          },
        ],
      },
    },
    {
      $unwind: {
        path: '$totalProducts',
      },
    },
    {
      $project: {
        products: 1,
        totalProducts: '$totalProducts.count',
      },
    }
  )

  return pipeline
}
