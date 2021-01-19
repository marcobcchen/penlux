import React, { useState, useRef, useEffect } from 'react';
import picPen1 from '@/assets/images/product/pen_1.jpg';
import picPen2 from '@/assets/images/product/pen_2.jpg';
import picPen3 from '@/assets/images/product/pen_3.jpg';
import picPen4 from '@/assets/images/product/pen_4.jpg';
import picPen5 from '@/assets/images/product/pen_5.jpg';
import namePen1 from '@/assets/images/product/name_1.png';
import namePen2 from '@/assets/images/product/name_2.png';
import namePen3 from '@/assets/images/product/name_3.png';
import iconArrowLeft from '@/assets/images/global/icon_arrow_left.svg';
import iconArrowRight from '@/assets/images/global/icon_arrow_right.svg';
import { Row, Col } from '@/components/Grid/';
import useScreenSize from '@/hooks/useScreenSize';
import CarouselSC from './style';

const Carousel = () => {
  const [distanceX, setDistanceX] = useState(0);
  const [distanceY, setDistanceY] = useState(0);
  const nowId = useRef(0);
  const screenSize = useScreenSize();
  const itemNum = 5;

  const motionHandler = () => {
    if (screenSize.width <= 768) {
      setDistanceX(nowId.current * 66.67);
    } else {
      setDistanceX(nowId.current * 60);
    }
    setDistanceY(nowId.current * (100 / itemNum));
  };

  const prevClick = () => {
    nowId.current === 0 ? nowId.current = 0 : nowId.current += 1;
    motionHandler();
  };

  const nextClick = () => {
    nowId.current === 1 - itemNum ? nowId.current = 1 - itemNum : nowId.current -= 1;
    motionHandler();
  };

  const checkBtnStatus = () => {
    let hiddenTarget = '';
    if (nowId.current === 0) hiddenTarget = 'left';
    if (nowId.current === 1 - itemNum) hiddenTarget = 'right';
    return hiddenTarget;
  };

  const CurrentName = () => (
    <div className="currentName">
      <div className="nameList">
        <img src={namePen1} alt="" />
        <img src={namePen2} alt="" />
        <img src={namePen3} alt="" />
        <img src={namePen1} alt="" />
        <img src={namePen2} alt="" />
      </div>
    </div>
  );

  useEffect(() => {
    window.addEventListener('resize', motionHandler);
    return () => {
      window.removeEventListener('resize', motionHandler);
    };
  });

  return (
    <CarouselSC id={nowId.current * -1 + 1} distanceX={distanceX} distanceY={distanceY} status={checkBtnStatus()}>
      <Row className="items" wrap="nowrap" alignItems="center">
        <Col xs={8} md={6} className="item"><img src={picPen1} alt="" /></Col>
        <Col xs={8} md={6} className="item"><img src={picPen2} alt="" /></Col>
        <Col xs={8} md={6} className="item"><img src={picPen3} alt="" /></Col>
        <Col xs={8} md={6} className="item"><img src={picPen4} alt="" /></Col>
        <Col xs={8} md={6} className="item"><img src={picPen5} alt="" /></Col>
      </Row>
      <Row className="control" justify="center">
        <Col xs={10} sm={8}>
          <Row justify="center" alignItems="center">
            <Col className="arrow arrowLeft" onClick={prevClick} xs={1}>
              <img src={iconArrowLeft} alt="" />
            </Col>
            <Col xs={9} sm={8} md={6}>
              {CurrentName()}
            </Col>
            <Col className="arrow arrowRight" onClick={nextClick} xs={1}>
              <img src={iconArrowRight} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </CarouselSC>
  );
};

export default Carousel;
