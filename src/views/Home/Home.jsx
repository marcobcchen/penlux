import React from 'react';
import { Row, Col } from '@/components/Grid';
import kv1 from '@/assets/images/home/kv_md_1.jpg';
import HomeSC from './style';

const Home = () => {
  const name = 'Home';
  return (
    <HomeSC>
      <Row className="kv">
        <Col xs={12}><img src={kv1} alt="" /></Col>
      </Row>

      <Row className="about">
        <Col xs={10}>
          <Row>
            <Col className="title" xs={12}>
              <h2>This is PENLUX.</h2>
              <h4>A Style to Remember A style for Creativity.</h4>
            </Col>
          </Row>
          <Row>
            <Col className="des" xs={12} md={5}>
              <p>{name}</p>
              <p>
                PENLUX was founded in 1999 as a “Manufactured Penlux Co”, and have been only focused on
                manufacturing of writing instrument for leading brands. We exclusively deal with the creation of
                writing instruments on behalf of third parties. We provide integrated services simply from the
                customer’s drawings, material developing, prototype making, clip molding, metal molding, and
                mass production.<br /><br />
                We specialize in product design, manufacturing, and handcrafting. Our craftsmen passionate
                about renovated tradition and have hight experience with varied materials. All models is designed
                and handcrafted by special skill and famous craftsmen with low number production.<br /><br />
                Penlux manufacturing takes place in Taiwan, and 80% of products will be done in-house in order to
                ensure the quality and design confidentially. Production quantity is kept low. We mainly use
                turning and milling with computer numerically controlled (CNC) lathes, lost-wax and metal
                shearing and coining. Our skilled craftsmen are all expert to create precision finished writing
                instrument from materials of cellulose acetate, ebonite, methacrylate(PMMA), and precise metals.<br /><br />
                On Year 2004, we started our first partnership with TACCIA in California and lately sold the name
                on Year 2011. This was our branding business and learning much from our co-founder Shu Jen Lin
                about branding marketing. At the same year, we began representing Sailor Co. in Taiwan market
                until now. We have been trying to expend our business not only OEM/ODM business but also
                branding and distribution.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

    </HomeSC>
  );
};

export default Home;
