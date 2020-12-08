import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Cart from './Cart';
import { NavSC, NavListSC } from './style';

const Nav = () => {
  // const name = 'Nav';
  const [isOpen, setIsOpen] = useState(false);
  // const history = useHistory();

  // function onChangeNav(link) {
  //   history.push(link);
  // }

  const menuClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavSC isOpen={isOpen}>
        <Cart />
        <div className="btnMenu" onClick={menuClick} aria-hidden>
          <div className="line line-1" />
          <div className="line line-2" />
          <div className="line line-3" />
        </div>
      </NavSC>
      <NavListSC isOpen={isOpen}>
        <a href="#tt">PRODUCT</a>
        <a href="#tt">PRESS</a>
        <a href="#tt">SHOP</a>
        <a href="#tt">STOCKISTS</a>
        <a href="#tt">DIRECTION</a>
        <a href="#tt">CONTACT</a>
        <div className="language">
          <a href="#tt">ENGLISH</a>
          <a href="#tt">中文</a>
        </div>
      </NavListSC>
    </>
  );
};

export default Nav;
