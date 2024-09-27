import {PipelineStage} from 'mongoose'
import {IFilterData} from '../commonFilters/filtersNameandVakues'

export const getPriceFilterPipeline = ({
  activeFiltersName,
  aggrFilters,
  isFilters,
}: IFilterData) => {
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

  if (isFilters)
    pipeline.push({
      $match: {
        attr: {
          $all: activeFiltersName,
        },
      },
    })

  pipeline.push(
    {
      $unset: 'attr',
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
      $group: {
        _id: '$attr.attr_name',
        min: {
          $min: '$attr.attr_value.value',
        },
        max: {
          $max: '$attr.attr_value.value',
        },
      },
    }
  )

  return pipeline
}
