import React, { useState, useEffect } from 'react';
import { SelectSC } from './style';

const Select = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const data = ['EF', 'F', 'M', 'B', 'STUB', '14K FX', '18K F', '18K M', '18K B'];

  const selectClick = () => {
    setIsSelect((prevState) => !prevState);
  };

  const itemClick = (e) => {
    setSelectedValue(e.target.textContent);
  };

  useEffect(() => {
    setSelectedValue(data[0]);
  }, []);

  return (
    <SelectSC onClick={selectClick}>
      <div className={`${isSelect ? 'select-selected select-arrow-active' : 'select-selected'}`}>{selectedValue}</div>
      <div className={`${isSelect ? 'select-items' : 'select-items select-hide'}`}>
        {data.map((item) => (
          <div key={item} onClick={itemClick} aria-hidden="true">{item}</div>
        ))}
      </div>
    </SelectSC>
  );
};

export default Select;
