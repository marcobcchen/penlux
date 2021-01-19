import styled from 'styled-components';

export const NavSC = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
    margin-right: 35px;
  }

  .btnMenu{
    position: relative;
    z-index: 20;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .line{
      position: absolute;
      left: 0;
      width: 20px;
      height: 2px;
      background-color: black;
      transition: all .3s ease-in-out;
    }

    .line-1{
      top: 0;
      ${(props) => (props.isOpen ? 'transform: translate(0px, 9px) rotate(45deg);' : null)}
    }

    .line-2{
      top: 9px;
      ${(props) => (props.isOpen ? 'opacity: 0;' : null)}
    }

    .line-3{
      top: 18px;
      ${(props) => (props.isOpen ? 'transform: translate(0px, -9px) rotate(-45deg);' : null)}
    }
  }
`;

export const NavListSC = styled.div`
  position: fixed;
  right: 0%;
  top: 0;
  /* width: 260px; */
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.2) -2px 0px 5px -3px;
  padding: 0 16px;
  padding-top: 60px;
  z-index: 10;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => (props.isOpen ? 'translateX(0%)' : 'translateX(100%)')};

  > a {
    display: block;
    color: black;
    font-family: 'Michroma', sans-serif;
    font-size: 13px;
    line-height: 2.5;
    padding-right: 10px;
    margin-bottom: 8%;
    min-width: 90px;
    text-decoration: none;
    transition: all .3s ease-in-out;

    &:hover{
      color: #999;
      transform: translateY(-2px);
      text-decoration: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    padding: 0 35px;
    padding-top: 88px;

    > a{
      font-size: 20px;
      margin-bottom: 4%;
    }
  }

  .language{
    position: absolute;
    left: 16px;
    bottom: 20px;
    display: flex;

    > div{
      color: black;
      font-size: 12px;
      margin-right: 10px;
      text-decoration: none;
      border-bottom: 3px solid white;
      cursor: pointer;

      &:hover {
        text-decoration: none;
        border-bottom: 3px solid black;
      }

      &.active{
        
      }
    }

    .en{
      ${(props) => (props.language === 'en' ? 'border-bottom: 3px solid black' : null)};
    }

    .zh{
      ${(props) => (props.language === 'zh-TW' ? 'border-bottom: 3px solid black' : null)};
    }

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      left: 35px;
      bottom: 20px;
    }
  }
`;
