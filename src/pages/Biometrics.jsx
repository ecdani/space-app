import React from 'react';
import { Consume } from '../Providers/SensorsProvider';

export default () => (
  <div className="biometrics-page">
    <img
      className="img-bio"
      height="300px"
      src="../src/assets/img/biometrics.jpg"
      alt="bio"
    />
    <div>
      <Consume>
        {context => (
          <div>
            <div className="heart-biometric-container">
              <span style={{ padding: '10px' }}>
                {context.pulsaciones}
                ppm
              </span>
              <i
                className="fas fa-heartbeat fa-3x"
                style={{ padding: ' 0 15px' }}
              />
            </div>
            <div className="stats">
              <div>
                <span>Suit Pressure</span>
                <i className="fas fa-wind" />
                <span>{context.presTraje}b</span>
              </div>
              <div>
                <span>Temperature</span>
                <i className="fas fa-thermometer-three-quarters" />
                <span>
                  {context.tempCorporal}
                  ºC
                </span>
              </div>
              <div>
                <span>Radiation</span>
                {!!context.geiger && (
                  <i className="fas fa-exclamation-triangle" />
                )}
              </div>
              <div>
                <span>Oxygen Left</span>
                <i className="fas fa-feather" />
                <span>89%</span>
              </div>
            </div>
          </div>
        )}
      </Consume>
    </div>
  </div>
);
