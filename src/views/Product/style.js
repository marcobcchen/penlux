import styled from 'styled-components';

const ProductSC = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);

  @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
    height: calc(100vh - 88px);
  }
`;

export default ProductSC;
