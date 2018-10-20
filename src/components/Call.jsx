import React from 'react';

export default props => (
  <div className="call">
    <div
      className="call-circle"
      style={{
        backgroundImage: `url(../src/assets/img/${props.img}.jpg)`,
      }}
    />
    <div className="call-name">{props.name}</div>
  </div>
);
