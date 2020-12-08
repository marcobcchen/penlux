import React, { useState } from 'react';
import iconCart from '@/assets/images/global/icon_cart.svg';
import CartSC from './style';

const Cart = () => {
  const [isList, setIsList] = useState(false);

  const onMouseOverHandler = () => {
    setIsList(true);
  };
  const onMouseOutHandler = () => {
    setIsList(false);
  };

  return (
    <CartSC isList={isList} onMouseEnter={onMouseOverHandler}>
      <div className="quantity">10</div>
      <div className="icon"><img src={iconCart} alt="" /></div>
      <div className="list" onMouseLeave={onMouseOutHandler}>
        <table>
          <tbody>
            <tr className="item">
              <td>Masterpiece Grande</td>
              <td>1</td>
            </tr>
            <tr className="item">
              <td>Junior Exchange Vintage</td>
              <td>1</td>
            </tr>
            <tr className="item">
              <td>Masterpiece Grande</td>
              <td>1</td>
            </tr>
            <tr>
              <td colSpan="2"><a className="btnChectout" href="cart.html">Go to Chart</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </CartSC>
  );
};

export default Cart;