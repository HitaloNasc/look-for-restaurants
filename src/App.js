import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { Reset } from 'styled-reset'
import store from './redux/store'
import Home from './pages/Home'
import theme from './theme'

const App = () => {
  return ( 
    <Provider store={store}>
      <ThemeProvider theme = { theme } >
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  )
}

export default App