import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import enTranslate from "./locale/en.json"
import arTranslate from "./locale/ar.json"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslate
      },
      ar: {
        translation: arTranslate
      }
    },
    lng: "ar",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
