import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import iconPen from '@/assets/images/global/icon_pen.svg';
import iconInk from '@/assets/images/global/icon_ink.svg';
import iconLimited from '@/assets//images/global/icon_limited.svg';
import SubNavSC from './style';

const SubNav = () => {
  const { url } = useRouteMatch();

  return (
    <SubNavSC>
      <div className="item">
        <Link to={`${url}`}>All</Link>
      </div>
      <div className="item">
        <div className="icon"><img src={iconPen} alt="" /></div>
        <Link to={`${url}/pen`}>Pen</Link>
      </div>
      <div className="item">
        <div className="icon"><img src={iconInk} alt="" /></div>
        <Link to={`${url}/ink`}>Ink</Link>
      </div>
      <div className="item">
        <div className="icon"><img src={iconLimited} alt="" /></div>
        <Link to={`${url}/ink`}>Limited Product</Link>
      </div>
    </SubNavSC>
  );
};

export default SubNav;
