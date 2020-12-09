import React, { useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { IntlContext } from '@/contexts/IntlContext';
import Cart from './Cart';
import { NavSC, NavListSC } from './style';

const Nav = () => {
  const { locale, setLocale } = useContext(IntlContext);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(locale);
  // const history = useHistory();

  // function onChangeNav(link) {
  //   history.push(link);
  // }

  const langClick = (lang) => {
    setLocale(lang);
    setLanguage(lang);
  };

  const menuClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavSC isOpen={isOpen}>
        <Cart isOpen={isOpen} />
        <div className="btnMenu" onClick={menuClick} aria-hidden>
          <div className="line line-1" />
          <div className="line line-2" />
          <div className="line line-3" />
        </div>
      </NavSC>
      <NavListSC isOpen={isOpen} language={language}>
        <a href="#tt"><FormattedMessage id="menu1">PRODUCT</FormattedMessage></a>
        <a href="#tt"><FormattedMessage id="menu2">PRESS</FormattedMessage></a>
        <a href="#tt"><FormattedMessage id="menu3">SHOP</FormattedMessage></a>
        <a href="#tt"><FormattedMessage id="menu4">STOCKISTS</FormattedMessage></a>
        <a href="#tt"><FormattedMessage id="menu5">DIRECTION</FormattedMessage></a>
        <a href="#tt"><FormattedMessage id="menu6">DIRECTION</FormattedMessage></a>
        <div className="language">
          <div className="en" onClick={() => langClick('en')} aria-hidden>ENGLISH</div>
          <div className="zh" onClick={() => langClick('zh-TW')} aria-hidden>中文</div>
        </div>
      </NavListSC>
    </>
  );
};

export default Nav;
