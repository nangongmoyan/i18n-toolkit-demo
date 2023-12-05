import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));

const resources = {
  zh_CN: {
    common: require('./i18n/zh-CN'),
  },
  en_US: {
    common: require('./i18n/en-US'),
  },
};



i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en_US',
    compatibilityJSON: 'v3',

    // have a common namespace used around the full app
    ns: ['common'],
    // defaultNS: 'common',

    // cache: {
    //   enabled: true,
    // },

    // react: {
    //   useSuspense: true,
    // },
  });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
