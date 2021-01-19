import React from 'react';
import { Row, Col } from '@/components/Grid/';
import SubNav from '@/components/SubNav/';
import GridShop from '@/components/GridShop/';
import picPen1 from '@/assets/images/product/pen_1.jpg';
import picPen2 from '@/assets/images/product/pen_2.jpg';
import picPen3 from '@/assets/images/product/pen_3.jpg';
import picPen4 from '@/assets/images/product/pen_4.jpg';
import picPen5 from '@/assets/images/product/pen_5.jpg';
import ShopSC from './style';

const Shop = () => {
  const data = [
    {
      url: '/shop/pen/1',
      img: picPen1,
      name: 'Masterpiece GRANDE BLACK 1',
    },
    {
      url: '/shop/pen/2',
      img: picPen2,
      name: 'Masterpiece GRANDE BLACK 2',
    },
    {
      url: '/shop/pen/3',
      img: picPen3,
      name: 'Masterpiece GRANDE BLACK 3',
    },
    {
      url: '/shop/pen/4',
      img: picPen4,
      name: 'Masterpiece GRANDE BLACK 4',
    },
    {
      url: '/shop/pen/5',
      img: picPen5,
      name: 'Masterpiece GRANDE BLACK 5',
    },
  ];

  return (
    <ShopSC>
      <SubNav />
      <Row justify="center">
        <Col xs={10}>
          <Row>
            {data.map((item) => (
              <GridShop key={item.name} item={item} />
            ))}
          </Row>
        </Col>
      </Row>
    </ShopSC>
  );
};

export default Shop;
