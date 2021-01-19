import styled from 'styled-components';

const CartSC = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 20px;
  z-index: 10; 

  .quantity{
    color: #fff;
    background: #000;
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin-right: 3px;
    border-radius: 30px;
    text-align: center;
  }
  
  .icon{
    width: 30px;
    height: 30px;    
    cursor: pointer;
  }

  .list{
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.4s ease-in-out;
    visibility: ${(props) => (props.isList ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isList ? 1 : 0)};
    
    .item td{
      padding: 5px 10px;
    }

    table{
      margin-top: 40px;
      width: 200px;
      background: white;
      border: 2px solid black;
      font-size: 14px;
    }

    td{
      border: 1px solid black;
    }

    .btnCheckout{
      display: block;
      color: black;
      background: ${({ theme }) => theme.color.primary};
      text-decoration: none;
      padding: 5px;
      text-align: center;
    }
  }
`;

export default CartSC;
