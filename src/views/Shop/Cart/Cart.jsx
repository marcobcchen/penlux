import React from 'react';
import { Row, Col } from '@/components/Grid/';
import { Button } from '@/components/Form/';
import Counter from '@/views/Shop/Counter/';
import iconRemove from '@/assets/images/global/icon_close.svg';
import picPen1 from '@/assets/images/product/pen_1.jpg';
import CartSC from './style';

const Cart = () => {
  const removeClick = () => {};

  return (
    <CartSC>
      <Row justify="center">
        <Col xs={10}>
          <h3>SHOPPING CART</h3>
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
                              <Counter max={5} />
                            </Col>
                            <Col xs={6}><span className="price">USD</span> 1,200</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col className="btn-remove" onClick={removeClick}>
                  <img src={iconRemove} alt="" />
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
                              <Counter />
                            </Col>
                            <Col className="price" xs={6}><span>USD</span> 1,200</Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col className="btn-remove" onClick={removeClick}>
                  <img src={iconRemove} alt="" />
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
            <Col className="order-form" xs={12} lg={6}>
              <div>
                <input type="text" placeholder="Name *" />
              </div>
              <div>
                <input type="text" placeholder="Email address *" />
              </div>
              <div>
                <input type="text" placeholder="Shipping address *" />
              </div>
              <div>
                <textarea type="text" placeholder="Note (Optional)" rows="3" />
              </div>
            </Col>
            <Col className="order-notice" xs={12} lg={6}>
              <div className="des">
                <p className="title">Notice</p>
                <ol>
                  <li>
                    You won’t be charged until you receive a quote with a PayPal code that directs you to make the payment.
                    For questions about the order, please contact us for more detailed information.
                  </li>
                  <li>We won’t ship our products to any North America and Japan addresses due to agreement. Please contact your local dealers.</li>
                </ol>
              </div>
              <Row>
                <Col xs={12} md={5}>
                  <Button url="/shop">Continue Shopping</Button>
                </Col>
                <Col className="pl" xs={12} md={7}>
                  <Button url="/shop/thanks">Place Order</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </CartSC>
  );
};

export default Cart;
