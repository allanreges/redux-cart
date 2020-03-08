import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './styles/global'
import Header from './components/Header'
import { Provider } from 'react-redux'
import './config/reactotronConfig'
import { ToastContainer } from 'react-toastify'
import history from './services/history'

import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header></Header>
        <Routes>
        </Routes>
        <GlobalStyle></GlobalStyle>
        <ToastContainer autoClose={2000}></ToastContainer>
      </Router>
    </Provider>
  )
}

