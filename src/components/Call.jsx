import React from 'react';

export default props => (
  <div className="call" onClick={props.onClick}>
    <div
      className="call-circle"
      style={{
        backgroundImage: `url(../src/assets/img/${props.img}.jpg)`,
      }}
    />
    <div className={`call-name ${props.isActive ? 'call-name-active' : ''}`}>
      {props.name}
    </div>
  </div>
);
