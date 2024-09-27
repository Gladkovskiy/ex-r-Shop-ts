import {useEffect} from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import AppRouter from './components/AppRouter'
import {theme} from './styles'

import {ApolloProvider} from '@apollo/client'
import {client} from './apolloClent'

import {Provider} from 'react-redux'
import {persistor, store} from './storage'
import {PersistGate} from 'redux-persist/integration/react'

import './i18n/config'
import {useTranslation} from 'react-i18next'
import {HelmetProvider} from 'react-helmet-async'

function App() {
  const {i18n} = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('language') || 'ru')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
            <HelmetProvider>
              <AppRouter />
            </HelmetProvider>
          </ChakraProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
