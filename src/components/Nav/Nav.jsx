import React, { useState, useContext } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { IntlContext } from '@/contexts/IntlContext';
import { NavSC, NavListSC } from './style';
import Cart from './Cart';

const Nav = () => {
  const { locale, setLocale } = useContext(IntlContext);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(locale);

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
        <Router>
          <Link onClick={menuClick} to="/product"><FormattedMessage id="menu1">PRODUCT</FormattedMessage></Link>
          <Link onClick={menuClick} to="/press"><FormattedMessage id="menu2">PRESS</FormattedMessage></Link>
          <Link onClick={menuClick} to="/shop"><FormattedMessage id="menu3">SHOP</FormattedMessage></Link>
          <Link onClick={menuClick} to="/"><FormattedMessage id="menu4">STOCKISTS</FormattedMessage></Link>
          <Link onClick={menuClick} to="/"><FormattedMessage id="menu5">DIRECTION</FormattedMessage></Link>
          <Link onClick={menuClick} to="/"><FormattedMessage id="menu6">CONTACT</FormattedMessage></Link>
        </Router>
        <div className="language">
          <div className="en" onClick={() => langClick('en')} aria-hidden>ENGLISH</div>
          <div className="zh" onClick={() => langClick('zh-TW')} aria-hidden>中文</div>
        </div>
      </NavListSC>
    </>
  );
};

export default Nav;
