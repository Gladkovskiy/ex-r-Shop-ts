import {ApolloError} from '@apollo/client'
import React from 'react'
import AppSkeleton from '../components/Common/AppSkeleton'
import {Text} from '@chakra-ui/react'

interface IWithErrorAndLoading {
  loading: boolean
  error: ApolloError | undefined
}

export function withErrorAndLoading<T>(
  WrappedComponent: React.ComponentType<T>
) {
  const NewComponent = (props: IWithErrorAndLoading & T) => {
    if (props.loading) return <AppSkeleton repeat={3} />
    if (!!props.error) return <Text>Что-то пошло не так...</Text>

    return <WrappedComponent {...props} />
  }

  return NewComponent
}
