import styled from 'styled-components';

const Wrapper = styled.div`
  /* display: flex;
  height: 100vh; */
  padding-top: 60px;

  @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
    padding-top: 88px;
  }
`;

export default Wrapper;
