import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import i18n from 'i18next';

function App () {
  const [value, setValue] = useState('en_US')
  const { t } = useTranslation()

  const changeLanguage = () => {
    setValue(value === 'en_US' ? 'zh_CN' : 'en_US')
  }

  useEffect(() => {
    i18n.changeLanguage(value);
  }, [value])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('70db5534f81b5ffdca31b122cc35068a')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={changeLanguage} style={{ marginTop: 20 }}>changeLanguage</button>
      </header>
    </div>
  );
}

export default App;
