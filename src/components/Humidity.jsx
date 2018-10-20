import React from 'react';

export default props => (
  <div>
    <span>Humidity</span>
    <i className="fas fa-tint" />
    <span>{props.percent}%</span>
  </div>
);
