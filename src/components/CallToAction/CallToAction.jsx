import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from '@/components/Grid/';
import iconArrowRight from '@/assets/images/global/icon_arrow_right.svg';
import CTA from './style';

const CallToAction = (props) => {
  const { text } = props;
  const { url } = props;

  return (
    <CTA>
      <Row justify="center">
        <Link to={url}>
          <Row justify="center" alignItems="center">
            <p>{text}</p>
            <div className="icon"><img src={iconArrowRight} alt="" /></div>
          </Row>
        </Link>
      </Row>
    </CTA>
  );
};

export default CallToAction;
