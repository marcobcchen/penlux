import styled from 'styled-components';

export const HeaderSC = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
    height: 88px;
  }
`;

export const LogoSC = styled.a`
  display: block;
  width: 25%;
  margin-left: 21px;

  .logoXS{
    display: block;
  }

  .logoSM{
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
    width: 27.4%;
    max-width: 320px;
    margin-left: 54px;

    .logoXS{
      display: none;
    }

    .logoSM{
      display: block;
    }
  }
`;
