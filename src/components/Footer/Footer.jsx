import React from 'react';
import logo from '@/assets/images/global/footer_logo.svg';
import FooterSC from './style';

const Footer = () => (
  <FooterSC>
    <div className="logo"><img src={logo} alt="" /></div>
    <p className="copyright">Copyright © 2020 PENLUX Inc. All rights reserved.</p>
  </FooterSC>
);

export default Footer;
