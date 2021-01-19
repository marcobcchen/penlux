import React from 'react';
import { FormattedMessage } from 'react-intl';

const Press = () => {
  const name = 'Press';

  return (
    <div>
      {name}
      <p><FormattedMessage id="press">Press page</FormattedMessage></p>
    </div>
  );
};

export default Press;
