import React from 'react';
import Nav from '@/components/Nav/index';
import headerLogoXS from '@/assets/images/global/header_logo_xs.svg';
import headerLogoSM from '@/assets/images/global/header_logo_sm.svg';
import { HeaderSC, LogoSC } from './style';

const Header = () => {
  const name = 'header';

  return (
    <HeaderSC>
      <LogoSC href="" alt={name}>
        <img className="logoXS" src={headerLogoXS} alt="" />
        <img className="logoSM" src={headerLogoSM} alt="" />
      </LogoSC>
      <Nav />
    </HeaderSC>
  );
};

export default Header;
