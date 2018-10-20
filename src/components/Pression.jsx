import React from 'react';

export default props => (
  <div>
    <i className="far fa-clock" />
    <span>
      {props.units}
      mb
    </span>
  </div>
);
