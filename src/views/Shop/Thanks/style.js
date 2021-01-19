import styled from 'styled-components';

const ThanksSC = styled.div`
  background-color: white;

  h3{
    margin-top: 8%;
    margin-bottom: 4%;
    font-family: 'Michroma', sans-serif;
    font-size: 14px;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 20px;
    }
  }

  .check-des{
    font-size: 14px;
    margin-bottom: 8%;
  }

  .order-title{
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4%;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 20px;
    }
  }

  .list-wrap{
    width: 100%;
  }

  .text-left{
    text-align: left;
  }

  .list-header{
    margin-bottom: 3%;
    font-size: 14px;
    text-align: center;
    display: none;

    @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
      display: flex;
    }
  }

  .list-body{
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 3%;
    padding: 5% 0;
    font-size: 14px;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      padding: 1% 0;
      font-size: 16px;
    }

    .list-item{
      padding: 5% 0;
      font-weight: 500;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        padding: 1% 0;
      }

      .list-content{
        text-align: center;

        .thumb{
          padding: 0 2%;
        }

        .spec{
          text-align: left;
          @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
            text-align: center;
          }

          & > div{
            width: auto;
            @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
              flex: 0 0 50%;
            }
          }

          .line{
            width: 2px;
            height: 14px;
            background-color: #999;
            margin: 0 10px;
            display: flex;

            @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
              display: none;
            }
          }
        }

        .price{
          font-weight: 300;
        }
      }

      .btn-remove{
        flex: 0 0 20px;
        cursor: pointer;
      }
    }
  }

  .list-footer{
    margin-bottom: 8%;
    text-align: right;

    .price{
      font-weight: 500;
      font-size: 18px;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        font-size: 20px;
      }
    }
  }

  .order-info{
    margin-bottom: 8%;

    .info{
      margin-bottom: 4%;

      @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
        margin-bottom: 30px;
      }

      p{
        font-size: 14px;
      }

      p.heavy{
        font-weight: 500;
      }
    }
  }
`;

export default ThanksSC;
