import styled from 'styled-components';

const ShopSC = styled.div`
  background-color: white;

  .wrap{
    padding-top: 8%;

    .pic{
      padding-left: 3%;
    }

    .spec{
      margin-left: 8.33%;

      h3{
        margin-bottom: 5%;
        font-size: 20px;

        @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
          font-size: 28px;
        }
      }

      table{
        width: 100%;
        font-size: 14px;

        tH{
          padding: 8px;
        }

        th{
          padding-left: 0;
          font-weight: 300;
          width: 40%;
        }

        td{
          font-weight: 500;
        }
      }

      .addToCart{
        margin-top: 10%;
      }

      .item-count{
        border: 2px solid black;
        height: 40px;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;

        .item-count-title{
          border-right: 2px solid black;
          padding: 0 8px;
          line-height: 40px; 
        }

        .item-count-qty > div{
          text-align: center;
          img{
            height: 20px;
            cursor: pointer;
          }
        }
      }

      .item-cart{
        padding-left: 8px;

        .btn-add-to-cart{
          display: block;
          color: black;
          border: 2px solid black;
          height: 40px;
          font-size: 14px;
          line-height: 40px;
          text-align: center;
          cursor: pointer;

          &:hover{
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
`;

export default ShopSC;
