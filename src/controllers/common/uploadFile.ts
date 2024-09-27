import path from 'path'
import fs from 'fs'
import {finished} from 'stream'

import {IUploadFileController} from '../../types/controllers/common/uploadFile'
import {createFolder, deleteFile, uploadFile} from '../../utils/googleDrive'
import {SaveType} from '../../graphql/generated-types'
import {date} from '../../utils/date'

export const uploadFileController: IUploadFileController = {
  // при передаче одного файла можно передавать в объекте
  uploadFile_add: async ({img, path: filePath}) => {
    try {
      const arr = filePath.split('/')
      const fileName = arr.pop()
      const dir = path.resolve(arr.join('/'))

      if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true})

      const {createReadStream} = await img
      const stream = createReadStream()

      const out = fs.createWriteStream(path.join(dir, fileName))
      stream.pipe(out)
      await finished(out, () => {
        // console.log('проверка')
      })

      return {success: true}
    } catch (error) {
      return {
        success: false,
        errorMessage: error.message,
      }
    }
  },

  // при передачи группы файлов нельзя передавать в объекте, только отдельной переменной
  uploadFiles_add: async (imgs, filesPath) => {
    try {
      const arr = filesPath[0].split('/')
      arr.pop()
      const dir = path.resolve(arr.join('/'))
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true})

      imgs.forEach(async (file, index) => {
        const {createReadStream} = await file
        const stream = createReadStream()

        const out = fs.createWriteStream(
          path.join(path.resolve(filesPath[index]))
        )

        stream.pipe(out)
        await finished(out, () => {
          // console.log('проверка')
        })
      })

      return {success: true}
    } catch (error) {
      return {
        success: false,
        errorMessage: error.message,
      }
    }
  },

  uploadFileToGoogle: async (files, path) => {
    try {
      let folderId = ''
      folderId = await createFolder({
        name: path,
        parent: '1nmvBqRSTP5wW_pfL8sTHPrhwt3sfO6T9',
      })

      if (path === SaveType.Product)
        folderId = await createFolder({
          name: date,
          parent: folderId,
        })

      const fileIds = await Promise.all(
        files.map(async file => await uploadFile({file, folderId}))
      )

      return fileIds
    } catch (error) {
      console.log(error)
    }
  },
}
