import React from 'react';
import { Row, Col } from '@/components/Grid/';
import picPen1 from '@/assets/images/product/pen_1.jpg';
import ThanksSC from './style';

const Thanks = () => {
  const removeClick = () => {};

  return (
    <ThanksSC>
      <Row justify="center">
        <Col xs={10}>
          <h3>THANK YOU.</h3>
          <Row justify="center">
            <Col xs={12} lg={6}>
              <p className="check-des">
                Your order has been placed and wil be processed soon. Please wait patiently for the confirmation email.
                You are advised to screenshop/print this confirmation page for your reference.<br />
                For further questions regarding to the order, please contact us anytime.
              </p>
            </Col>
          </Row>
          <p className="order-title">YOUR ORDER TODAY</p>
          <Row className="list-wrap list-header">
            <Col xs={5} md={3}>Item</Col>
            <Col xs={7} md={9}>
              <Row>
                <Col className="text-left" xs={12} md={4}>Discription</Col>
                <Col xs={12} md={4}>
                  <Row>
                    <Col xs={6}>Color</Col>
                    <Col xs={6}>Nib</Col>
                  </Row>
                </Col>
                <Col xs={12} md={4}>
                  <Row>
                    <Col xs={6}>QTY</Col>
                    <Col xs={6}>Price</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="list-body">
            <Col className="list-item">
              <Row alignItems="center">
                <Col className="list-wrap list-content">
                  <Row alignItems="center">
                    <Col className="thumb" xs={5} md={3}>
                      <img src={picPen1} alt="" />
                    </Col>
                    <Col xs={7} md={9}>
                      <Row>
                        <Col className="text-left" xs={12} md={4}>Masterpiece Grande</Col>
                        <Col xs={12} md={4}>
                          <Row className="spec" alignItems="center">
                            <Col>Wave</Col>
                            <div className="line">&nbsp;</div>
                            <Col>F</Col>
                          </Row>
                        </Col>
                        <Col xs={12} md={4}>
                          <Row>
                            <Col xs={6}>
                              1
                            </Col>
                            <Col xs={6}><span className="price">USD</span> 1,200</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col className="list-item">
              <Row alignItems="center">
                <Col className="list-wrap list-content">
                  <Row alignItems="center">
                    <Col className="thumb" xs={5} md={3}>
                      <img src={picPen1} alt="" />
                    </Col>
                    <Col xs={7} md={9}>
                      <Row>
                        <Col className="text-left" xs={12} md={4}>Masterpiece Grande</Col>
                        <Col xs={12} md={4}>
                          <Row className="spec" alignItems="center">
                            <Col>Wave</Col>
                            <div className="line">&nbsp;</div>
                            <Col>F</Col>
                          </Row>
                        </Col>
                        <Col xs={12} md={4}>
                          <Row>
                            <Col xs={6}>
                              1
                            </Col>
                            <Col className="price" xs={6}><span>USD</span> 1,200</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="list-footer">
            <Col>
              <p>Total</p>
              <p>USD <span className="price">1,470</span></p>
            </Col>
          </Row>

          <Row className="order-info">
            <Col xs={12} lg={4}>
              <Row>
                <Col className="info">
                  <p>Name</p>
                  <p className="heavy">Marco Chen</p>
                </Col>
              </Row>
              <Row>
                <Col className="info">
                  <p>Email address</p>
                  <p className="heavy">marco@gmail.com</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={8}>
              <Row>
                <Col className="info">
                  <p>Shipping address</p>
                  <p className="heavy">No. 122, Sec. 1, Chongqing S. Rd., Zhongzheng District Taipei City 10048, Taiwan</p>
                </Col>
              </Row>
              <Row>
                <Col className="info">
                  <p>Note (Optional)</p>
                  <p className="heavy">Hi, I’m wondering if I make the payment in NTD? Thanks.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </ThanksSC>
  );
};

export default Thanks;
