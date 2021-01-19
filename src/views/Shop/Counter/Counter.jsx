import React, { useState } from 'react';
import { Row, Col } from '@/components/Grid/';
import iconPlus from '@/assets/images/global/icon_plus.svg';
import iconMinus from '@/assets/images/global/icon_minus.svg';
import CounterSC from './style';

const Counter = (props) => {
  const { max } = props;
  const [count, setCount] = useState(1);

  const minusClick = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  const plusClick = () => {
    if (max) {
      if (count >= max) return;
      setCount(count + 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <CounterSC>
      <Row className="item-count-qty" alignItems="center">
        <Col xs={4} onClick={minusClick}><img src={iconMinus} alt="" /></Col>
        <Col xs={4}>{count}</Col>
        <Col xs={4} onClick={plusClick}><img src={iconPlus} alt="" /></Col>
      </Row>
    </CounterSC>
  );
};

export default Counter;
