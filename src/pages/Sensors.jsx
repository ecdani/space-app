import React from 'react';
import AtmosphericComposition from '../components/AtmosphericComposition';

export default () => (
  <div className="atmospheric-page">
    <div className="Name">Mars</div>
    <div className="Image">
      <img className="img-mars" src="../src/assets/img/mars.jpg" alt="mars" />
    </div>
    <div className="Radiacion-start-cell" />
    <div className="Piqueta" />
    <div className="Presion" />
    <div className="Humedad" />
    <div className="Composition">
      <AtmosphericComposition />
    </div>
  </div>
);
