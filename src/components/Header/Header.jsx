import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import Nav from '@/components/Nav/index';
import headerLogoXS from '@/assets/images/global/header_logo_xs.svg';
import headerLogoSM from '@/assets/images/global/header_logo_sm.svg';
import { HeaderSC, LogoSC } from './style';

const Header = () => (
  <HeaderSC>
    <LogoSC>
      <Router>
        <Link to="/">
          <img className="logoXS" src={headerLogoXS} alt="" />
          <img className="logoSM" src={headerLogoSM} alt="" />
        </Link>
      </Router>
    </LogoSC>
    <Nav />
  </HeaderSC>
);

export default Header;
