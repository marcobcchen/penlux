import styled from 'styled-components';

const FooterSC = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  padding-top: 20px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .logo {
    width: 6%;
    max-width: 30px;
  }

  .copyright{
    font-size: 12px;
    line-height: 25px;
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
    padding-top: 60px;
    padding-bottom: 35px;

    .copyright{
      line-height: 35px;
    }
  }
`;

export default FooterSC;
