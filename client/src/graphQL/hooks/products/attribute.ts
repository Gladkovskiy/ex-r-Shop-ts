import {useQuery, useMutation} from '@apollo/client'
import {
  ADD_ATTRIBUTE,
  DELET_ATTRIBUTE,
  GET_ATTRIBUTES,
  UPDATE_ATTRIBUTE,
} from '../../products.graphql'
import {Products_Eav_Attribute_ValuesInput} from '../../__generated__/graphql'

interface IAddAttr {
  onSuccess: () => void
}

export const useGQAddAttribute = ({onSuccess}: IAddAttr) => {
  const mutation = useMutation(ADD_ATTRIBUTE, {
    onError: error => {
      console.log(error.message)
    },
    onCompleted: () => {
      onSuccess()
    },
    update: (cache, {data}) => {
      const oldData = cache.readQuery({
        query: GET_ATTRIBUTES,
        variables: {
          group: data?.attribute.group!,
        },
      })

      if (oldData?.attrs && data?.attribute)
        cache.writeQuery({
          query: GET_ATTRIBUTES,
          variables: {
            group: data.attribute.group,
          },
          data: {
            attrs: [...oldData.attrs, data.attribute],
          },
        })
    },
  })

  return mutation
}

export const useGQGetAttributes = (group: string) => {
  const query = useQuery(GET_ATTRIBUTES, {
    variables: {
      group,
    },
  })

  return query
}

interface IDelAttr {
  id: string
  group: string
}
export const useGQDeleteAttribute = ({id, group}: IDelAttr) => {
  const mutation = useMutation(DELET_ATTRIBUTE, {
    variables: {
      productsEavAttributeDeleteId: id,
    },
    update: (cache, {data}) => {
      const oldData = cache.readQuery({
        query: GET_ATTRIBUTES,
        variables: {
          group,
        },
      })

      if (oldData?.attrs && data?.delete) {
        const newData = oldData.attrs.filter(({_id}) => _id !== data.delete?.id)
        cache.writeQuery({
          query: GET_ATTRIBUTES,
          variables: {
            group,
          },
          data: {
            attrs: newData,
          },
        })
      }
    },
  })

  return mutation
}

interface IUpAttr {
  id: string
  values: Products_Eav_Attribute_ValuesInput[] | null
  onSuccess: () => void
  group: string
}
export const useGQUpdateAttribute = ({
  id,
  values,
  onSuccess,
  group,
}: IUpAttr) => {
  const mutation = useMutation(UPDATE_ATTRIBUTE, {
    variables: {
      productsEavAttributeUpdateId: id,
      values,
    },
    onCompleted: () => onSuccess(),
    onError: ({message}) => console.error(message),
    update: (cache, {data}) => {
      const oldData = cache.readQuery({
        query: GET_ATTRIBUTES,
        variables: {
          group,
        },
      })

      if (oldData?.attrs && data?.attr) {
        const newData = oldData.attrs.map(attr => {
          if (attr._id === data.attr._id) {
            return {...attr, values: data.attr.values}
          }

          return attr
        })

        console.log(newData)

        cache.writeQuery({
          query: GET_ATTRIBUTES,
          variables: {
            group,
          },
          data: {
            attrs: newData,
          },
        })
      }
    },
  })

  return mutation
}
