import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from '@/components/Grid/';
import iconArrowTop from '@/assets/images/global/icon_arrow_top.svg';
import { ItemSC, HoverSC } from './style';

const GridShop = (props) => {
  const { item } = props;
  const { url, img, name } = item;

  return (
    <Col xs={6} sm={4}>
      <ItemSC>
        <Link to={url}>
          <img src={img} alt="" />
          <HoverSC className="hover">
            <div className="icon"><img src={iconArrowTop} alt="" /></div>
            <p>{name}</p>
          </HoverSC>
        </Link>
      </ItemSC>
    </Col>
  );
};

export default GridShop;
