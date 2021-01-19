import styled from 'styled-components';

const CTA = styled.div`
  background-color: #fff;
  padding: 10% 0;

  a{
    color: #333333;

    &:hover{
      .icon{
        transform: translateX(10px);
      }
    }
  }

  p{
    font-family: 'Michroma', sans-serif;
    font-size: 14px;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 18px;
    }
  }

  .icon{
    width: 30px;
    margin-left: 20px;
    transition: transform 0.6s ease;
  }
`;

export default CTA;
