import React from 'react';

const Pen = () => {
  const name = 'Pen page';
  const page = {
    paddingTop: '45px',
  };
  return (
    <div style={page}>
      {name}
    </div>
  );
};

export default Pen;
