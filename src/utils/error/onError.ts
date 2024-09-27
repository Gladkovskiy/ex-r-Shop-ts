import {GraphQLError} from 'graphql'

interface IErrorSettings {
  code?: string
  status?: number
}

export const onError = (
  errorText: string,
  errorSettings?: IErrorSettings
): void => {
  throw new GraphQLError(errorText, {
    extensions: {
      code: errorSettings?.code,
      http: {
        status: errorSettings?.status || 404,
      },
    },
  })
}
