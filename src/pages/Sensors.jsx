import React from 'react';
import AtmosphericComposition from '../components/AtmosphericComposition';

export default () => (
  <div className="atmospheric-page">
    <h1 className="Name">Mars General Status</h1>
    <div className="Image">
      <span className="helper" />
      <img className="img-mars" src="../src/assets/img/mars.png" alt="mars" />
    </div>
    <div className="stats">
      <div>
        <span>Wind Vel</span>
        <i className="fas fa-wind" />
        <span>23km/h</span>
      </div>
      <div>
        <span>Tº Wind</span>
        <i className="fas fa-thermometer" />
        <span>23ºC</span>
      </div>
      <div>
        <span>Tº Sand</span>
        <i className="fas fa-thermometer-empty" />
        <span>23ºC</span>
      </div>
      <div>
        <span>H Sand</span>
        <i className="fas fa-tint" />
        <span>10%</span>
      </div>
      <div>
        <span>Seismic Lvl</span>
        <i className="fas fa-globe-africa" />
        <span>0dB</span>
      </div>
    </div>
    <div className="stats-rigth">
      <div>
        <span>Gravity</span>
        <i className="fab fa-grav" />
        <span>3,711 m/s²</span>
      </div>
      <div>
        <span>Luminity</span>
        <i className="fas fa-lightbulb" />
        <span>25%</span>
      </div>
    </div>
    <div className="composition">
      <AtmosphericComposition />
    </div>
  </div>
);
