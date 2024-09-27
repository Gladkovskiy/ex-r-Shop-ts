import {roleController} from './auth/role'
import {userController} from './auth/user'
import {uploadFileController} from './common/uploadFile'
import {categoryController} from './product_settings/category'
import {groupController} from './product_settings/group'
import {eavAttributeController} from './products/eavAttribute'
import {eavValueController} from './products/eavValue'
import {eavEntityController} from './products/eavEntity'
import {orderController} from './products/order'
import {fullTextSearchController} from './product_settings/fullTextSearch'

export const controllers = {
  roleController,
  userController,
  categoryController,
  uploadFileController,
  groupController,
  eavAttributeController,
  eavValueController,
  eavEntityController,
  orderController,
  fullTextSearchController,
}

export type IControllers = typeof controllers
