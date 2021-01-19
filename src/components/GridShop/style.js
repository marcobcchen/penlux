import styled from 'styled-components';

export const ItemSC = styled.div`
  padding: 10px;

  a{
    display: block;
    overflow: hidden;

    img{
      transition: transform 0.6s ease;
      transform: translateY(0)
    }

    .hover{
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.6s ease;
    }

    &:hover{
      img{
        transition: transform 0.6s ease;
        transform: translateY(-6%)
      }

      .hover{
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s ease;
      }
    }
  }
`;

export const HoverSC = styled.div`
  position: absolute;
  left: 0;
  bottom: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .icon{
    width: 30px;
    height: 30px;
  }

  p{
    font-size: 12px;
    font-family: 'Michroma', sans-serif;
    color: black;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 14px;
    }
  }
`;
