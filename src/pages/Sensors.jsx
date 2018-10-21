import React from 'react';
import AtmosphericComposition from '../components/AtmosphericComposition';
import { Consume } from '../Providers/SensorsProvider';

export default () => (
  <Consume>
    {context => (
      <div className="atmospheric-page">
        <h1 className="Name">Mars General Status</h1>
        <div className="Image">
          <span className="helper" />
          <img
            className="img-mars"
            src="../src/assets/img/mars.png"
            alt="mars"
          />
        </div>
        <div className="stats">
          <div>
            <span>W Vel</span>
            <i className="fas fa-wind" />
            <span>
              {context.velViento}
              km/h
            </span>
          </div>
          <div>
            <span>Tº Wind</span>
            <i className="fas fa-thermometer" />
            <span>
              {context.temp}
              ºC
            </span>
          </div>
          <div>
            <span>Tº Sand</span>
            <i className="fas fa-thermometer-empty" />
            <span>23ºC</span>
          </div>
          <div>
            <span>H Sand</span>
            <i className="fas fa-tint" />
            <span>{context.humSuelo}%</span>
          </div>
          <div>
            <span>S Lvl</span>
            <i className="fas fa-globe-africa" />
            <span>
              {context.valSism}
              dB
            </span>
          </div>
        </div>
        <div className="stats-rigth">
          <div>
            <span>Gravity</span>
            <i className="fab fa-grav" />
            <span>9.81 m/s²</span>
          </div>
          <div>
            <span>Luminity</span>
            <i className="fas fa-lightbulb" />
            <span>{context.Luz}%</span>
          </div>
        </div>
        <div className="composition">
          <AtmosphericComposition />
        </div>
      </div>
    )}
  </Consume>
);
