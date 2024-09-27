import {RouterProvider} from 'react-router-dom'
import {useGQCheckAuth} from '../graphQL/hooks/auth/checkAuth'
import {createRouter} from '../router'
import AppSpinner from './Common/AppSpinner'

const AppRouter = () => {
  const {loading, data} = useGQCheckAuth()

  return (
    <>
      {loading ? (
        <AppSpinner h="100vh" />
      ) : (
        <RouterProvider
          router={createRouter({
            isAuth: !!data?.user.id,
            role: data?.user.role,
          })}
        />
      )}
    </>
  )
}

export default AppRouter
