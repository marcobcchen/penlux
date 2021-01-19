import styled from 'styled-components';

// const breakPiont = {
//   xs: '576px',
//   sm: '576px',
//   md: '768px',
//   lg: '992px',
//   xl: '1200px',
// };

const gridWidth = (size) => `${(size / 12) * 100}%`;

const xsFlex = (size) => {
  if (size) {
    const width = gridWidth(size);
    return `
      flex: 0 0 ${width};
      max-width: ${width};
    `;
  }
  return 'width: 100%;';
};

const flex = (size) => {
  if (size) {
    const width = gridWidth(size);
    return `
      flex: 0 0 ${width};
      max-width: ${width};
    `;
  }
  return false;
};

const wrap = (props) => {
  const w = props.wrap || 'wrap';
  return w;
};
const direction = (props) => {
  const d = props.direction || 'row';
  return d;
};

const justify = (props) => {
  const j = props.justify || 'flex-start';
  return j;
};

const alignItems = (props) => {
  const a = props.alignItems || 'flex-start';
  return a;
};

export const Col = styled.div`
  position: relative;
  box-sizing: border-box;

  ${(props) => xsFlex(props.xs)}

  @media (min-width: ${({ theme }) => theme.breakPiont.sm}) {
    ${(props) => flex(props.sm)}
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.md}) {
    ${(props) => flex(props.md)}
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.lg}) {
    ${(props) => flex(props.lg)}
  }

  @media (min-width: ${({ theme }) => theme.breakPiont.xl}) {
    ${(props) => flex(props.xl)}
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: ${wrap};
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${alignItems};
  align-content: flex-start;
  width: 100%;
`;
