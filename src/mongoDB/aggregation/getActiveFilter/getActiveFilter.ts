import {PipelineStage} from 'mongoose'
import {IFilterData} from '../commonFilters/filtersNameandVakues'

interface IActiveFilterData extends IFilterData {
  activeFilterName: string
}

export const getActiveFilterPipeline = ({
  activeFiltersName,
  aggrFilters,
  isFilters,
  activeFilterName,
}: IActiveFilterData): PipelineStage[] => {
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
      $replaceRoot: {
        newRoot: '$attr',
      },
    },
    {
      $match: {
        attr_name: activeFilterName,
      },
    },
    {
      $group: {
        _id: {
          attr_name: '$attr_name',
          attr_description: '$attr_description',
          attr_value: '$attr_value',
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $group: {
        _id: {
          name: '$_id.attr_name',
          description: '$_id.attr_description',
        },
        values: {
          $push: {
            attr_value: '$_id.attr_value',
            count: '$count',
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        attr: '$_id',
        values: '$values',
      },
    }
  )

  return pipeline
}
