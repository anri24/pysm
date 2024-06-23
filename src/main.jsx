import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from 'i18next'
import global_en from './locale/en/global.json'
import global_ar from './locale/ar/global.json'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

i18next.init({
  interpolation: {escapeValue: true},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>,
)
