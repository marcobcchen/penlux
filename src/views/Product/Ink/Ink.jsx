import React from 'react';

const Ink = () => {
  const name = 'Ink page';
  const page = {
    paddingTop: '45px',
  };
  return (
    <div style={page}>
      {name}
    </div>
  );
};

export default Ink;
