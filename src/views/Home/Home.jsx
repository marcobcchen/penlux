import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from '@/components/Grid';
import CallToAction from '@/components/CallToAction/';
import kv1 from '@/assets/images/home/kv_md_1.jpg';
import HomeSC from './style';

const Home = () => (
  <HomeSC>
    <Row className="kv">
      <Col xs={12}><img src={kv1} alt="" /></Col>
    </Row>

    <Row className="about" justify="center">
      <Col xs={10}>
        <Row>
          <Col className="title" xs={12}>
            <h2>This is PENLUX.</h2>
            <h4>A Style to Remember A style for Creativity.</h4>
          </Col>
        </Row>
        <Row>
          <Col className="des" xs={12} md={5}>
            <p>
              <FormattedMessage id="des" values={{ linebreak: <br /> }} />
            </p>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row className="quality" justify="center">
      <Col xs={10}>Quality</Col>
    </Row>

    <CallToAction text="EXPLORE" url="/" />

  </HomeSC>
);

export default Home;
