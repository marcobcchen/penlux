import styled from 'styled-components';

const CarouselSC = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;

  .items{
    flex-grow: 1;
    transition: all .6s ease;
    transform: translateX(${(props) => (props.distanceX)}%);

    .item{
      margin-right: 0%;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        margin-right: 10%;
      }
    }

    .item:first-child{
      margin-left: 16.67%;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        margin-left: 25%;
      }
    }
  }

  .control{
    position: absolute;
    left: 0;
    bottom: 0;

    .arrow{
      display: flex;
      justify-content: center;

      img{
        transition: all 0.4s ease-in-out;
        max-width: 30px;
        cursor: pointer;
      }
    }

    .arrowLeft{
      img{
        visibility: ${(props) => (props.status === 'left' ? 'hidden' : 'visible')};
        opacity: ${(props) => (props.status === 'left' ? 0 : 1)};
      }
    }

    .arrowRight{
      img{
        visibility: ${(props) => (props.status === 'right' ? 'hidden' : 'visible')};
        opacity: ${(props) => (props.status === 'right' ? 0 : 1)};
      }
    }

    .currentName{
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      padding-top: 28.6%;
      overflow: hidden;

      .nameList {
        position: absolute;
        left: 0;
        top: 0;
        transition: transform 0.7s ease-out;
        transform: translate(0, ${(props) => (props.distanceY)}%);

        img{
          transition: opacity 0.5s ease;
          opacity: 0;
        }

        ${(props) => (`
          img:nth-child(${props.id}){ 
            opacity: 1; 
          }
        `)}
      }
    }
  }
`;

export default CarouselSC;
