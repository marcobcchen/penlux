import styled from 'styled-components';

const HomeSC = styled.div`
  .des{
    margin-bottom: 13%;
  }

  .kv{
    /* img{
      display: block;
      width: 100%;
    } */
  }

  .about{
    background-color: ${({ theme }) => theme.color.primary};

    .title{
      padding: 13% 0;

      h2, h4{
        text-align: right;
        font-family: 'Michroma', sans-serif;
      }

      h2{
        font-size: 18px;
        @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
          font-size: 30px;
        }
      }

      h4{
        font-size: 12px;
        @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
          font-size: 18px;
        }
      }
    }

    .des{
      p{
        font-weight: 200;
        font-size: 14px;
        @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
          font-size: 16px;
        }
      }
    }
  }

  .quality{
    background-color: #fff;
  }
`;

export default HomeSC;
