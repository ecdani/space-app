import React from 'react';
import AtmosphericComposition from '../components/AtmosphericComposition';
import Humidity from '../components/Humidity';
import Pression from '../components/Pression';

export default () => (
  <div className="atmospheric-page">
    <div className="Name">Mars</div>
    <div className="Image">
      <img className="img-mars" src="../src/assets/img/mars.png" alt="mars" />
    </div>
    <div className="Radiacion-start-cell" />
    <div className="Piqueta" />
    <div className="presion">
      <Pression units={28} />
    </div>
    <div className="humidity">
      <Humidity percent={45} />
    </div>
    <div className="composition">
      <AtmosphericComposition />
    </div>
  </div>
);
