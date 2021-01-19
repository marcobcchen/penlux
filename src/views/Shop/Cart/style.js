import styled from 'styled-components';

const CartSC = styled.div`
  background-color: white;

  h3{
    margin: 8% 0;
    font-family: 'Michroma', sans-serif;
    font-size: 14px;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
      font-size: 20px;
    }
  }

  .list-wrap{
    width: calc(100% - 20px);
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
    align-items: stretch;

    .order-form{
      padding-right: 0%;
      margin-bottom: 6.5%;

      > div{
        line-height: 0;
      }

      @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
        padding-right: 5%;
        margin-bottom: 0%;
      }

      input, textarea{
        font-family: inherit;
        width: 100%;
        background-color: #f3f3f3;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555555;
      }

      input{
        height: 40px;
        margin-bottom: 15px;
      }
    }

    .order-notice{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .des{
        margin-bottom: 6%;

        @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
          margin-bottom: 0%;
        }
      }

      .title{
        font-weight: 500;
        font-size: 14px;
      }

      ol{
        list-style: decimal;
        padding-left: 14px;
        font-size: 14px;
      }

      .pl{
        padding-left: 0;
        margin-top: 4%;

        @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
          padding-left: 8px;
          margin-top: 0%;
        }
      }
    }
  }
`;

export default CartSC;
