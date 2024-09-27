import {ApolloClient, InMemoryCache} from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_SERVER + 'graphql',
  credentials: 'include',
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink,
})
