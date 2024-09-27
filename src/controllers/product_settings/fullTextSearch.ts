import {Settings_FullTextSearch_GroupesResult} from '../../graphql/generated-types'
import {productSettingsModels} from '../../mongoDB/model/product_settings'
import {IFullTextSearchController} from '../../types/controllers/product_settings/fullTextSearch'
import {onError} from '../../utils/error/onError'

const {fullTextSearchModel} = productSettingsModels
const {groupModel} = productSettingsModels
export const fullTextSearchController: IFullTextSearchController = {
  settings_fullTextSearch_add: async text => {
    const find = await fullTextSearchModel.findOne({text})
    if (find) onError('Такая фраза уже есть в справочнике')

    const res = await fullTextSearchModel.create({text})
    return {id: res._id}
  },

  settings_fullTextSearch_delete: async text => {
    const res = await fullTextSearchModel.deleteOne({text})
    if (res.deletedCount === 0) onError('Такого текста нет для удаления')

    return {complete: true}
  },

  settings_fullTextSearch_get: async searchText => {
    if (!searchText)
      return {
        groupes: [],
        phrases: [],
      }

    const regText = new RegExp(`^${searchText}`, 'gi')

    // получаем фразы из базы поисковых тэгов
    const phrasesRes = await fullTextSearchModel
      .find({text: regText}, 'text')
      .limit(5)
    const phrases = phrasesRes.map(({text}) => text)

    // надо искать группы товаров!!!
    const groupes = await groupModel
      .find({$or: [{'description.ru': regText}, {'description.en': regText}]})
      .select<Settings_FullTextSearch_GroupesResult>(['type', 'description'])
      .limit(5)

    return {
      phrases,
      groupes,
    }
  },
}
