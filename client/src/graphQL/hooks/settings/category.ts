import {useMutation, useQuery} from '@apollo/client'
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORIES,
} from '../../setting.graphql'

export const useGQGetCategories = () => {
  const query = useQuery(GET_CATEGORIES)

  return query
}

export const useGQAddCategory = () => {
  const mutation = useMutation(ADD_CATEGORY, {
    onError: ({message}) => console.error(message),

    update: (cache, {data}) => {
      const oldData = cache.readQuery({query: GET_CATEGORIES})

      if (oldData?.categories && data?.category)
        cache.writeQuery({
          query: GET_CATEGORIES,
          data: {
            categories: [...oldData.categories, data.category],
          },
        })
    },
  })

  return mutation
}

interface IDeleteCategory {
  categoryId: string
  onSuccess: () => void
}

export const useGQDeleteCategory = ({
  categoryId,
  onSuccess,
}: IDeleteCategory) => {
  const mutation = useMutation(DELETE_CATEGORY, {
    variables: {
      settingsCategoryDeleteId: categoryId,
    },

    onCompleted: () => onSuccess(),
    onError: ({message}) => console.log(message),

    update: (cache, {data}) => {
      const oldData = cache.readQuery({query: GET_CATEGORIES})

      if (oldData?.categories && data?.res) {
        const newData = oldData.categories.filter(
          ({_id}) => _id !== data.res.id
        )

        cache.writeQuery({
          query: GET_CATEGORIES,
          data: {
            categories: newData,
          },
        })
      }
    },
  })

  return mutation
}
