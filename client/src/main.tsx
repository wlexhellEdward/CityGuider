import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { basePath } from '@/utils/basePath.ts'

import './index.css'
import '../firebase.ts'
import App from './App.tsx'
import { persistor, store } from './store/store.ts'

   


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter basename={basePath}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>,
)
