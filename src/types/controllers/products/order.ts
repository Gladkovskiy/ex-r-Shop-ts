import {ObjectId} from 'mongoose'
import {
  IdResponse,
  Pagination_Input,
  Products_Order,
  Products_Order_Cancel_Input,
  Products_Order_Input,
  Products_Order_NewCount,
} from '../../../graphql/generated-types'

export interface IOrderController {
  products_order_getNewCount?: () => Promise<Products_Order_NewCount>
  products_order_getNew?: (
    pagination: Pagination_Input
  ) => Promise<Products_Order[]>
  products_order_getForNumber?: (orderNumber: number) => Promise<Products_Order>

  products_order_add?: (order: Products_Order_Input) => Promise<Products_Order>
  products_order_delete?: (id: ObjectId) => Promise<IdResponse>
  products_order_confirm?: (id: ObjectId) => Promise<Products_Order>
  products_order_cancel?: (id: ObjectId) => Promise<Products_Order>
  products_order_comlete?: (id: ObjectId) => Promise<Products_Order>
  products_order_update?: (
    id: ObjectId,
    order: Products_Order_Input
  ) => Promise<Products_Order>
}
