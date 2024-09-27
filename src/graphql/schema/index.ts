import {mergeTypeDefs} from '@graphql-tools/merge'
import {loadFilesSync} from '@graphql-tools/load-files'
import path from 'path'

// читаем файлы схем и объеденяем их
const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'))
export const typeDefs = mergeTypeDefs(typesArray)
