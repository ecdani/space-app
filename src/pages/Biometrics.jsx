import React from 'react';
import AtmosphericComposition from '../components/AtmosphericComposition';
import Humidity from '../components/Humidity';

export default () => (<div className="biometrics-page">
  <h1 className="Name">Mark Watney</h1>
  <div className="Image">
      <span className="helper" />
      <img className="img-bio" src="../src/assets/img/biometrics.jpg" alt="bio" />
    </div>
  <div className="Radiacion-start-cell" />
  <div className="Sidebar-1" />
  <div className="Sidebar-2">
      <Humidity percent={45} />
    </div>
  <div className="Sidebar-3">
      <AtmosphericComposition />
    </div>
</div>

);
