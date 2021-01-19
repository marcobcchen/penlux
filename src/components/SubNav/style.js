import styled from 'styled-components';

const SubNavSC = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  width: 100%;
  height: 45px;
  z-index: 10;

  .item:first-child{
    margin-left: 21px;

    @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
      margin-left: 54px;
    }
  }
  
  .item{
    display: flex;
    margin-right: 2%;
    align-items: center;
    font-size: 12px;
    font-family: 'Michroma', sans-serif;

    a{
      color: black;
      transition: all .3s ease-in-out;
      transform: scale(0.8);
      transform-origin: left center;

      @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
        transform: scale(1);
      }
    }

    a:hover{
      color: #999;
    }

    .icon{
      width: 15px;
      height: 17px;
      margin-right: 8px;
    }
  }
`;

export default SubNavSC;
