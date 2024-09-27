import {Resolvers} from '../../generated-types'

const uploadFileResolver: Resolvers = {
  Mutation: {
    uploadFile_add: (_, {file}, {controllers: {uploadFileController}}) =>
      uploadFileController.uploadFile_add(file),

    uploadFiles_add: (
      _,
      {files, path},
      {controllers: {uploadFileController}}
    ) => uploadFileController.uploadFiles_add(files, path),

    uploadFilesToGoogle: (
      _,
      {files, path},
      {controllers: {uploadFileController}}
    ) => uploadFileController.uploadFileToGoogle(files, path),
  },
}

export default uploadFileResolver
