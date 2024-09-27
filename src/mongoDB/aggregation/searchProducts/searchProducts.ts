import {PipelineStage} from 'mongoose'
import {sortProducts} from '../getProducts/getProducts'

interface ISearchProductPipeline {
  searchText: string
  sort: string
  page: number
  limit: number
}

type SearchFunc = (searchFilter: ISearchProductPipeline) => PipelineStage[]

export const searchProductPipeline: SearchFunc = ({
  searchText,
  limit,
  page,
  sort,
}) => {
  const pipeline: PipelineStage[] = []

  pipeline.push(
    {
      $search: {
        index: 'searchProducts',
        phrase: {
          query: searchText,
          path: ['searchTag'],
        },
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
        price: '$attr.attr_value.value',
        group: 1,
        name: 1,
        quantity: 1,
        rating: 1,
        description: 1,
        img_urls: 1,
        discount: 1,
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
