import React, { useState, useRef, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import zh from '@/assets/i18n/zh';
import en from '@/assets/i18n/en';

export const IntlContext = createContext();

const IntlContextProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');
  const messages = useRef();

  if (locale.includes('zh')) {
    messages.current = zh;
  } else {
    messages.current = en;
  }

  return (
    <IntlContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages.current}>
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  );
};

export default IntlContextProvider;
