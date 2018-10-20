import React from 'react';

export default props => (
  <div>
    <span>Pres.</span>
    <i className="far fa-clock" />
    <span>
      {props.units}
      mb
    </span>
  </div>
);
