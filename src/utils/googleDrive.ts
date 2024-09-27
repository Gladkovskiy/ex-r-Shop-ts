import {google} from 'googleapis'
import path from 'path'

const KEYFILEPATH = path.join(path.resolve(), 'googleKey.json')
const SCOPE = ['https://www.googleapis.com/auth/drive']

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPE,
})

const drive = google.drive({
  version: 'v3',
  auth,
})

interface IFileData {
  file: any
  folderId: string
}

export const uploadFile = async ({file, folderId}: IFileData) => {
  try {
    const {createReadStream, filename, mimetype} = await file
    const res = await drive.files.create({
      requestBody: {
        name: filename,
        parents: [folderId],
      },
      media: {
        mimeType: mimetype,
        body: createReadStream(),
      },
    })

    return res.data.id
  } catch (error) {
    console.log(error)
  }
}

export const deleteFile = async (fileId: string) => {
  try {
    await drive.files.delete({
      fileId,
    })

    return {
      message: 'delete file',
      status: true,
    }
  } catch (error) {
    return {
      status: false,
      message: 'file not found',
    }
  }
}

interface IFolderData {
  name: string
  parent: string
}

export const createFolder = async ({name, parent}: IFolderData) => {
  try {
    const folder = {
      name,
      parents: [parent],
      mimeType: 'application/vnd.google-apps.folder',
    }

    const find = await findFolder({
      name: folder.name,
      parent: folder.parents[0],
    })

    if (find) return find

    const file = await drive.files.create({
      requestBody: folder,
      fields: 'id',
    })

    return file.data.id
  } catch (error) {
    console.log(error)
  }
}

export const findFolder = async ({
  name,
  parent,
}: IFolderData): Promise<string> => {
  const search = await drive.files.list({
    q: `mimeType = 'application/vnd.google-apps.folder' and name = '${name}' and '${parent}' in parents`,
    fields: 'files(id, name)',
    spaces: 'drive',
  })

  return search.data.files.length === 0 ? '' : search.data.files[0].id
}
