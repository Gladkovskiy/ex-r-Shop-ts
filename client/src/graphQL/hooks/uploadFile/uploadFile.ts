import {useMutation} from '@apollo/client'
import {
  UPLOAD_FILE,
  UPLOAD_FILES,
  UPLOAD_TO_GOOGLE,
} from '../../uploadFile.graphql'

export const useGQUploadFile = () => {
  const mutation = useMutation(UPLOAD_FILE, {
    context: {
      headers: {
        'apollo-require-preflight': true,
      },
    },

    onCompleted: data => console.log(data.uploadFile_add.success),
    onError: error => console.log(error.message),
  })

  return mutation
}

export const useGQUploadFiles = () => {
  const mutation = useMutation(UPLOAD_FILES, {
    context: {
      headers: {
        'apollo-require-preflight': true,
      },
    },

    onCompleted: data => console.log(data.uploadFiles_add.success),
    onError: error => console.log(error.message),
  })

  return mutation
}

export const useGQUploadFilesToGoogle = () => {
  const mutation = useMutation(UPLOAD_TO_GOOGLE, {
    context: {
      headers: {
        'apollo-require-preflight': true,
      },
    },
  })

  return mutation
}
