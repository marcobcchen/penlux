import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from '@/components/Grid/';
import SubNav from '@/components/SubNav/';
import GridShop from '@/components/GridShop/';
import CallToAction from '@/components/CallToAction/';
import { Select, Button } from '@/components/Form/';
import Counter from '@/views/Shop/Counter/';
import picPen1 from '@/assets/images/product/pen_1.jpg';
import picPen2 from '@/assets/images/product/pen_2.jpg';
import picPen3 from '@/assets/images/product/pen_3.jpg';
import picPen4 from '@/assets/images/product/pen_4.jpg';
import picPen5 from '@/assets/images/product/pen_5.jpg';
import ShopSC from './style';

const Pen = () => {
  const { pageId } = useParams();
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
      <Row className="wrap" justify="center">
        <Col xs={10}>
          <Row>
            <Col className="pic" xs={12} md={6}><img src={picPen1} alt="" /></Col>
            <Col className="spec" xs={12} md={4}>
              <p>{pageId}</p>
              <h3>Masterpiece  GRANDE BLACK</h3>
              <table>
                <tbody>
                  <tr>
                    <th>Dimension</th>
                    <td>Φ17×149mm</td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>BLACK</td>
                  </tr>
                  <tr>
                    <th>Filling System</th>
                    <td>PISTON FILLING SYSTEM</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>33g</td>
                  </tr>
                  <tr>
                    <th>Manufacturer</th>
                    <td>Taiwan</td>
                  </tr>
                  <tr>
                    <th>Year</th>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>USD 180</td>
                  </tr>
                  <tr>
                    <th>Nib</th>
                    <td>
                      <Select />
                    </td>
                  </tr>
                </tbody>
              </table>

              <Row className="addToCart">
                <Col className="item-count" xs={6}>
                  <div className="item-count-title">QTY</div>
                  <Counter />
                </Col>
                <Col className="item-cart" xs={6}>
                  <Button url="/shop/cart">ADD</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <CallToAction text="EXPLORE" url="/" />

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

export default Pen;
