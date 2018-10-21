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
          </div>
        )}
      </Consume>
    </div>
  </div>
);
