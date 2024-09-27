import {PipelineStage} from 'mongoose'
import {Products_PriceInput} from '../../../graphql/generated-types'

export const commonFilters = (
  group: string,
  price: Products_PriceInput
): PipelineStage[] => {
  const pipeline: PipelineStage[] = [
    {
      $match: {
        group,
      },
    },
  ]

  if (price)
    pipeline.push(
      {
        $match: {
          attr_name: 'Цена',
          /* 'attr_value.value': {
            $gte: price.min,
            $lte: price.max,
          }, */
        },
      },
      {
        $addFields: {
          price: {
            $toInt: '$attr_value.value',
          },
        },
      },
      {
        $match: {
          price: {
            $gte: price.min,
            $lte: price.max,
          },
        },
      },
      {
        $lookup: {
          from: 'eav_values',
          localField: 'product_id',
          foreignField: 'product_id',
          as: 'result',
        },
      },
      {
        $unwind: {
          path: '$result',
        },
      },
      {
        $replaceRoot: {
          newRoot: '$result',
        },
      }
    )

  return pipeline
}
