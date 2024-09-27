import {gql} from './__generated__'

export const UPLOAD_FILE = gql(`
mutation UploadFile_add($file: UploadFile_add!) {
  uploadFile_add(file: $file) {
    errorMessage
    success
  }
}
`)

export const UPLOAD_FILES = gql(`
mutation UploadFiles_add($files: [Upload!]!, $path: [String!]!) {
  uploadFiles_add(files: $files, path: $path) {
    errorMessage
    success
  }
}
`)

export const UPLOAD_TO_GOOGLE = gql(`
mutation UploadFilesToGoogle($files: [Upload!]!, $path: SaveType!) {
  uploadFilesToGoogle(files: $files, path: $path)
}
  `)
