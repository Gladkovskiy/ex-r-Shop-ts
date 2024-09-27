import {PipelineStage} from 'mongoose'

type SearchFunc = (searchText: string) => PipelineStage[]

export const searchGroupforFilterPipeline: SearchFunc = searchText => {
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
      $group: {
        _id: '$group',
      },
    },
    {
      $project: {
        group: '$_id',
        _id: 0,
      },
    },
    {
      $sort: {
        group: 1,
      },
    }
  )

  return pipeline
}
