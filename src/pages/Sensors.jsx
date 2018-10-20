import React from 'react';
import AtmosphericComposition from '../components/AtmosphericComposition';

export default () => (
  <div className="atmospheric-page">
    <h1 className="Name">Mars General Status</h1>
    <div className="Image">
      <span className="helper" />
      <img className="img-mars" src="../src/assets/img/mars.png" alt="mars" />
    </div>
    <div className="Radiacion-start-cell" />
    <div className="Piqueta" />
    <div className="Presion" />
    <div className="Humedad" />
    <div className="composition">
      <AtmosphericComposition />
    </div>
  </div>
);
