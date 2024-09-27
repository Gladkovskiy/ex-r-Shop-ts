import {gql} from './__generated__'

export const ADD_CATEGORY = gql(`
mutation Settings_category_add($category: Settings_category_add!) {
  category:settings_category_add(category: $category) {
    _id
    description {
      en
      ru
    }
    img_path
    type
  }
}
`)

export const DELETE_CATEGORY = gql(`
mutation Settings_category_delete($settingsCategoryDeleteId: ObjectID!) {
  res:settings_category_delete(id: $settingsCategoryDeleteId) {
    id
  }
}

`)

export const GET_CATEGORIES = gql(`
query Settings_category_getAll {
  categories: settings_category_getAll {
    _id
    description {
      en
      ru
    }
    img_path
    type
  }
}
`)

export const ADD_GROUP = gql(`
mutation Settings_group_add($group: Settings_group_add!) {
  group:settings_group_add(group: $group) {
    _id
    category
    description {
      en
      ru
    }
    img_path
    type
  }
}
`)

export const DELETE_GROUP = gql(`
mutation Settings_group_delete($settingsGroupDeleteId: ObjectID!) {
  res:settings_group_delete(id: $settingsGroupDeleteId) {
    id
  }
}
`)

export const GET_GROUPS = gql(`
query Settings_group_get($category: String!) {
  groups:settings_group_get(category: $category) {
    _id
    description {
      en
      ru
    }
    type
    img_path
  }
}
`)
