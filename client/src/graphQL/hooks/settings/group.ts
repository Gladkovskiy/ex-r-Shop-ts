import {useLazyQuery, useMutation, useQuery} from '@apollo/client'
import {ADD_GROUP, DELETE_GROUP, GET_GROUPS} from '../../setting.graphql'

export const useGQAddGroup = (category: string) => {
  const mutation = useMutation(ADD_GROUP, {
    onError: ({message}) => console.error(message),

    update: (cache, {data}) => {
      const oldData = cache.readQuery({
        query: GET_GROUPS,
        variables: {category},
      })

      if (oldData?.groups && data?.group) {
        const newData = [...oldData.groups, data.group]
        cache.writeQuery({
          query: GET_GROUPS,
          variables: {
            category,
          },
          data: {
            groups: newData,
          },
        })
      }
    },
  })

  return mutation
}

export const useGQGetGroups = () => {
  const query = useLazyQuery(GET_GROUPS)

  return query
}

export const useGQAutoGetGroups = (category: string) => {
  const query = useQuery(GET_GROUPS, {variables: {category}})

  return query
}

interface IDeleteGroup {
  id: string
  category: string
  onSuccess: () => void
}

export const useGQDeleteGroup = ({id, category, onSuccess}: IDeleteGroup) => {
  const mutation = useMutation(DELETE_GROUP, {
    variables: {
      settingsGroupDeleteId: id,
    },

    onCompleted: () => onSuccess(),
    onError: ({message}) => console.log(message),

    update: (cache, {data}) => {
      const oldData = cache.readQuery({
        query: GET_GROUPS,
        variables: {category},
      })

      if (oldData?.groups && data?.res) {
        const newData = oldData.groups.filter(({_id}) => _id !== data.res.id)
        cache.writeQuery({
          query: GET_GROUPS,
          variables: {category},
          data: {groups: newData},
        })
      }
    },
  })

  return mutation
}
