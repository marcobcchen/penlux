import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonSC } from './style';

const Button = (props) => {
  const { children } = props;
  const { url } = props;

  return (
    <ButtonSC>
      <Link to={url}>{children}</Link>
    </ButtonSC>
  );
};

export default Button;
