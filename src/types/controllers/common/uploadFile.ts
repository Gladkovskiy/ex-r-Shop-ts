import {Upload} from 'graphql-upload-ts'
import {
  SaveType,
  UploadFile_Add,
  UploadFile_Success,
  UploadFiles_Add,
} from '../../../graphql/generated-types'

export interface IUploadFileController {
  uploadFile_add?: (file: UploadFile_Add) => Promise<UploadFile_Success>

  uploadFiles_add?: (
    files: any[],
    path: string[]
  ) => Promise<UploadFile_Success>

  uploadFileToGoogle?: (files: any[], path: SaveType) => Promise<string[]>
}
