import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from 'react-router-dom'
import Administration from './pages/Administration'
import Discount from './pages/Discount'
import Groups from './pages/Groups'
import Main from './pages/Main'
import MainLayout from './pages/MainLayout'
import MyOrders from './pages/MyOrders'
import Operator from './pages/Operator'
import PersonalData from './pages/PersonalData'
import Product from './pages/Product'
import Products from './pages/Products'
import Search from './pages/Search'
import {Routes} from './types/router'

interface ICreateRouter {
  isAuth?: boolean
  role?: string
}

export const createRouter = ({isAuth = false, role = ''}: ICreateRouter) =>
  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={Routes.MAIN} Component={MainLayout}>
          <Route index Component={Main} />
          <Route path={Routes.PRODUCTS} Component={Products} />
          <Route path={Routes.CATEGORY} Component={Groups} />
          <Route path={Routes.PRODUCT} Component={Product} />
          <Route path={Routes.SEARCH} Component={Search} />
          <Route path={Routes.MY_ORDERS} Component={MyOrders} />
          <Route path={Routes.PERSONAL_DATA} Component={PersonalData} />
          <Route path={Routes.DISCOUNT} Component={Discount} />

          {role === 'ADMIN' && (
            <>
              <Route path={Routes.ADMIN} Component={Administration} />
              <Route path={Routes.OPERATOR} Component={Operator} />
            </>
          )}
          {role === 'OPERATOR' && (
            <>
              <Route path={Routes.OPERATOR} Component={Operator} />
            </>
          )}
        </Route>
        <Route path="*" loader={() => redirect(Routes.MAIN)} />
      </>
    )
  )
